import Vue from 'vue';
import Router from 'vue-router';
import Index from '../container/index.vue';
import Home from '../container/home.vue';
import ShopCar from '../container/shopCar.vue';
import My from '../container/my.vue';

Vue.use(Router);



export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            redirect: '/index/home',
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'shopcar',
                    name: 'ShopCar',
                    component: ShopCar
                },
                {
                    path: 'my',
                    name: 'My',
                    component: My
                }
            ]
        }
    ]
})