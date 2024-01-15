const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Главная",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Вход",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/profile",
    name: "Профиль",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ProfilePage.vue") }],
  },
  {
    path: "/tickets",
    name: "Тикеты",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TicketsPage.vue") },
      {
        path: ":ticketId",
        name: "Тикет",
        component: () => import("pages/TicketDetailPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
