import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'histody',
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '/bucketlists',
            component: () => import('@/views/Bucketlists.vue'),
        },
        {
            path: '/bucketlists/:id',
            component: () => import('@/views/BucketlistDetail.vue'),
        },
        {
            path: '/mybucketlist',
            components: () => import('@/views/UserBucketlist.vue'),
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
})