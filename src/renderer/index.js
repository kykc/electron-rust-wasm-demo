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
});