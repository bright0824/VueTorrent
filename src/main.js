import Vue from 'vue'
import './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import Toast from 'vue-toastification'
import App from './App.vue'
import router from './router'
import store from './services/store'
import './registerServiceWorker'

import 'vue-toastification/dist/index.css'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
