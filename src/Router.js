import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Todos from './components/Todos.vue'
import FirstTest from './components/firsttest.vue'
import Exercices from './pages/Exercices.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/todos', component: Todos},
    {path: '/counter', component: FirstTest},
    {path: '/exercices', component: Exercices}
];

const router = createRouter({history: createWebHistory(), routes})

export default router