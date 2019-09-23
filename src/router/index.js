import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

import Home from "@/screens/Home";
import NotFound from "@/screens/NotFound";

Vue.use(VueRouter);
Vue.use(VueMeta);

var vueRouter = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      id: 0,
      title: "Home",
      component: Home
    },
    {
      path: "*",
      name: "notfound",
      id: -1,
      title: "Not Found",
      component: NotFound
    }
  ]
});

export default vueRouter;
