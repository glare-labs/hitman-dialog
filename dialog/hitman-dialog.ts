import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AlertDialog } from './internal/dialog';

@customElement('hitman-alert-dialog')
export class HitmanAlertDialog extends AlertDialog {
    static override styles = [css`
        @layer hitman-dialog-base {
            :host {
                display: contents;
                margin: auto;
                max-height: min(560px, calc(100% - 48px));
                max-width: min(560px, calc(100% - 48px));
                min-height: 140px;
                min-width: 280px;
                position: fixed;
                height: fit-content;
                width: fit-content;
            }

            // Can't use ::backdrop since Firefox does not allow animations on it.
            ::backdrop {
                background: none;
            }

            /* We don't need to center dialog */
            dialog {
                background: transparent;
                border: none;
                border-radius: inherit;
                flex-direction: column;
                height: inherit;
                /* margin: inherit; */
                max-height: inherit;
                max-width: inherit;
                min-height: inherit;
                min-width: inherit;
                outline: none;
                overflow: visible;
                padding: 0;
                width: inherit;
                display: none;
            }

            .container,
            .headline-container,
            .scroll-container,
            .action-container {
                padding: 0;
                margin: 0;
            }
        }

        @layer hitman-dialog-variable {
            :host {
                --_container-color: var(--hitman-dialog-container-color, #454545);
                --_content-color: var(--hitman-dialog-content-color, #c2c2c2);
                --_scrim-color: var(--hitman-dialog-scrim-color, #000000);
                --_scrim-opacity: var(--hitman-dialog-scrim-opacity, 0.32);

            }
        }

        @layer hitman-dialog-scrim {
            :host([open="true"]) .scrim {
                display: block;
            }

            .scrim {
                background: var(--_scrim-color);
                opacity: var(--_scrim-opacity);
                display: none;
                inset: 0;
                pointer-events: none;
                position: fixed;
                z-index: 1;
            }
        }

        @layer hitman-dialog-container {

            :host([open="true"]) dialog,
            dialog[open] {
                display: flex;
            }
            .container {
                border-radius: inherit;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow: hidden;
                position: relative;
                transform-origin: top;
                position: relative;
                transform-origin: top;
                padding: 8px;
            }
        }

        @layer hitman-dialog-header {
            .headline-container {
                background-color: var(--_container-color);
            }
            .headline {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0;
                padding: 0;
            }
            slot[name='headline']::slotted(*) {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                align-self: stretch;
                gap: 8px;
                padding: 24px 24px 0;
            }
        }

        @layer hitman-dialog-scroll {
            .scroll-container {
                background-color: var(--_container-color);
                display: flex;
                flex: 1;
                flex-direction: column;
                overflow: hidden;
                z-index: 1;
            }
            .content {
                overflow: auto;

            }
            /* width */
            ::-webkit-scrollbar {
                width: 4px;
                height: 6px;
            }

            /* Track */
            ::-webkit-scrollbar-track {}

            ::-webkit-scrollbar-track:hover {
                background: transparent;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: red;
            }

            ::-webkit-scrollbar-thumb:hover,
            ::-webkit-scrollbar-thumb:active {
                background: red;
            }
            slot[name='content']::slotted(*) {
                box-sizing: border-box;
                padding: 24px 24px;
                color: var(--_content-color);
            }
        }

        @layer hitman-dialog-action {
            slot[name='actions']::slotted(*) {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-top: 8px;
                z-index: 0;
            }
        }



    `]

}
