import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import axiosClient from "../axios";

interface User {
    name: string;
}
export interface State {
    isAuth: boolean;
    user: User | null;
}

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
    state: {
        isAuth: false,
        user: null,
    },
    getters: {
        isAuth: (state) => state.isAuth,
        user: (state) => state.user,
    },
    mutations: {
        SET_IS_AUTH(state, isAuth: boolean) {
            state.isAuth = isAuth;
        },
        SET_USER(state, user: User) {
            state.user = user;
        },
    },
    actions: {
        async login(
            { dispatch },
            credentials: { email: string; password: string }
        ) {
            console.log(credentials);
            await axiosClient.get("/sanctum/csrf-cookie");
            await axiosClient.post("/api/auth/login", credentials);
            return await dispatch("me");
        },
        async me({ commit }) {
            return await axiosClient
                .get("/api/user")
                .then((response) => {
                    commit("SET_IS_AUTH", true);
                    commit("SET_USER", response.data);
                })
                .catch(() => {
                    commit("SET_IS_AUTH", false);
                    commit("SET_USER", null);
                });
        },
    },
});
