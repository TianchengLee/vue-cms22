import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex) //must call Vue.use(Vuex) before creating a store instance.

const state = {
  // msg: '谢俊'
  car: JSON.parse(localStorage.getItem('car') || '[]')
  // 购物车数组中的对象格式: {id: 商品id, count: 商品的数量, price: 商品价格, selected: 是否勾选了商品}
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})