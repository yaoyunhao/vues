<template>
    <div>
       <div v-for="(val,index) in booksData" :key="index">
           <input type="checkbox" v-model="val.is_time_limited_free">
           <h3>{{val.title}}</h3>
       </div>
       <div>
           <input type="checkbox" v-model="checkAll"> 全选
           <span @click="delDate">删除</span>
       </div>
    </div>
</template>

<script>
import axios from 'axios';
import Bus from './bus.js';
export default {
    name:'books',
    data(){
      return{
          booksData:[]
      }
    },
    created(){
        Bus.$on('booksData',(res=>{
           this.booksData = res;
        }))
    }, 
    methods:{
        delDate:function(){       
            this.booksData=this.booksData.filter((v,i)=>{
                return  !v.is_time_limited_free
            })       
        }
    },
      computed:{
        checkAll:{
            get:function(){
                return this.booksData.filter((v,i)=>{
                        return v.is_time_limited_free
                    }).length===this.booksData.length               
            },
            set:function(newvalue){
                this.booksData.forEach((v,i)=>{
                        v.is_time_limited_free = newvalue
                })
            }
        }
    }
}
</script>

<style>

</style>
