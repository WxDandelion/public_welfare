// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import axios from 'axios';


Vue.use(VueRouter);
Vue.use(iView);
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
//页面是否登录
    if (localStorage.getItem("token")) {
//本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
//next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        window:confirm('请先登录'),
        path:'/home'
      });
    }
  } else {
//表示不需要登录
    next(); //继续往后走
  }
});
