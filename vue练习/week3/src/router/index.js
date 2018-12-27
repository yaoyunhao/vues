import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/container/index';
import Home from '@/container/home';
import Shopping from '@/container/shopping';
import My from '@/container/my';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        redirect: 'home',
        children: [{
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'shopping',
                name: 'Shopping',
                component: Shopping
            },
            {
                path: 'my',
                name: 'My',
                component: My
            }
        ]
    }]
})