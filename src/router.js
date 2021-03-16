import { Router } from "@vaadin/router";

import "./pages/home-page";
import "./pages/new-post-page";

export const initRouter = (node) => {
  const router = new Router(node);
  router.setRoutes(routes());
};

const routes = () => [
  {
    path: "/",
    component: "new-post-page",
    // action: () => import("./pages/new-post-page"),
  },
  {
    path: "/home",
    component: "home-page",
    // action: () => import("./pages/home-page"),
  },
];
