import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/home", component: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
