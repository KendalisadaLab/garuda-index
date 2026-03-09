import { createRouter, createWebHistory, routerKey } from "vue-router";

//** Public View*/
import HomeView from '@/views/Home.vue'
import InfoView from '@/views/Info.vue'
import LoginView from '@/views/Login.vue'

//** Private View */
import DashboardView from '@/views/Dashboard.vue'
import AdminView from '@/views/Admin.vue'
import ProfileView from '@/views/Profile.vue'


const routes = [
    //** Public Route */
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/info",
        name: "InfoeView",
        component: InfoView,
    },
    {
        path: "/kendalisada/login",
        name: "LoginView",
        component: LoginView,
    },

    //** Private Rroute */
    {
        path: "/kendalisada/dashboard",
        name: "DashboardView",
        component: DashboardView,
    },
    {
        path: "/kendalisada/admin",
        name: "AdminView",
        component: AdminView,
    },
    {
        path: "/kendalisada/profile",
        name: "ProfileView",
        component: ProfileView,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;