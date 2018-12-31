import Vue from 'vue'
import Router from 'vue-router'
// @ 符号表示 src 目录
import homeContainer from '../pages/home'
import memberContainer from '../pages/member'
import searchContainer from '../pages/search'
import shopcarContainer from '../pages/shopcar'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: memberContainer },
    { path: '/search', component: searchContainer },
    { path: '/shopcar', component: shopcarContainer },
  ],
  linkActiveClass: 'mui-active'
})
