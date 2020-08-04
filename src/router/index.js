import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import ProductDetails from "../views/ProductDetails.vue";
import NotAvailable from "../views/NotAvailable.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  // },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cartPage",
    name: "CartPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartPage.vue"),
  },

  // {
  //   path: "/Store",
  //   name: "Store",
  //   component: () => import("../views/Store.vue"),
  // },
  { path: "*", component: NotAvailable },
  { path: "/product/:id", component: ProductDetails, props: true },
  { path: "/store", component: Store },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
