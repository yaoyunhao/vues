<template>
    <div>
        <div>
            <span @click="goHot">正在热映</span>
            <router-link to="/movie/coming">即将上映</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'movie',
    methods: {
        goHot: function() {
            this.$router.push({
                path: '/movie/hot'
            })
        }
    }
}
</script>

<style>

</style>
