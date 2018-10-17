'use strict'

import Vue from 'vue'

import App from './App.vue'
require('./assets/material.css');
require('./assets/custom.css');
require('../../node_modules/vuetify/dist/vuetify.min.css');
import Vuetify from 'vuetify'

Vue.use(Vuetify);

new Vue({
    el: '#app',
    render: h => h(App),
});

const flac = import('./rust_web_flac');

flac.then(function(result) {
    document.body.flac = result;
    /*let app = document.getElementById('app');
    let a = document.createElement('input');
    a.setAttribute('id', 'a');
    let b = document.createElement('input');
    b.setAttribute('id', 'b');
    let c = document.createElement('input');
    c.setAttribute('id', 'c');
    [a,b,c].forEach(el => {
        el.setAttribute('type', 'text');
        app.appendChild(el);
    });

    let calc = document.createElement('button');
    calc.innerText = "Calculate";
    calc.addEventListener('click', evt => {
        let result = document.body.flac.sqrt_roots_js(a.value,b.value,c.value);
        alert(JSON.stringify(result));
    });

    app.appendChild(calc);*/
});