<template>
    <div>
        <div>
            <router-link to="/index/hot">内部切换hot页面</router-link>
            <router-link to="/index/cold">内部切换cold页面</router-link>
        </div>
        <router-view></router-view>
        <router-link :to="{name: 'Detail', params: {username: 'renyl', id: 2}, query: {page: 3}}">去detail页面</router-link>
        <!-- <router-view name='concatD'></router-view>  -->
    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style>

</style>
