import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/pasteles",
    name: "Pasteles",
    component: () => import("../views/PastelesView.vue"),
  },
  {
    path: "/personalizar-pastel",
    name: "PersonalizarPastel",
    component: () => import("../views/CustomPastel.vue"),
  },
  {
    path: "/acerca-de",
    name: "AcercaDe",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    component: () => import("../views/ContacsUs.vue"),
  },
  {
    path: "/inventario",
    name: "Inventario",
    component: () => import("../views/InventarioView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
