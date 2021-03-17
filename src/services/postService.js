import { conduitAppHttp } from "./http";

import endpoints from "../constants/endpoints";

export async function getAllPost() {
  const endpoint = `${endpoints.ARTICLES}`;
  const response = await conduitAppHttp.get(endpoint);
  return response;
}

export async function getPost(slug) {
  const endpoint = `${endpoints.ARTICLES}/${slug}`;
  const response = await conduitAppHttp.get(endpoint);
  return response;
}
