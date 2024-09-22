import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { DialogButton } from "./internal/dialog-button";

@customElement('hitman-dialog-button')
export class HitmanDialogButton extends DialogButton {
    static styles = [
        css`
            @layer hitman-dialog-button-base {
                :host {
                    display: block;
                    min-height: fit-content;
                    box-sizing: border-box;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    position: relative;
                    text-overflow: ellipsis;
                    text-wrap: nowrap;
                    user-select: none;
                    vertical-align: top;
                }

                .button {
                    all: unset;
                    -webkit-appearance: none;
                    margin: inherit;
                    align-items: center;
                    border-radius: inherit;
                    cursor: inherit;
                    border: none;
                    outline: none;
                    vertical-align: middle;
                    background: transparent;
                    text-decoration: none;
                    height: inherit;
                    z-index: 0;
                }
                ::slotted([slot='leading-icon']),
                ::slotted([slot='trailing-icon']) {
                    display: inline-flex;
                    position: relative;
                    writing-mode: horizontal-tb;
                    fill: currentColor;
                    flex-shrink: 0;
                }
            }

            @layer hitman-dialog-button-layout {
                .button {
                    display: grid;
                    grid-template-columns: calc(var(--_icon-padding-start) + var(--_icon-padding-end) + var(--_icon-size)) 1fr calc(var(--_icon-padding-start) + var(--_icon-padding-end) + var(--_icon-size));
                    grid-template-rows: 1fr;
                }

                .button ::slotted([slot='leading-icon']) {
                    grid-column: 1/2;
                }
                .button .label {
                    grid-column: 2/3;
                }
                .button ::slotted([slot='trailing-icon']) {
                    grid-column: 3/4;
                }
            }

            @layer hitman-dialog-button {
                :host {
                    --_hitman-dialog-button-width: var(--hitman-dialog-button-width, 100%);
                    --_hitman-dialog-button-height: var(--hitman-dialog-button-height, 48px);

                    --_container-color: var(--_variant-container-default-color);
                    --_variant-container-default-color: var(--hitman-dialog-button-container-default-color, white);
                    --_variant-container-hover-color: var(--hitman-dialog-button-container-hover-color, lightgray);
                    --_variant-container-focus-color: var(--hitman-dialog-button-container-focus-color, red);


                    --_label-color: var(--_variant-label-default-color);
                    --_variant-label-default-color: var(--hitman-dialog-button-label-default-color, black);
                    --_variant-label-hover-color: var(--hitman-dialog-button-label-hover-color, black);
                    --_variant-label-focus-color: var(--hitman-dialog-button-label-focus-color, white);
                    --_label-font-size: var(--hitman-dialog-button-label-font-size, 16px);

                    --_icon-color: var(--_variant-icon-default-color);
                    --_variant-icon-default-color: var(--hitman-dialog-button-icon-default-color, black);
                    --_variant-icon-hover-color: var(--hitman-dialog-button-icon-hover-color, black);
                    --_variant-icon-focus-color: var(--hitman-dialog-button-icon-focus-color, white);
                    --_icon-size: var(--hitman-dialog-button-icon-size, 24px);
                    --_icon-padding-start: var(--hitman-dialog-button-icon-padding-start, 16px);
                    --_icon-padding-end: var(--hitman-dialog-button-icon-padding-end, 16px);

                    height: var(--_hitman-dialog-button-height);
                    width: var(--_hitman-dialog-button-width);
                }

                .button {
                    width: 100%;
                    height: inherit;
                    z-index: 0;

                    background-color: var(--_container-color);

                    transition-property: background-color, color, scale;
                    transition-duration: 200ms;
                }

                ::slotted([slot='leading-icon']),
                ::slotted([slot='trailing-icon']) {
                    color: var(--_icon-color);
                    font-size: var(--_icon-size) !important;
                    block-size: var(--_icon-size);
                    padding-inline-start: var(--_icon-padding-start);
                    padding-inline-end: var(--_icon-padding-end);
                }
                .label {
                    color: var(--_label-color);
                    font-size: var(--_label-font-size) ;
                }


                .button:hover {
                    --_icon-color: var(--_variant-icon-hover-color);
                    --_label-color: var(--_variant-label-hover-color);
                    --_container-color: var(--_variant-container-hover-color);
                }

                .button:focus,
                .button:active,
                .button:hover:active,
                .button.active {
                    --_icon-color: var(--_variant-icon-focus-color);
                    --_label-color: var(--_variant-label-focus-color);
                    --_container-color: var(--_variant-container-focus-color);
                    scale: 1.05;
                }





            }
        `
    ]
}
