<template>
  <div>
        <div v-for="(val,index) in detailData" :key="index" class="detail">
            <dl>
                <dt>
                    <img :src="val.avatar" >
                </dt>
                <dd>
                    <div>
                        <h1>{{val.title}}</h1>
                        <h2>{{val.author}} 著</h2>
                    </div>
                    <div class="tags">
                        <span v-for="(item,index) in val.tags" :key="index">{{item}}</span>
                    </div>
                    <p>{{val.summary}}</p>
                </dd>
            </dl>
            <div class="title">
                <span>作品信息</span>
                <span>目录</span>
                <span>作品讨论</span>
            </div>
            <div class="summary">{{val.summary}}</div>
        </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'detail',
    data(){
        return{
            detailDatas: [],
            detailData : []

        }
    },
    mounted(){
       axios.get('http://localhost:8080/static/list.json').then((res)=>{
          this.detailDatas = res.data.data;
          this.detailData  = this.detailDatas.filter((v,i)=>{
                return v.id == this.$route.params.id
          })
       
     })
    }
}
</script>

<style>

</style>
