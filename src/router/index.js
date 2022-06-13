import { createWebHistory, createRouter } from "vue-router";
import Operation from "@/views/Operation.vue"
import Setting from "@/views/Setting.vue"

const routes = [
    {
        path: "/",
        name: "Operation",
        component: Operation
    },
    {
        path: "/setting",
        name: "Setting",
        component: Setting
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router