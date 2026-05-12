import { createRouter, createWebHistory, routerKey } from "vue-router";

//** Public View*/
import Home from '@/views/public/Home.vue'

const routes = [
    //** Public Route */
    {
        path: "/",
        name: "Home",
        component: Home,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;