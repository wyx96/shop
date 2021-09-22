import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
