import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "@/container/index";
import Movie from '@/container/movie';
import ClickBo from '@/container/clickBo'
import Shopping from "@/container/shopping";
import Show from '@/container/show';


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index,
        redirect: '/movie',
        children: [{
                path: "/movie",
                name: "Movie",
                component: Movie
            },
            {
                path: "/clickBo",
                name: "ClickBo",
                component: ClickBo
            },
            {
                path: "/shopping",
                name: "Shopping",
                component: Shopping
            },
            {
                path: "/show",
                name: "Show",
                component: Show
            }
        ]
    }]
})