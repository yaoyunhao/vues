<template>
    <div class="top">
        <div v-for="(val, index) in shopData" :key="index">
            <h3>{{val.name}}</h3>
            <p>{{val.price}}</p>
            <div v-if="val.count === 0" @click="addCount(val.id, 'add')">购物车</div>
            <div v-else>
                <el-button type="danger" @click="addCount(val.id, 'del')">-</el-button>
                <span>{{val.count}}</span>
                <el-button type="primary" @click="addCount(val.id, 'add')">+</el-button>
            </div>
        </div>
    </div>
</template>

<script>

import Bus from '../utis/eventBus.js'
import axios from 'axios';


export default {
    name: 'home',
    data() {
        return {
            shopData: []
        }
    },
    mounted() {
        axios.get('http://localhost:8080/static/shopList.json').then(res => {
            this.shopData = res.data
        })
    },
    methods: {
        addCount: function(id, type) {
            this.shopData = this.shopData.map((v, i) => {
                if (v.id === id) {
                    type === 'add' ? v.count++ : v.count--
                }
                return v
            })
            Bus.$emit('changeCount', type);
        }
    },
    beforeDestroy() {
        let shopCarData = this.shopData.filter((v, i) => {
            return v.count > 0
        })
        Bus.$emit('shopCarData', shopCarData)
    },
    destroyed() {

    },
    beforeRouteEnter(to, from, next) {
        let isLogin = window.localStorage.getItem('isLogin');
        if (isLogin === '1') {
            next()
        } else {
            next({
                path: '/index/my'
            })
        }
    }
}
</script>

<style>
.top{
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: auto
}
</style>
