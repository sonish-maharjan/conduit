import { LitElement, html, css } from "lit-element";

class FeedDetail extends LitElement {
  static get styles() {
    return css`
      .feed-detail {
        border: 1px solid #d3d3d3;
        margin: 20px 0;
        padding: 10px;
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
      article: { type: Object },
    };
  }

  constructor() {
    super();
    this.article = {};
  }

  getCreatedAtDate() {
    let date = this.article.createdAt.split("T")[0];
    return date;
  }

  render() {
    return html`
      ${this.article.title
        ? html`<div class="feed-detail">
            <h4 class="article-header">${this.article.title}</h4>
            <p>${this.article.body}</p>
            <p>
              Created by: <b>${this.article.author.username} </b>
              @${this.getCreatedAtDate()}
            </p>
          </div>`
        : html`<p>Loading...</p>`}
    `;
  }
}

customElements.define("feed-detail", FeedDetail);
