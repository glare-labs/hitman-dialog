import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { DialogHeader } from "./internal/dialog-header";

@customElement('hitman-dialog-header')
export class HitmanDialogHeader extends DialogHeader {
    static styles = [
        css`
            :host {
                display: inline-flex;
                color: var(--_label-color);
                font-size: var(--_label-font-size);
                font-weight: var(--_label-font-weight);
                line-height: var(--_label-line-height);
                letter-spacing: var(--_label-letter-spacing);

                --_label-color: var(--hitman-dialog-header-color, white);
                --_label-font-size: var(--hitman-dialog-header-font-size, 24px);
                --_label-font-weight: var(--hitman-dialog-header-font-weight, 700);
                --_label-line-height: var(--hitman-dialog-header-line-height, 24px);
                --_label-letter-spacing: var(--hitman-dialog-header-letter-spacing, 0.25px);
            }
            .header {
                color: inherit;
                font-size: inherit;
                font-weight: inherit;
                line-height: inherit;
                letter-spacing: inherit;
            }
        `
    ]
}
