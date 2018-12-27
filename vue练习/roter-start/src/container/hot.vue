<template>
       
    <div class="all">
        <dl v-for="(val,index) in allData" :key="index">
            <dt>
                <img :src='val.url'>
            </dt> 
            <dd>
              <h1>{{val.name}}</h1>
              <span>{{val.remark}}</span>
              <p>主演: <span v-for=" (item,index) in val.protagonist" :key="index">{{item}}</span></p>
              <h3>{{val.msg}}</h3>
            </dd>
            <button>
                <router-link :to="'/detail/'+val.id">购票</router-link>
            </button>
        </dl>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'Hot',
    data(){
        return {
            allData:[]
        }
    },
    mounted(){
        axios.get('http://localhost:8080/static/data.json').then(res=>{
            this.allData=res.data
        })
    }
}
</script>

<style>

</style>
