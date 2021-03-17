import { LitElement, html } from "lit-element";
import { initRouter } from "../router";

import "./nav-bar";
import "../services/http";

class FeedList extends LitElement {
  static get properties() {
    return {
      articles: { type: Array },
    };
  }

  constructor() {
    this.articles = [];
  }

  connectedCallback() {}

  render() {
    return html``;
  }
}

customElements.define("feed-list", FeedList);
