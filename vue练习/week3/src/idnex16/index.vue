<template>
    <div>
        index页面
        <div v-changeColor="{color: 'red', fontSize: '30px'}">
            我想要改变下颜色
        </div>
        <button @click="sendData" ref="send">发送数据</button>
        <router-link to='/list'>去list页面</router-link>
        <List ref="lists"/>
         <swiper :options="swiperOption">
            <swiper-slide :style="{width: '100%', height: '100px'}"><img :style="{width: '100%', height: '100%'}" src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
            <swiper-slide><img src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
            <swiper-slide><img src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
            <swiper-slide><img src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
            <swiper-slide><img src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
            <swiper-slide><img src="http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg"></swiper-slide>
        </swiper>
    </div>
</template>

<script>
import Bus from './bus.js';
import List from './list';
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import Swiper from 'swiper';
export default {
    name: 'index',
    data() {
        return {
            color: 'red',
            swiperOption: {
                autoplay: {
                    delay: 3000
                },
                speed: 1000,
            }
        }
    },
    computed: {
        // swiper() {
        //     return this.$refs.mySwiper.swiper
        // }
    },
    components: {
        List,
        swiper,
        swiperSlide
    },
    methods: {
        sendData: function() {
            
        }
    },
    mounted() {
        console.log('index', 'mounted', this)
        // this.swiper.slideTo(3, 1000, false)
        // var mySwiper = new Swiper('.swiper-container', {
        //         autoplay: 2000
        //     })
    },
    directives: {
        'changeColor': {
            inserted: (el, binding) => {
                Object.keys(binding.value).forEach((v, i) => {
                    el.style[v] = binding.value[v]
                })
            }
        }
    }
}
</script>

<style>
@import 'swiper/dist/css/swiper.css'
</style>
