import { LitElement, html, css } from "lit-element";

class NavBar extends LitElement {
  static get styles() {
    return css`
      .navbar {
        background: #0275d8;
      }
      .nav-list {
        display: flex;
        margin: 0;
      }

      .nav-item {
        list-style: none;
        margin: 10px;
      }

      .nav-item a {
        color: #fff;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="/">Home</a>
          </li>

          <li class="nav-item">
            <a href="/new-post"> New post </a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
