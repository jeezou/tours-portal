import { createRouter, createWebHashHistory } from "vue-router";
import Error from "@/views/Error";
import Main from "@/views/Main";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/error",
    name: "error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
