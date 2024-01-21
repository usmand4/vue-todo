import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/pages/Login.vue';
import SignUpPage from './components/pages/SignUp.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/signup',
        component: SignUpPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;