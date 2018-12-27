import Vue from 'vue'
import axios from 'axios';
import "./index.css";
import $ from "./jquery.js";

new Vue({
    el: "#box",
    data: {
        data: [],
    },
    template: `<div v-bind:class="{'list':true}">
             <div v-for="val in data" v-bind:class="{'listli':true}">
                <h2 v-on:click="clickli"v-bind:class="{'listlip':true}">{{val.name}}</h2>
                <p v-for="vals in val.childer" v-bind:style="{display:'none'}"v-bind:class="{'listliolli':true}">{{vals}}</p>
             </div>
             </div>`,
    methods: {
        clickli: function(e) {
            $(e.target).nextAll('p').slideToggle();
            $(e.target).parents().siblings().children('p').slideUp();
        }
    },
    created() {
        axios.get('/data').then(res => {
            this.data = JSON.parse(res.data);
            console.log(this.data);
        })
    }
})