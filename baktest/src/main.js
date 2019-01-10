
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import {post} from './utils/http'
import getData from './utils/getData.js'
//导入过滤js
import filters from './utils/filters.js'
import './assets/icon/iconfont.css'
//定义全局变量
Vue.prototype.$post = post;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(getData);
//全局注册过滤器
for(let key in filters){
  Vue.filter(key,filters[key]);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

