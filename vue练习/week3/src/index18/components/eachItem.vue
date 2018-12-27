<template>
    <span @click="clickSchool" :class="{bg: isClass}">{{value}}</span>
</template>

<script>

import Bus from '../utils/event.js';

export default {
    name: 'eachItem',
    props: ['value', 'type', 'isClass'],
    methods: {
        clickSchool: function() {
            Bus.$emit(this.type, this.value)
        }
    }
}
</script>

<style scoped>
    span {
        display: inline-block;
        width: 150px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #ccc;
    }
    .bg{ 
        background: blue;
    }
</style>
