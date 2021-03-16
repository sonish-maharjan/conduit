import { LitElement, html } from "lit-element";

class NewPostPage extends LitElement {
  render() {
    return html` <p>this is new post</p> `;
  }
}

customElements.define("new-post-page", NewPostPage);
