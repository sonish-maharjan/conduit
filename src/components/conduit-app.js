import { LitElement, html, css } from "lit-element";
import { initRouter } from "../router";

import "./nav-bar";

class ConduitApp extends LitElement {
  static getStyles() {
    return css`
      #main {
        padding: 0px 60px;
      }
    `;
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    initRouter(this.shadowRoot.getElementById("main"));
  }

  render() {
    return html` <nav-bar></nav-bar>
      <main id="main"></main>`;
  }
}

customElements.define("conduit-app", ConduitApp);
