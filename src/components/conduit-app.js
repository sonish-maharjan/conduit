import { LitElement, html, css } from "lit-element";
import { initRouter } from "../router";

import "./nav-bar";

class ConduitApp extends LitElement {
  static getStyles() {
    return css`
      #container {
        padding: 0px 60px;
      }
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    initRouter(this.shadowRoot.getElementById("container"));
  }

  render() {
    return html`<main id="main">
      <nav-bar></nav-bar>
      <div id="container"></div>
    </main>`;
  }
}

customElements.define("conduit-app", ConduitApp);
