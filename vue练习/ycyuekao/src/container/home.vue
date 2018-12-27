<template>
    <div>
    <div class="bg">
            <img :src="url" alt="">
        </div>
        <div class="left">
            <img :src="url" alt="">
            <span>3.7w</span>
            <span @click="clickSpan">{{praiseLenght}}</span>
            <span>1.1w</span>
        </div>
        <div class="list" v-show="display">
            <div class="title">
                <span></span>
                <span>{{praiseLenght}}条评论</span>
                <span @click="closeList">x</span>
            </div>
            <ul>
                <li v-for="(val,index) in listData" :key="index">
                    <span class="imgs"></span>
                    <p>
                        <span>{{val.name}}</span>
                        <span>{{val.msg}}</span>
                        <span>{{val.time}}分钟前</span>
                    </p>
                    <span @click="praiseClick(val.id)">点赞{{val.praise}}</span>
                </li>
            </ul>
            <div class="discuss">
                <input type="text" placeholder="有爱评论,说点好听的" v-model="praiseHtml">
                <button @click="clickBtn">添加评论</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'home',
        data(){
        return {
            url : '../../static/img/1.png',
            listData:[],
            praiseData:[],
            praiseLenght:0,
            praiseHtml:'',
            ids:6,
            display:false
        }
    },
    methods:{
        /**
         *  点击span 显示隐藏 评论页
         */
        clickSpan:function(){
           if(this.display === true){
               this.display = false
           }else{
               this.display = true
           }
        },
        /**
         *  点击close 隐藏评论页
         */
        closeList:function(){
            this.display=false
        },
        /**
         *  点击praise 点赞+1
         */
        praiseClick:function(id){
           this.praiseData = this.listData.filter((v,i)=>{
                return id === v.id
            })
            this.praiseData[0].praise++
        },
        /**
         *  点击Btn 增加评论并改变评论数量
         */
        clickBtn:function(ids){
            this.ids = ids;
           if(this.praiseHtml !== ""){
                this.listData.push({
                name:'@自己',
                msg:this.praiseHtml,
                praise:0,
                time:1,
                id:ids
            })
           }
            this.praiseHtml=""
            this.praiseLenght = this.listData.length;
        }
    },
    created(){
        axios.get('http://localhost:8080/static/data.json').then(res=>{
               this.listData = res.data
               this.praiseLenght = this.listData.length;
        })
        
    }
}
</script>

<style>
 
</style>
