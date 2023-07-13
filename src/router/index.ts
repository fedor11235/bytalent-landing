import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorView from "../views/ErrorView.vue";
import StreamingView from "../views/StreamingView.vue";
import ConnectView from "../views/ConnectView.vue";
import ArchvizView from "../views/ArchvizView.vue";
import AppView from "../views/AppView.vue";

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
  },
  {
    path: "/connect",
    name: "connect",
    component: ConnectView,
  },
  {
    path: "/archviz",
    name: "archviz",
    component: ArchvizView,
  },
  {
    path: "/app",
    name: "app",
    component: AppView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
