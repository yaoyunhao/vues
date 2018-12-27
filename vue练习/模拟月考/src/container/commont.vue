<template>
                <dl> 
                    <dt>
                        <img :src="listData.avatar">
                    </dt>
                    <dd>
                        <h1>{{listData.title}}</h1>
                        <div class="author">
                        <span>{{listData.author}}</span>
                        <span v-for="(item,index) in listData.roles" :key="index">{{item}}</span>
                        </div>
                        <p>{{listData.summary}}</p>
                    </dd>
                    <div class="right">
                        <p>
                            <b></b>
                            <strong>{{listData.tip_welth_sum}}月票</strong>
                        </p>
                        <p>
                            <router-link :to="{name:'Detail',params:{id:listData.id}}" tag="span">书籍详情</router-link>
                            <span v-if="!listData.is_time_limited_free" @click="spanClick(listData.id)">加入书架</span>
                            <span v-else>已在书架</span>
                            <span @click="clickBooks">跳转</span>
                        </p>  
                    </div>
                </dl>
</template>

<script>
export default {
    name:'commont',
    props:['listData'],
        methods:{
        spanClick:function(id){
          this.$emit('listId',id)
        },
        clickBooks:function(){
            this.$router.push('Books')
        }
    },
}
</script>

<style>

</style>
