import { LitElement, html } from "lit-element";

class HomePage extends LitElement {
  render() {
    return html`
      <div>
        <h3>Welcome to global feed.</h3>
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
