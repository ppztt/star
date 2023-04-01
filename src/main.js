import Vue from 'vue'
import { Dialog, Input, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueStarrySky from "vue-starry-sky"
import "vue-starry-sky/lib/vue-starry-sky.css"

Vue.use(VueStarrySky);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
