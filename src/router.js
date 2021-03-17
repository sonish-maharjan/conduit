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
    path: "/posts",
    component: "post-list-page",
    action: () => import("./pages/post-list-page"),
  },
  {
    path: "/post-detail/:post_slug",
    component: "post-detail-page",
    action: () => import("./pages/post-detail-page"),
  },
];
