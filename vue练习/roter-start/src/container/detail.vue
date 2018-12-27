<template>
    <div class="wrap">
        <header  v-for="(val,index) in detailData" :key="index">
            <span>{{val.name}}</span>
        </header>
        <section>
              <div class="all">
        <dl v-for="(val,index) in detailData" :key="index">
            <dt>
                <img :src='val.url'>
            </dt> 
            <dd>
              <h1>{{val.name}}</h1>
              <span>{{val.remark}}</span>
              <p>主演: <span v-for=" (item,index) in val.protagonist" :key="index">{{item  }}</span></p>
              <h3>{{val.msg}}</h3>
            </dd>
           
        </dl>
    </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'detail',
    data(){
        return{
            detailData:[]
        }
    },
    mounted(){
       axios.get('http://localhost:8080/static/data.json').then(res=>{
           this.detailData=res.data.filter((v,i)=>{
               return v.id  ===  this.$route.params.id
           })
           console.log(this.detailData)
        })
    },

}
</script>

<style>

</style>
