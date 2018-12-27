<template>
    <div>
        <!-- <div class="top">
            <ul>
                <li
                    v-for="(val, index) in topData"
                    class="floatLeft"
                    :class="{defaultClick: index === defaultInd}"
                    @click="clickCity(index)"
                >
                    {{val}}
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div v-for="val in bottomData">
                <Bottom :value="val">{{val}}</Bottom>
            </div>
        </div> -->
         <left />
   
     <right />
     
    </div>
</template>

<script>
import axios from 'axios';
import left from './left';
import right from './right';

export default {
    name: 'tab',
    data() {
        return {
            allData: {},
            topData: [],
            // bottomData: [],
            defaultInd: 0
        }
    },
    components: {
        left,
        right
    },
    
    // mounted() {
    //     axios.get('http://localhost:8080/static/data.json').then(res => {
    //         console.log(res, 'res');
    //         this.allData = res.data;
    //         this.topData = Object.keys(res.data);
    //         this.bottomData = Object.values(res.data)[0];
    //     })
    // },
    // methods: {
    //     clickCity: function(index) {
    //         this.defaultInd = index;
    //         this.bottomData = this.allData[this.topData[index]]
    //     }
    // }
}
</script>

<style>

</style>
