import Vue from 'vue';
import axios from 'axios';
new Vue({
    el: "#box",
    data: {
        name: "asd"
    },
    template: `<div>
        <span>{{name}}</span>
        </div>`
})