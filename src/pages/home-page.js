import { LitElement, html } from "lit-element";
import "../components/global-feed";

class HomePage extends LitElement {
  render() {
    return html`
      <div>
        <global-feed> </global-feed>
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
