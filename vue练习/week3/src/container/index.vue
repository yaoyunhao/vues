<template>
    <div class="wrap">
        <header><span>每日优鲜</span></header>
          <router-view/>
      <footer>
            <router-link to="/home" tag="span">主页</router-link>
            <router-link to="/shopping" tag="span">
            <el-badge :value="count" class="item">购物车</el-badge>
            </router-link>
            <router-link to="/my" tag="span">我的</router-link>
      </footer>
    </div>
</template>

<script>
import Bus from './bus.js';
export default {
    name:'index',
    data(){
        return {
            count:''
        }
    },
    created(){
       Bus.$on('chengeCount',(type)=>{
         type === "add" ? this.count++ : this.count--
       })
       
    }
}
</script>

<style>

</style>
