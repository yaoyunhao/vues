<template>
    <div>
        <div class="right">
            <p v-for="val in classBg">{{val}}</p>
        </div>
    </div>
</template>

<script>
import Bus from './bus.js';
export default {
    name: 'right',
    data(){
        return {
            classBg:[]
        }
    },

    created(){
        Bus.$on('classData',(val)=>{
          this.classBg = val;
        })
    }

}
</script>

<style>
 .right{
        float: left;
        margin-left:100px;
        width: 300px;
        height: 300px;
        border:1px solid #ccc;
    }
</style>
