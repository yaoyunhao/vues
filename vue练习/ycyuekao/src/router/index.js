/*
 * @Author: yaochong
 * @Date: 2018-10-26 10:23:43 
 * @Last Modified by:   yaochong 
 * @Last Modified time: 2018-10-26 10:23:43 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/container/index'
import Recommend from '@/container/recommend';
import City from '@/container/city';
import Home from "@/container/home";
import Attention from "@/container/attention";
import Msg from "@/container/msg";
import My from "@/container/my";
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        redirect: '/recommend',
        children: [{
                path: '/recommend',
                name: 'Recommend',
                component: Recommend,
                redirect: 'home',
                children: [{
                    path: '/home',
                    name: 'Home',
                    component: Home
                }, {
                    path: '/attention',
                    name: 'Attention',
                    component: Attention
                }, {
                    path: '/msg',
                    name: 'Msg',
                    component: Msg
                }, {
                    path: '/my',
                    name: 'My',
                    component: My
                }]
            },
            {
                path: '/city',
                name: 'City',
                component: City
            }
        ]
    }]
})