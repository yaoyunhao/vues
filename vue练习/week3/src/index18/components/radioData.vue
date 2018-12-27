<template>
    <div>
        <EachItem v-for="val in radioData" :value="val" type="radioData" :isClass="topData.indexOf(val) > -1" />
    </div>
</template>

<script>
import EachItem from './eachItem';


export default {
    name: 'radioData',
    props: ['radioData', 'topData'],
    components: {
        EachItem
    }
}
</script>

<style>

</style>
