import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: loginGuard,
    component: HomeView,
  },
  {
    path: "/welcome",
    name: "welcome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: authGuard,
    component: () =>
      import(/* webpackChunkName: "welcome" */ "../views/WelcomeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function authGuard(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}

function loginGuard(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (!isAuthenticated) {
    next();
  } else {
    next("/welcome");
  }
}

export default router;
