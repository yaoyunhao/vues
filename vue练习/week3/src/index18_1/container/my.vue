<template>
    <div @click="login">
        我的页面
    </div>
</template>

<script>
export default {
    name: 'my',
    methods: {
        login: function() {
            window.localStorage.setItem('isLogin', '1');
            this.$router.push('/index/home')
        }
    }
}
</script>

<style>

</style>
