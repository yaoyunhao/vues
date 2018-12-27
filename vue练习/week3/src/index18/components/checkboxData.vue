<template>
    <div>
        <EachItem v-for="val in checkboxData" :value="val" type="checkboxData" :isClass="bottomData.indexOf(val) > -1" />
    </div>
</template>

<script>

import EachItem from './eachItem';
export default {
    name: 'checkboxData',
    props: ['checkboxData', 'bottomData'],
    components: {
        EachItem
    }
}
</script>

<style>

</style>
