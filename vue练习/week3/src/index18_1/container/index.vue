<template>
    <div class="bigBox">
        <router-view></router-view>
        <div class='bottomLink'>
            <router-link to='/index/home' tag="span">首页</router-link>
            <router-link to='/index/shopcar' tag="span">
                <el-badge :value="count" class="item">购物车</el-badge>
            </router-link>
            <router-link to='/index/my' tag="span">我的</router-link>
        </div>
    </div>
</template>

<script>
import Bus from '../utis/eventBus.js'
export default {
    name: 'index',
    data() {
        return {
            count: 0
        }
    },
    created() {
        Bus.$on('changeCount', (type) => {
            type === 'add' ? this.count++ : this.count--
        })
    }
}
</script>

<style>
    .bottomLink{
        position: fixed;
        width: 100%;
        height: 40px;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        background: #fff
    }
    .bigBox{
        width: 100%;
        height: 100%;
    }
</style>
