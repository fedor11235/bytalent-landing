import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorView from "../views/ErrorView.vue";
import StreamingView from "../views/StreamingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  {
    path: "/streaming",
    name: "streaming",
    component: StreamingView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
