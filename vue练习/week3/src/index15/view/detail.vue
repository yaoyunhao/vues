<template>
    <div>
        detail页面接收到的id: {{$route.params.id}}
    </div>
</template>

<script>
export default {
    name: 'detail',
    mounted() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>
