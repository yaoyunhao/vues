import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/index15/view/index';
import Movie from '@/index15/view/movie';
import Cinema from '@/index15/view/cinema';
import My from '@/index15/view/my';
import Hot from '@/index15/view/hot';
import Coming from '@/index15/view/coming';
import Detail from '@/index15/view/detail';



Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            redirect: '/movie',
            children: [
                {
                    path: 'movie',
                    name: 'Movie',
                    component: Movie,
                    redirect: '/movie/hot',
                    children: [
                        {
                            path: 'hot',
                            name: 'Hot',
                            component: Hot
                        },
                        {
                            path: 'coming',
                            name: 'Coming',
                            component: Coming
                        }
                    ]
                },
                {
                    path: 'cinema',
                    name: 'Cinema',
                    component: Cinema
                },
                {
                    path: 'my',
                    name: 'My',
                    component: My
                }
            ]
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})