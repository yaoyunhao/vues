<template>
        <div class="wrap">
             <header>
                <h1>猫眼电影</h1>
        </header>
        <router-view></router-view>
        <footer>
            <router-link to="/move">电影</router-link>
            <router-link to="/cinema">影院</router-link>
            <router-link to="/my">我的</router-link>
        </footer>
        </div>
</template>

<script>
import '../scss/flexible.js'
import '../scss/index.css';
export default {
  name: 'Index',
}
</script>

<style>

</style>
