/*
 * @Author: yaochong
 * @Date: 2018-10-15 09:11:16 
 * @Last Modified by:yaochong
 * @Last Modified time: 2018-10-15 09:58:03
 */
import Vue from 'vue';
import axios from 'axios';
import './index.css';
import url from './1.png';
new Vue({
    el: '#box',
    data: {
        msg: "<",
        titmsg: "Product name",
        money: '559$'
    },

    template: `
        <div class='wrap'>
            <header>
                <span>{{msg}}back</span>
                <span>Basement</span>
                <span>Cart</span>
            </header>
            <section>
                <div class='top'>
                    <h1>{{titmsg}}</h1>
                    <p>
                        <span>13</span>
                        <span>{{money}}</span>
                    </p>
                </div>
                <div class='title'> 
                
                </div>
            </section>
            <footer></footer>
        </div>
   `
})