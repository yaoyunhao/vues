<template>
    <section>
        <div class="all">
            <dl v-for="(val,index) in shopCarData"  :key="index">
                <el-checkbox v-model="val.status"></el-checkbox>
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
        <div>
            <el-checkbox v-model="allStatus">全选</el-checkbox>
            <span>总价{{allPrice}}</span>
        </div>
    </section>
</template>

<script>
import Bus from './bus.js';

export default {
    name:"shopping",
    data(){
        return {
           shopCarData:[]
        }
    },
    methods:{
        addCount:function(id,type){
           this.shopCarData = this.shopCarData.map((v,i)=>{
               if(v.id===id){
                  type === 'add' ? v.count++ :v.count--;
               }
               return v;
           })
             Bus.$emit('chengeCount',type); 
        }
      
    },
    computed:{
        allStatus:{
          get:function(){
            return this.shopCarData.filter((v,i)=>{
                return v.status
            }).length === this.shopCarData.length
          },
          set:function(newValue){
              console.log(newValue)
              this.shopCarData.forEach((v,i)=>{
                  v.status=newValue;
              })
          }
        },
        allPrice:function(){
            let checkedData = this.shopCarData.filter((v,i)=>{
                return v.status
            })
            if(checkedData.length===1){
                return checkedData[0].count * checkedData[0].price
            }else if(checkedData.length === 0){
                return 0
            }else{
                return checkedData.reduce((a,b)=>{
                    console.log((a.count && (a.count * a.price) || a) +( b.count * b.price))
                    return (+(a.count && (a.count * a.price) || a) + ( b.count * b.price)).toFixed(2) || 0
                })
            }
        }
    },
    created(){
        Bus.$on('homeData',(res)=>{
            this.shopCarData = res;
        })
    }
}
</script>

<style>

</style>
