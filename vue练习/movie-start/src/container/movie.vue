<template>
    <section>
        <div class="top">
            <span>全城</span>
            <span>品牌</span>
            <span>距离近</span>
            <span @click="showList">筛选</span>
            <ul class="list" v-show="display">
                <li @click="clickPrice">按价格排序</li>
                <li @click="clickSales">按销量排序</li>
                <li @click="clickDistance">按距离排序</li>
            </ul>
        </div>
        <div class="alls">
           <div v-for="(val,index) in allData" :key="index" class="all">
               <div class="name">
                   <span>{{val.name}}</span>
                   <b>{{val.distance}}km</b>
               </div>
              <div class="money">
                       <span>￥{{val.price}}起</span>
                   <p>
                       <b v-for="(item,index) in val.combo" :key="index">{{item}}</b>
                   </p>
                    <span>销量{{val.sales}}</span>
              </div>
              <span>{{val.favoranle}}</span>
           </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name:'movie',
    data(){
        return {
            allData:[],
            display:false
        }
    },
    methods:{
        showList:function(){
            this.display=true
        },
        clickPrice:function(){
            this.display=false;
            this.allData = this.allData.sort((a,b)=>{
                return a.price-b.price
            })
        },
        clickSales:function(){
            this.display=false
             this.allData = this.allData.sort((a,b)=>{
                return b.sales-a.sales
            })
        },
        clickDistance:function(){
            this.display=false
             this.allData = this.allData.sort((a,b)=>{
                return a.distance-b.distance
            })
        }
    },
    mounted(){
        axios.get('http://localhost:8080/static/data.json').then((res)=>{
            this.allData=res.data;
        })
    }

    
}
</script>

<style>

</style>
