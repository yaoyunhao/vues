<template>
    <div>
        <div v-for="(val, index) in shopCarData" :key="index">
            <el-checkbox v-model="val.status"></el-checkbox>
            <h3>{{val.name}}</h3>
            <p>{{val.price}}</p>
            <div v-if="val.count === 0" @click="addCount(val.id, 'add')">购物车</div>
            <div v-else>
                <el-button type="danger" @click="addCount(val.id, 'del')">-</el-button>
                <span>{{val.count}}</span>
                <el-button type="primary" @click="addCount(val.id, 'add')">+</el-button>
            </div>
        </div>
        <div>
            <el-checkbox v-model="allStatus">全选</el-checkbox>
            <span>合计：{{allPrice}}</span>
        </div>
    </div>
</template>

<script>
import Bus from '../utis/eventBus.js';
export default {
    name: 'shopCar',
    data() {
        return {
            shopCarData:[]
        }
    },
    created() {
        Bus.$on('shopCarData', (data) => {
            this.shopCarData = data
        })
    },
    computed: {
        allStatus: {
            get: function() {
                return this.shopCarData.filter((v, i) => {
                    return v.status
                }).length === this.shopCarData.length
            },
            set: function(newValue) {
                this.shopCarData.forEach((v, i) => {
                    v.status = newValue;
                })
            }
        },
        allPrice: function() {
            let checkedData = this.shopCarData.filter((v, i) => {
                    return v.status
                })
                if (checkedData.length === 1) {
                    return checkedData[0].count * checkedData[0].price
                } else if (checkedData.length === 0) {
                    return 0
                } else {
                    return checkedData.reduce((a, b) => {
                        return ((a.count && (a.count * a.price)) || a) + (b.count * b.price)
                    })
                }
        }
    },
    methods: {
        addCount: function(id, type) {
            this.shopCarData = this.shopCarData.map((v, i) => {
                if (v.id === id) {
                    type === 'add' ? v.count++ : v.count--
                }
                return v
            })
            Bus.$emit('changeCount', type);
        }
    }
}
</script>

<style>

</style>
