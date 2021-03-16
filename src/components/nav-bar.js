import { LitElement, html, css } from "lit-element";

class NavBar extends LitElement {
  static get styles() {
    return css`
      div {
        border: 2px solid red;
      }
    `;
  }

  render() {
    return html`
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/new-post">
                <i class="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Sign up</a>
            </li> -->
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
