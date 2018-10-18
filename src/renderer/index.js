'use strict'

import Vue from 'vue'

import App from './App.vue'
require('./assets/material.css');
require('./assets/custom.css');
require('../../node_modules/vuetify/dist/vuetify.min.css');
import Vuetify from 'vuetify'
import Worker from './flac.worker.js';

Vue.use(Vuetify);

new Vue({
    el: '#app',
    render: h => h(App),
});

import('./rust_web_flac').then(function(flac) {
    document.body.flac = flac;
});

document.body.Worker = Worker;