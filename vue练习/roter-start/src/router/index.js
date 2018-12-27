import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/container/index';
import Hot from '@/container/hot';
import Coming from '@/container/Coming'
import Move from "@/container/move"
import Cinema from "@/container/cinema"
import My from '@/container/my'
import Detail from '@/container/detail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            redirect: '/move',
            children: [{
                    path: "move",
                    name: 'Move',
                    component: Move,
                    redirect: '/move/hot',
                    children: [{
                            path: "hot",
                            name: "Hot",
                            component: Hot
                        },
                        {
                            path: "coming",
                            name: "Coming",
                            component: Coming
                        }
                    ]
                },
                {
                    path: "cinema",
                    name: 'Cinema',
                    component: Cinema
                },
                {
                    path: "my",
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