import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// 安装vue-resource  在此之后才可以使用Vue.$http对象
Vue.use(VueResource)

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入mui.css
import './lib/mui/css/mui.css'
// 导入扩展字体的css
import './lib/mui/css/icons-extra.css'

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
