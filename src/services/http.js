import axios from "axios";

import { apiBaseUrl } from "../config";
import { CONTENT_TYPE_JSON } from "../constants/misc";

export const conduitAppHttp = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});
