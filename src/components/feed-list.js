import { LitElement, html } from "lit-element";

import { getAllPost } from "../services/postService";

import "./feed-item";

class FeedList extends LitElement {
  static get properties() {
    return {
      articles: { type: Array },
    };
  }

  constructor() {
    super();
    this.articles = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.getAllPost().then((articles) => {
      this.articles = articles;
    });
  }

  async getAllPost() {
    const res = await getAllPost();
    return res.data.articles;
  }

  render() {
    return html`<div>
      <h3>Articles List</h3>
      ${this.articles.map(
        (article) => html`<feed-item .feedItem=${article}></feed-item> `
      )}
    </div>`;
  }
}

customElements.define("feed-list", FeedList);
