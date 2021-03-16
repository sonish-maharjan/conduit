import { LitElement, html } from "lit-element";
import { initRouter } from "../router";

class ConduitApp extends LitElement {
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    let x = initRouter(this.shadowRoot.getElementById("main"));
    console.log(x);
  }

  render() {
    return html`<main id="main"></main>`;
  }
}

customElements.define("conduit-app", ConduitApp);
