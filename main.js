import Vue from 'vue'
import App from './App'

import store from './store'
import api from './api'
import './plugins/mixins'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
