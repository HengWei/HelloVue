import { createWebHistory, createRouter } from "vue-router";
import HomeVue from '../components/HelloWorld.vue';
import TestVue from '../components/Test.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeVue,
    },
    {
        path: "/test",
        name: "Test",
        component: TestVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;