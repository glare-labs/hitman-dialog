import { html, LitElement } from "lit";

export class DialogHeader extends LitElement {

    protected render() {
        return html`
            <header class="header">
                <slot></slot>
            </header>
        `
    }
}
