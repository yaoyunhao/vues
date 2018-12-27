<template>
    <section>
        <div class="all">
            <dl v-for="(val,index) in allData"  :key="index">
                <dt>
                    <img :src="val.url" alt="">
                </dt>
                <dd>
                    <h3>{{val.name}}</h3>
                    <h2>{{val.msg}}</h2>
                    <div>
                        <h1>$ {{val.price}}</h1>
                        <p v-if="val.count === 0" @click="addCount(val.id,'add')">购物车</p>
                          <div v-else>
                            <el-button type="primary" @click="addCount(val.id,'odd')">-</el-button>
                            <span>{{val.count}}</span>
                            <el-button type="danger" @click="addCount(val.id,'add')">+</el-button>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Bus from './bus.js';
export default {
    name:"home",
    data(){
        return {
            allData:[],
            count:0
        }
    },
    mounted(){
        axios.get('http://localhost:8080/static/data.json').then(res =>{
            this.allData = res.data
        })
      
    },
    methods:{
        addCount:function(id,type){
           this.allData = this.allData.map((v,i)=>{
               if(v.id===id){
                  type === 'add' ? v.count++ :v.count--;
               }
              
               return v;
           })
             Bus.$emit('chengeCount',type); 
           
        }
    },
    beforeDestroy(){

    },
    destroyed(){
        let homeData = this.allData.filter((v,i)=>{
            return v.count>0
        })
        Bus.$emit('homeData',homeData)
    },
    beforeRouteEnter(to,from,next){
        let isLogin = window.localStorage.getItem('isLogin') 
        if(isLogin==="1"){
            next()
        }else{
            next({
                path:'my'
            })
        }
    }
}
</script>

<style>

</style>
