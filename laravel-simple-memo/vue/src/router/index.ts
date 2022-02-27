import Home from "@/pages/Home.vue";
import Create from "@/pages/Create.vue";
import Edit from "@/pages/Edit.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
        children: [{ path: "/home", name: "Home", component: Home }],
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
