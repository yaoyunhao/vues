<template>
    <div>
        <button @click="sendData">
            传递出去数组
        </button>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            parentData: [1, 2, 3]
        }
    },
    methods: {
        sendData: function() {
            this.$emit("data", this.parentData)
        }
    }
}
</script>

<style>

</style>
