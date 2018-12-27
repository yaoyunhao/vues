<template>
    <section>
       <el-button type="success" @click="button" class="btn">登录</el-button>
    </section>
</template>

<script>
export default {
    name:"my",
    methods:{
        button:function(){
            window.localStorage.setItem('isLogin','1')
            this.$router.push('home')
        }
    }
}
</script>

<style>

</style>
