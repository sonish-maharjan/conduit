import { LitElement, html } from "lit-element";

import { getPost } from "../services/postService";

import "../components/feed-detail";

class PostDetailPage extends LitElement {
  static get styles() {}

  static get properties() {
    return {
      article: { type: Object },
    };
  }

  constructor() {
    super();
    this.article = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.getPost().then((data) => {
      this.article = data;
    });
  }

  async getPost(slug) {
    const postSlug = this.location.params.post_slug;
    const res = await getPost(postSlug);
    return res.data.article;
  }

  render() {
    return html`
      <h2>Article Detail</h2>
      <feed-detail .article=${this.article}></feed-detail>
    `;
  }
}

customElements.define("post-detail-page", PostDetailPage);
