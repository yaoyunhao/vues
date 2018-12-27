<template>
    <div>
        <div class="left">
            <p v-for="val in showData" @click="clickP">{{val}}</p>
        </div>
          <button class="btn" @click="btnClick">添加</button>
    </div>
</template>

<script>
import Bus from "./bus.js";
export default {
    name: 'left',
    data(){
       return {
            showData: ['朱云平','李文杰','周旭旺','侯天琴','贺强'],
            classBg : []
       }
    },
    methods:{
        clickP:function(event){
          event.target.classList.toggle("bg");
          if(event.target.className==="bg"){
              this.classBg.push(event.target.innerHTML);
          }else{
               this.classBg=this.classBg.filter((v,i)=>{
                 return event.target.innerHTML!=v;
              })
        }
        },
        btnClick:function(){
          Bus.$emit('classData',[...this.classBg]);
        }
    }
}
</script>

<style>
    .left{
        float : left;
        width : 300px;
        height: 300px;
        border: 1px solid #ccc;
    }
    .left p{
       height     : 40px;
       text-align : center;
       line-height: 40px;
    }
    .bg{
        background: red;
    }
    .btn{
        float: left;
}   
</style>
