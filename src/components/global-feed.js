import { LitElement, html } from "lit-element";
import { initRouter } from "../router";

import "./feed-list";

class GlobalFeed extends LitElement {
  render() {
    return html` <h1>Wlcome to global feed</h1> `;
  }
}

customElements.define("global-feed", GlobalFeed);
