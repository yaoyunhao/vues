<template>
    <div>
        <!-- index页面
        <div ref="divHtml">
            你获取我的数据吧
        </div>
        <button @click="getDivData">点击获取</button>
        <NewInput ref="newInput" />

        <swiper :options="swiperOption">
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
            <swiper-slide><img src="https://tpc.googlesyndication.com/daca_images/simgad/16603545874383700932"></swiper-slide>
        </swiper> -->


        <el-button type="primary" @click="clickBtn">主要按钮</el-button>
        <el-button round>圆角按钮</el-button>





        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>


        <el-slider
            v-model="value8"
            show-input>
        </el-slider>
    </div>
</template>

<script>
import NewInput from './input';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'index',
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 3000
                },
                speed: 1000,
            },
            formInline: {
                user: 'renyl',
                region: 'shanghai'

            },
            value8: 0
        }
    },
    components: {
        NewInput,
        swiper,
        swiperSlide
    },
    methods: {
        getDivData: function() {
            console.log(this.$refs)
            this.$refs.newInput.$refs.input.value = 'renyl'
        },
        clickBtn: function() {
            console.log('点击按钮')
        },
        onSubmit: function() {
            console.log(this.formInline)
        }
    }
}
</script>

<style>
@import 'swiper/dist/css/swiper.css'
</style>
