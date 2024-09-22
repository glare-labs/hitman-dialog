import { html, LitElement, nothing } from "lit";
import { property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { dispatchActivationClick, isActivationClick } from "../../internal/form-label-activation";

export class DialogButton extends LitElement {
    static readonly formAssociated = true
    static override shadowRootOptions: ShadowRootInit = {
        mode: 'open',
        delegatesFocus: true,
    }

    @property({ reflect: true, type: Boolean })
    public get active() {
        return this.isActive
    }
    public set active(isActive: boolean) {
        if (isActive === this.isActive) {
            return
        }
        this.isActive = isActive
        if (isActive) {
            this.focus()
        } else {
            this.blur()
        }
    }
    private isActive = false

    @property({ reflect: true })
    public value: string = ''

    // @property({ reflect: true, type: String })
    // public form: string = ''

    @property()
    public href: string = ''

    @property()
    public target: '_blank' | '_parent' | '_self' | '_top' | '' = ''

    @property({ reflect: true, attribute: 'type' })
    public buttonType: 'submit' | 'button' | 'reset' = 'submit'

    get name() {
        return this.getAttribute('name') ?? ''
    }
    set name(name: string) {
        this.setAttribute('name', name)
    }

    private internals

    get form() {
        return this.internals.form;
    }

    @query('.button') private readonly buttonElement!: HTMLElement | null
    @query('.leading-icon') private readonly leadingIconElement!: HTMLElement | null
    @query('.trailing-icon') private readonly trailingIconElement!: HTMLElement | null
    @query('.label') private readonly labelElement!: HTMLElement | null

    @state()
    private hasLabel = false;
    @state()
    private hasLeadingIcon = false;
    @state()
    private hasTrailingIcon = false;

    constructor() {
        super()
        if (typeof window !== 'undefined') {
            this.addEventListener('click', async (event: Event) => {
                if (!this.form || this.buttonType === 'button') {
                    return
                }

                // Wait a full task for event bubbling to complete.
                await new Promise<void>((resolve) => {
                    setTimeout(resolve);
                });

                if (event.defaultPrevented) {
                    return
                }

                if (this.buttonType === 'reset') {
                    this.form.reset();
                    return;
                }

                // form.requestSubmit(submitter) does not work with form associated custom
                // elements. This patches the dispatched submit event to add the correct
                // `submitter`.
                // See https://github.com/WICG/webcomponents/issues/814
                this.form.addEventListener(
                    'submit',
                    (submitEvent: Event) => {
                        Object.defineProperty(submitEvent, 'submitter', {
                            configurable: true,
                            enumerable: true,
                            get: () => this,
                        });
                    },
                    { capture: true, once: true },
                );

                this.internals.setFormValue(this.value);
                this.form.requestSubmit();
            });
            this.addEventListener('click', this.handleClick.bind(this))
            this.addEventListener('blur', this.handleBlur.bind(this))
            this.addEventListener('focus', this.handleFocus.bind(this))
        }
        this.internals = this.attachInternals()
        this.setAttribute('is-hitman-dialog-button', 'true')
    }

    private get classes() {
        return ({
            'button': true,
            'active': this.active
        })
    }

    protected render() {
        const isLink = this.href !== ''

        return isLink ? this.renderLink() : this.renderButton()
    }

    private renderButton() {
        return html`
            <button
                type=${this.buttonType}
                class=${classMap(this.classes)}
            >
                ${this.renderContent()}
            </button>>
        `
    }
    private renderLink() {
        return html`
            <a
                type=${this.buttonType}
                href=${this.href}
                target=${this.target || nothing}
                class=${classMap(this.classes)}
            >
                ${this.renderContent()}
            </a>`
    }
    private renderContent() {
        return html`
            <slot name="leading-icon" @slotchange=${this.handleLeadingIconChange}></slot>
            <span class="label">
                <slot @slotchange=${this.handleLabelChange}></slot>
            </span>
            <slot name="trailing-icon" @slotchange=${this.handleTrailingIconChange}></slot>
        `
    }

    public focus() {
        this.buttonElement?.focus();
    }
    public blur() {
        this.buttonElement?.blur();
    }

    private handleClick(e: Event) {
        const event = new MouseEvent('click', { bubbles: true });
        this.buttonElement?.dispatchEvent(event);
        if (!isActivationClick(event) || !this.buttonElement) {
            return
        }
        this.active = true
        dispatchActivationClick(this.buttonElement)
    }
    private handleBlur(e: Event) {
        if (!this.buttonElement) {
            e.preventDefault()
            return
        }
        this.active = false
    }
    private handleFocus(e: Event) {
        if (!this.buttonElement) {
            e.preventDefault()
            return
        }
        this.active = true
    }

    private handleLabelChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasLabel = slot.assignedElements().length > 0;
    }

    private handleLeadingIconChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasLeadingIcon = slot.assignedElements().length > 0;
    }

    private handleTrailingIconChange(event: Event) {
        const slot = event.target as HTMLSlotElement;
        this.hasTrailingIcon = slot.assignedElements().length > 0;
    }
}
