import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue';
const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: () => import('./views/LoginPage'),
    },
    {
        path: '/registration',
        component: () => import('./views/RegistrationPage'),
    },
    {
        path: '/course/create',
        component: () => import('./views/AddCoursesPage'),
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes: routes
});

export default router;