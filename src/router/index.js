import Vue from 'vue';
import Router from 'vue-router';
import Main from "@/page/main.vue"
import iView from 'iview';
import register from '@/page/register';
import volunteer from  '@/page/volunteer';
import needs from '@/page/needs';
import needPublish from '@/page/needPublish';
import needsDetail from '@/page/needsDetail';

const Home = r => require.ensure([], () => r(require('@/page/home')), 'Home');
const Needs = r => require.ensure([], () => r(require('@/page/needs')), 'Needs');
const News = r => require.ensure([], () => r(require('@/page/news')), 'News');
const NeedsNDetail = r => require.ensure([], () => r(require('@/page/needsDetail')), 'NeedsDetail');


Vue.use(Router);
const router = new Router({
  routes: [
  {
    path: "/",
    name: "Main",
    component: Main,
    children:[{
      path: '/home',
      name: 'home',
      component: Home,
    }, {
      path: '/needs',
      name: 'needs',
      component: Needs,
    }, {
      path: '/news',
      name: 'news',
      component: News,
    },{
      path: '/needsDetail',
      name: 'needsDetail',
      component: NeedsNDetail,
    }]
  }, {
    path: '/register',
    name: 'register',
    component: register,
  },{
    path: '/volunteer',
      name: 'volunteer',
      component: volunteer,
    },{
      path: '/needPublish',
      name: 'needPublish',
      component: needPublish,
    }]
});




/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (sessionStorage.getItem('authorization')) {// 判断是否登录
      iView.LoadingBar.start();
      window.document.title = '登记审核系统——' + to.meta.label;
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/home',
      })
    }
  } else {
    next()
  }
});
*/

router.beforeEach((to, from, next) => {
  if(to.path === '/') {
    next({
      path: '/home',
    })
  } else {
    next();
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);

});
export default router;
