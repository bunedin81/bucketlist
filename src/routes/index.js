import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            component: () => import('@/views/MainPage.vue'),
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/mybucketlist',
            component: () => import('@/views/UserBucketlist.vue'),
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'),
        }
    ],
})