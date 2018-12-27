import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/index15_1/view/index';
import Detail from '@/index15_1/view/detail';
import Hot from '@/index15_1/view/hot';
import Cold from '@/index15_1/view/cold';



Vue.use(Router);


const Routers = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: 'hot',
                    name: 'Hot',
                    component: Hot
                },
                {
                    path: 'cold',
                    name: 'Cold',
                    // components: {
                    //     default: Cold,
                    //     concatD: Detail
                    // }
                    component: Cold
                }
            ]
        },
        {
            path: '/detail/:username/:id',
            name: 'Detail',
            component: Detail,
            props: route => ({...route})
        }
    ]
})


Routers.beforeEach((to, from , next) => {
    console.log(to, from);
    next()
})

export default Routers
// props属性值如果是布尔值得话    表示是否把params里面的属性设置为组件内部属性
// 如果是对象的话，直接把对象内部的属性传递给组件内部作为属性
// 如果为函数的话， 会接收route这个对象，那么就可以处理完毕之后return出去传给组件
