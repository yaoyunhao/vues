<template>
    <div>
        <div>
            已选条件:
            <div v-if="topData.length">
                {{topData[0]}}
                <span @click="topData = []">X</span>
            </div>
            <div v-if="bottomData.length">
                {{newBottomData}}
                <span @click="bottomData = []">X</span>
            </div>
        </div>
        <div>
            <RadioData :radioData="radioData" :topData="topData" />
            <CheckboxData :checkboxData="checkboxData" :bottomData="bottomData" />
        </div>
    </div>
</template>

<script>


import RadioData from '../components/radioData';
import CheckboxData from '../components/checkboxData';
import Bus from '../utils/event.js'
export default {
    name: 'index',
    components: {
        RadioData,
        CheckboxData
    },
    data() {
        return {
            radioData: [
                '不限',
                '北大',
                '清华',
                '复旦',
                '浙大',
                '上海交大',
                '八维'
            ],
            checkboxData: [
                '不限',
                '北京',
                '上海',
                '天津',
                '河南',
                '石楼'
            ],
            topData: [],
            bottomData: []
        }
    },
    computed: {
        newBottomData: function() {
            return this.bottomData.join(',')
        }
    },
    created() {
        Bus.$on('radioData', (value) => {
            if (value === '不限') {
                this.topData = []
            } else {
                this.topData[0] === value ? this.topData = [] : this.topData = [value]
            }
        })
        Bus.$on('checkboxData', (value) =>{
            if (value === '不限') {
                this.bottomData = []
            } else {
                this.bottomData.indexOf(value) > -1
                ? this.bottomData.splice(this.bottomData.indexOf(value), 1)
                : this.bottomData.push(value)
            }
        })
    }
}
</script>

<style>

</style>
