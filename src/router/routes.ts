import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("pages/home/index.vue"),
      },
      {
        path: "/auth",
        name: "auth",
        component: () => import("pages/auth/index.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("pages/profile/index.vue"),
      },
      {
        path: "/payments",
        name: "payments",
        component: () => import("pages/payments/index.vue"),
      },
      {
        path: "/products",
        name: "products",
        component: () => import("pages/products/index.vue"),
      },
      {
        path: "/products/:id",
        name: "products-details",
        component: () => import("pages/products/details/index.vue"),
      },
      {
        path: "/products/history",
        name: "history",
        component: () => import("pages/products/history/index.vue"),
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404/index.vue'),
  },
]

export default routes
