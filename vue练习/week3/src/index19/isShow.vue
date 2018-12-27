<template>
    <div>
        我想要隐藏这个盒子
        <button @click="changeShow">
            我也要关闭
        </button>
    </div>
</template>

<script>
export default {
    name: 'isShow',
    methods: {
        changeShow: function() {
            this.$emit("update:isShow", false)
        }
    }
}
</script>

<style>

</style>
