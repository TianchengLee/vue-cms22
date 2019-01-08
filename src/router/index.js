import Vue from 'vue'
import Router from 'vue-router'
// @ 符号表示 src 目录
import homeContainer from '../pages/home'
import memberContainer from '../pages/member'
import searchContainer from '../pages/search'
import shopcarContainer from '../pages/shopcar'
import newsListContainer from '../pages/newsList'
import newsInfoContainer from '../pages/newsInfo'
import photoListContainer from '../pages/photoList'
import photoInfoContainer from '../pages/photoInfo'
import goodsListContainer from '../pages/goodsList'
import goodsInfoContainer from '../pages/goodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: memberContainer },
    { path: '/search', component: searchContainer },
    { path: '/shopcar', component: shopcarContainer },
    { path: '/home/newsList', component: newsListContainer },
    { path: '/home/newsInfo/:id', component: newsInfoContainer },
    { path: '/home/photoList', component: photoListContainer },
    { path: '/home/photoInfo/:id', component: photoInfoContainer },
    { path: '/home/goodsList', component: goodsListContainer },
    { path: '/home/goodsInfo/:id', component: goodsInfoContainer, name: 'goodsInfo' },
  ],
  linkActiveClass: 'mui-active'
})
