<template>
    <div>
        <div @click="goBackHtml">
            返回
        </div>
        detail页面
    </div>
</template>

<script>
export default {
    name: 'detail',
    props: ['params', 'query'],
    mounted() {
        // console.log(this.$route.params)
        console.log(this.params, '0----', this.query)
    },
    beforeRouteEnter(to, from, next) {
        
    },
    beforeRouteUpdate(to, from, next) {

    },
    beforeRouteLeave(to, from, next) {

    },
    methods: {
        goBackHtml: function() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
