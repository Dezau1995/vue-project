import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Test from './components/test.vue'
import FirstTest from './components/firsttest.vue'

const routes = [
    {path: '/', component: App},
    {path: '/todos', component: Test},
    {path: '/counter', component: FirstTest},
];

const router = createRouter({history: createWebHistory(), routes})

export default router