<template>
    <div>
        <div v-for="(val, index) in hotData" :key="index">
            <router-link :to="{name: 'Detail', params: {id: val.id}, query: {name: 'renyl'}}" tag="span">{{val.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hot',
    data() {
        return {
            hotData: [
                {
                    name: '阿汤哥',
                    id: 1
                },
                {
                    name: '杰森斯坦森',
                    id: 2
                }
            ]
        }
    }
}
</script>

<style>

</style>
