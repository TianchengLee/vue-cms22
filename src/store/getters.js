export default {
  // 类似于computed的用法, 所以getters个人习惯起名词
  // getters 不能够传参
  totalCount(state) {
    // 累加, 将car中所有商品的count属性进行累加
    let totalCount = 0
    state.car.forEach(item => totalCount += item.count)
    return totalCount
  },
  // getMsg(state) {
  //   // 如果state的数据变化  getters也会实时更新
  //   // 类似于filter和computed的结合体
  //   return '它的名字叫:' + state.msg
  // }

  // 购物车模块的问题: 由于本地store中存储了商品的 [数量] 信息
  // 但是我们需要通过服务器获取商品的标题 图片等信息
  // 服务器返回的数据是肯定没有 数量 信息的
  // 如何根据服务器返回的数据, 取出本地每一条数据对应的数量信息?
  // 机智的解决方案: 
  // 在getters中定义一个数据(函数), 在内部做一件事情:
  // 将本地存储的car中的每一条商品信息迭代循环, 取出每一个商品的id和count
  // 将每一条商品的id作为键, count作为值, 创建一个新的对象, 最终结构为:
  // { 88: 2, 90: 1 }
  // 原结构为:
  // [ { id: 88, count: 2 }, { id: 90, count: 1 } ]
  // 创建出新的对象后, 就可以根据ID直接取到对应的count了!
  // 对象访问属性的两种方式: 
  // obj.name
  // obj['name']
  goodsCount(state) {
    let obj = {}
    state.car.forEach(item => obj[item.id] = item.count)
    return obj // { 88: 5, 90: 2 }
  },
  goodsSelected(state) {
    let obj = {}
    state.car.forEach(item => obj[item.id] = item.selected)
    return obj // { 88: true, 90: true }
  },
}