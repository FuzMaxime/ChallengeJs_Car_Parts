import { createRouter, createWebHistory } from "vue-router";
import Menu from '@/views/Menu-page.vue';
import Game from '@/views/Game-page.vue';
import Quete from '@/views/Quetes-page.vue';
import Garage from '@/views/Garage-page.vue';
import Magasin from '@/views/Magasin-page.vue';

const routes = [
    {
        name: 'Menu',
        path: '/',
        component: Menu,
    }, {
        name: 'Game',
        path: '/game',
        component: Game,
    }, {
        name: 'Quete',
        path: '/quete',
        component: Quete,
    }, {
        name: 'Garage',
        path: '/garage',
        component: Garage,
    }, {
        name: 'Magasin',
        path: '/magasin',
        component: Magasin,
    }, {
        name: 'Error',
        path: '/:pathMatch(.*)*',
        component: Error,
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;