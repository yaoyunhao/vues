<template>
    <div>
        <!-- <div v-for="val in 20">
            <img v-lazy="src"/>
        </div> -->

        <List @data="getData" />
        <IsShow v-if="isShow"  :isShow.sync="isShow" />
        <button @click="isShow = !isShow">
            关闭那个盒子
        </button>
    </div>
</template>

<script>

import List from './list';
import IsShow from './isShow';

export default {
    name: 'index',
    components: {
        List,
        IsShow
    },
    data() {
        return {
            src: "http://img2.imgtn.bdimg.com/it/u=2973036805,1162598371&fm=26&gp=0.jpg",
            isShow: true
        }
    },
    methods: {
        getData: function(value) {
            console.log('value', value)
        }
    }
}
</script>

<style>

</style>
