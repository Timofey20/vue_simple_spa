import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Info from "../components/vue-contact-info.vue";

Vue.use(VueRouter);

// const contact = [
//   { name: "Fill", number: 893421042134, id: 1 },
//   { name: "Dan", number: 893421044454, id: 2 },
//   { name: "Gren", number: 893426674284, id: 3 },
// ],

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    props: true,
  },
  {
    path: "/Info",
    name: "Info",
    component: Info,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
