import Main from "@/pages/Main"
import Success from "@/pages/Success"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/success/:id',
        component: Success,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;