import { LitElement, html, css } from "lit-element";

class FeedItem extends LitElement {
  static get styles() {
    return css`
      .feed-wrapper {
        border: 1px solid #d3d3d3;
        margin: 20px 0;
        padding: 0 10px;
        border-radius: 5px;
      }
      .article-header {
        border-bottom: 1px solid #d3d3d3;
        padding: 10px;
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {
      feedItem: { type: Object },
    };
  }

  constructor() {
    super();

    this.feedItem = {};
  }
  render() {
    return html`<div class="feed-wrapper">
      <h4 class="article-header">${this.feedItem.title}</h4>
      <p>${this.feedItem.body}</p>
    </div>`;
  }
}

customElements.define("feed-item", FeedItem);
