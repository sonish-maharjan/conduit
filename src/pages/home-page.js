import { LitElement, html } from "lit-element";

class HomePage extends LitElement {
  render() {
    return html` <div>hello world from home page</div> `;
  }
}

customElements.define("home-page", HomePage);
