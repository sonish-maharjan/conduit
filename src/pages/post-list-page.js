import { LitElement, html } from "lit-element";

import "../components/feed-list";

class PostListPage extends LitElement {
  render() {
    return html`<feed-list></feed-list>`;
  }
}

customElements.define("post-list-page", PostListPage);
