import { createRouter, createWebHistory } from "vue-router";

import HomeVue from "../components/Home.vue";
import { Component } from "vue";

interface Routes {
    path: string, name: string, exact: boolean, component: Component
}

const routes : Routes[] = [
    {path: '/' ,name:"home", exact:true, component: HomeVue }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)

export default router;