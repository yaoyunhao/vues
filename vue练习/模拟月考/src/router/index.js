import Vue from 'vue'
import Router from 'vue-router'
import List from "@/container/list"
import Detail from "@/container/detail"
import Books from '@/container/books.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'list',
            component: List
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        }
    ]
})