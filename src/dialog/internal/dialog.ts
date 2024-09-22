import { html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { DialogType, IDialogProps } from '../internal/dialog.interface';
import { DialogCloseAnimations, DialogOpenAnimations } from './animation';

export class AlertDialog extends LitElement implements IDialogProps {


    @property({ type: Boolean })
    public get open() {
        return this.isOpen
    }
    public set open(isOpen: boolean) {
        // Prevent no response after show or close.
        if (isOpen === this.isOpen) {
            return
        }
        this.isOpen = isOpen
        if (isOpen) {
            this.setAttribute('open', 'true')
            this.show()
        } else {
            this.removeAttribute('open')
            this.close()
        }
    }

    @property({ type: String })
    public type: DialogType = 'alert'

    @property({ attribute: false })
    public returnValue: string = ''

    private isOpen: boolean = false
    private isOpening: boolean = false

    @query('dialog')
    private readonly dialog!: HTMLDialogElement | null
    @query('.scrim')
    private readonly scrim!: HTMLDialogElement | null
    @query('.container')
    private readonly container!: HTMLDialogElement | null
    @query('.headline-container')
    private readonly headline!: HTMLDialogElement | null
    @query('.content')
    private readonly content!: HTMLDialogElement | null
    @query('.action-container')
    private readonly actions!: HTMLDialogElement | null
    @query('.scroll-container')
    private readonly scroller!: HTMLElement | null
    @state()
    private isAtScrollTop = false
    @state()
    private isAtScrollBottom = false

    @state()
    private hasHeadline = false;
    @state()
    private hasActions = false;
    @state()
    private hasIcon = false;

    private treewalk = typeof window === 'undefined' ? null : document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT)
    private get actionButtonElements() {
        if (!this.treewalk) {
            return []
        }
        const buttons: Array<HTMLElement> = []
        while (this.treewalk?.nextNode()) {
            if ((this.treewalk.currentNode as HTMLElement).attributes.getNamedItem('is-hitman-dialog-button') !== null) {
                buttons.push(this.treewalk.currentNode as HTMLElement)
            }
        }
        this.treewalk.currentNode = this.treewalk.root
        return buttons
    }

    @state()
    private currentActionButtonIndex = 0
    private get actionButtonIndex() {
        return this.currentActionButtonIndex
    }
    private set actionButtonIndex(index: number) {
        if (this.currentActionButtonIndex === index) {
            return
        }
        const preValue = this.currentActionButtonIndex
        if (index > this.actionButtonElements.length - 1) {
            this.currentActionButtonIndex = 0
        } else if (index < 0) {
            this.currentActionButtonIndex = this.actionButtonElements.length - 1
        } else {
            this.currentActionButtonIndex = index
        }
        this.actionButtonElements[preValue].removeAttribute('active')
        this.actionButtonElements[this.currentActionButtonIndex].setAttribute('active', 'true')
    }

    private nextClickIsFromContent: boolean = false
    private escapePressedWithoutCancel: boolean = false
    private cancelAnimation?: AbortController

    constructor() {
        super()
        if (typeof window !== 'undefined') {
            this.addEventListener('submit', this.handleSubmit)
            window.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                    this.actionButtonIndex -= 1
                } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                    this.actionButtonIndex += 1
                }

            })
        }
    }

    protected render() {
        const classes = {
            'has-headline': this.hasHeadline,
            'has-actions': this.hasActions,
            'has-icon': this.hasIcon,
            // 'scrollable': scrollable,
            // 'show-top-divider': scrollable && !this.isAtScrollTop,
            // 'show-bottom-divider': scrollable && !this.isAtScrollBottom,
        };
        return html`
            <div class="scrim"></div>
            <dialog
                @cancel=${this.handleCancel}
                @click=${this.handleDialogClick}
                @close=${this.handleClose}
                @keydown=${this.handleKeydown}
                returnValue=${this.returnValue || nothing}
                class=${classMap(classes)}
            >
                <div class="container" @click=${this.handleContentClick}>
                    <div class="headline-container">
                        <div class="icon">
                            <slot name="icon" @slotchange=${this.handleIconChange}></slot>
                        </div>
                        <h2 class="headline">
                            <slot name="headline" @slotchange=${this.handleHeadlineChange}></slot>
                        </h2>
                    </div>
                    <div class="scroll-container">
                        <div class="content">
                            <slot name="content"></slot>
                        </div>
                    </div>
                    <div class="action-container">
                        <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
                    </div>
                </div>
            </dialog>
        `
    }

    public async show() {
        this.isOpening = true
        await this.updateComplete
        if (this.dialog?.open || !this.isOpening) {
            this.isOpening = false
            return
        }

        const preventOpen = !this.dispatchEvent(new Event('open', { cancelable: true }))
        if (preventOpen) {
            this.open = false
            this.isOpening = false
            return
        }

        this.dialog?.showModal()
        this.open = true

        if (this.scroller) {
            this.scroller.scrollTop = 0;
        }

        await this.dialogAnimate('open')
        this.dispatchEvent(new Event('opened', {}))
        this.isOpening = false

    }
    public async close(returnValue = this.returnValue) {
        this.isOpening = false
        if (!this.isConnected) {
            this.open = false
            return
        }

        await this.updateComplete

        if (!this.dialog?.open || this.isOpening) {
            this.open = false
            return
        }

        const preReturnValue = this.returnValue
        this.returnValue = returnValue
        const preventClose = !this.dispatchEvent(new Event('close', { cancelable: true }))
        if (preventClose) {
            this.returnValue = preReturnValue
            return
        }

        await this.dialogAnimate('close')
        this.dialog.close()
        this.open = false
        this.dispatchEvent(new Event('closed', {}))
    }

    private async dialogAnimate(mode: 'open' | 'close') {
        this.cancelAnimation?.abort()
        this.cancelAnimation = new AbortController()

        if (!this.dialog || !this.scrim) {
            return
        }

        const dialogAnimations = mode === 'open' ? DialogOpenAnimations : DialogCloseAnimations
        const animations: Array<Animation> = [
            this.dialog.animate(dialogAnimations.dialog.keyframe, dialogAnimations.dialog.options),
            this.scrim.animate(dialogAnimations.scrim.keyframe, dialogAnimations.scrim.options),
            this.container!.animate(dialogAnimations.container.keyframe, dialogAnimations.container.options),
            this.actions!.animate(dialogAnimations.actions.keyframe, dialogAnimations.actions.options),
        ]
        for (const ani of animations) {
            this.cancelAnimation.signal.addEventListener('abort', () => {
                ani.cancel()
            })
        }
        await Promise.all(animations.map((animation) => animation.finished.catch(() => { })))
    }

    private handleDialogClick() {
        if (this.nextClickIsFromContent) {
            this.nextClickIsFromContent = false
            return
        }

        const preventDefault = !this.dispatchEvent(new Event('cancel', { cancelable: true }))

        if (preventDefault) {
            return
        }
        this.close()
    }
    private handleContentClick() {
        this.nextClickIsFromContent = true
    }
    private handleSubmit(e: SubmitEvent) {
        const form = e.target as HTMLFormElement
        const { submitter } = e

        if (form.method !== 'dialog' || !submitter) {
            return
        }
        this.close(submitter.getAttribute('value') ?? this.returnValue)
    }
    private handleCancel(e: Event) {
        if (e.target !== this.dialog) {
            return
        }

        this.escapePressedWithoutCancel = false

        // const preventDefault = !this.dispatchEvent()
        e.preventDefault()
        this.close()
    }
    private handleClose() {
        if (!this.escapePressedWithoutCancel) {
            return
        }

        this.escapePressedWithoutCancel = false
        this.dialog?.dispatchEvent(new Event('cancel', { cancelable: true }))
    }
    private handleKeydown(event: KeyboardEvent) {
        if (event.key !== 'Escape') {
            return;
        }

        // An escape key was pressed. If a "close" event fires next without a
        // "cancel" event first, then we know we're in the Chrome v120 bug.
        this.escapePressedWithoutCancel = true;
        // Wait a full task for the cancel/close event listeners to fire, then
        // reset the flag.
        setTimeout(() => {
            this.escapePressedWithoutCancel = false;
        });
    }

    private handleHeadlineChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasHeadline = slot.assignedElements().length > 0;
    }

    private handleActionsChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasActions = slot.assignedElements().length > 0;
    }

    private handleIconChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasIcon = slot.assignedElements().length > 0;
    }
}
