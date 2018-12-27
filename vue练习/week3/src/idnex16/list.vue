<template>
    <div>
        list页面
        <button @click="consoleData">打印数据</button>
    </div>
</template>

<script>
import Bus from './bus.js';
export default {
    name: 'list',
    data() {
        return {
            getData: ''
        }
    },
    methods: {
        consoleData: function() {
            console.log(this.getData, 'ooooo')
        }
    },
    beforeCreate() {
        console.log('list', 'beforeCreate')
    },
    created() {
        console.log('list', 'created')
        Bus.$on('sendData', (res) => {
            console.log('res', res)
            this.getData = res
        })
    },
    beforeMount() {
        console.log('list', 'beforeMount')
    },
    mounted() {
        console.log('list', 'mounted')
    },
    beforeDestroy() {
        Bus.$off('sendData')
    }
}
</script>

<style>

</style>
