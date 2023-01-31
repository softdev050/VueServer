import Vue from "vue";
import Router from "vue-router";
import HomeV2 from "./components/HomeV2";
import { homeV2Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: HomeV2,
      props: { ...homeV2Data },
    },
  ],
});
