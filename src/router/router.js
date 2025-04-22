import { createRouter, createWebHistory } from 'vue-router';

// Страницы
import FlodersPage from "../pages/Main/FoldersPage.vue";
import ModulesPage from "../pages/Main/ModulesPage.vue";
import ModulesAddPage from "../pages/Main/ModulesAddPage.vue";
import ModulesCardsPage from "../pages/Main/ModulesCardsPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import AdminPage from "../pages/admin/AdminPage.vue";

// Макеты
import MainLayout from "../layouts/MainLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";


const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/main',
        component: MainLayout,
        children: [
            { path: '/main/floders', name: 'FlodersPage', component: FlodersPage },
            { path: '/main/modules', name: 'ModulesPage', component: ModulesPage },
            { path: '/main/modules/add', name: 'ModulesAddPage', component: ModulesAddPage },
            { path: '/main/modules/cards', name: 'ModulesCardsPage', component: ModulesCardsPage },
        ],
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            { path: '', name: 'AdminPage', component: AdminPage },
            // { path: '/admin/categories', name: 'CategoryPage', component: CategoryPage },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
