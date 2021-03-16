import { Router } from "@vaadin/router";

export const initRouter = (node) => {
  const router = new Router(node);
  router.setRoutes(routes());
};

const routes = () => [
  {
    path: "/",
    component: "home-page",
    action: () => import("./pages/home-page"),
  },
  {
    path: "/new-post",
    component: "new-post-page",
    action: () => import("./pages/new-post-page"),
  },
];
