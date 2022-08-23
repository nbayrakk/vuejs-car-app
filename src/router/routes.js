import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];
