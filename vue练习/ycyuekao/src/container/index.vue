<template>
    <div class="wrap">
        <header>
            <span></span>
            <p>
                <router-link to="recommend" tag="span">推荐</router-link>
                <router-link to="city" tag="span">北京</router-link>
            
            </p>
            <span></span>
        </header>
        <section>
            <router-view></router-view>
        </section>
        <footer>
            <router-link to="home" tag="span">首页</router-link>
            <router-link to="attention" tag="span">关注</router-link>
            <router-link to="msg" tag="span">消息</router-link>
            <router-link to="my" tag="span">我</router-link>
        </footer>
    </div>
</template>

<script>
import '../scss/flexible.js';
import '../scss/index.css';
export default {
    name:'index'
}
</script>

<style>

</style>
