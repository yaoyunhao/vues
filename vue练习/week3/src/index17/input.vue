<template>
    <div>
        <input ref="input" />
        <button @click="getInputValue">获取内容</button>
    </div>
</template>

<script>
export default {
    name: 'newInput',
    methods: {
        getInputValue: function() {
            console.log(this.$refs.input.value)
        }
    }
}
</script>

<style>

</style>
