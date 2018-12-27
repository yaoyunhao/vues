<template>
    <div>
        <router-view></router-view>
        <div>
            <router-link to="/movie">电影</router-link>
            <router-link to="/cinema">影院</router-link>
            <router-link to="/my">我的</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style>

</style>
