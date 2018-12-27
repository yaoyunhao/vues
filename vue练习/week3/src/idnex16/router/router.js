import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/idnex16/index';
import List from '@/idnex16/list';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})