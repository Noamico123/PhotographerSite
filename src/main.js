import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueCarousel from "vue-carousel";
import ElementUI from "element-ui";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  // VueCarousel,
  render: (h) => h(App),
}).$mount("#app");
