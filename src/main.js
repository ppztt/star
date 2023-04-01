import Vue from 'vue'
import {Dialog,Input,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
