<template>
    <div class="wrap">
        <header>
            <span v-for="(val,index) in datas" :key="index">{{val}}</span>
        </header>
        <section>
           <div class="all">
                <Commont v-for="(listData,index) in listDatas" :listData = "listData" :key="index" @listId="clickListId"></Commont>
           </div>
        </section>
    </div>
</template>

<script>
import '../scss/index.css'
import Bus from './bus.js';
import axios from "axios"
import Commont from "./commont.vue" 
export default {
    name: 'list',
    data(){
        return{
            datas    : ['全部分类','玄幻','奇幻','武侠','仙侠','都市','现实','军事','历史','游戏','体育','科幻','灵异','二次元','当月新书'],
            listDatas: [],
            booksData: []
        }
    },
    components:{
        Commont
    },
    methods:{
        clickListId:function(id){
            this.listDatas.forEach((v,i)=>{
                if(v.id===id){
                    v.is_time_limited_free = true
                }
            })
        }
    },
    mounted(){
        axios.get('http://localhost:8080/static/list.json').then((res)=>{
            this.listDatas = res.data.data;
        })
    },
    destroyed(){
        
         let bookData = this.listDatas.filter((v,i)=>{
            return v.is_time_limited_free === true
        })
        Bus.$emit('booksData',bookData)
    }
}
</script>

<style>

</style>
