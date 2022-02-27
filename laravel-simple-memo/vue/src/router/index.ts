import Home from "c/pages/Home.vue";
import Create from "c/pages/Create.vue";
import Edit from "c/pages/Edit.vue";
("../../");

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    },
    {
        path: "/edit/:id",
        name: "Edit",
        component: Edit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
