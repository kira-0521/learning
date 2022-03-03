import Home from "@/pages/Home.vue";
import Create from "@/pages/Create.vue";
import Edit from "@/pages/Edit.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
import { key } from "../store/index";
const store = useStore(key);

const routes = [
    {
        path: "/",
        component: Home,
        children: [{ path: "/home", name: "Home", component: Home }],
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
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

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.isAuthenticated)) {
        if (!store.state.isAuth) {
            next({ name: "Login" });
        } else {
            next();
        }
    }
    next();
});

export default router;
