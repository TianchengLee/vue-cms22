export default {
  // 类似于computed的用法, 所以getters个人习惯起名词
  totalCount(state) {
    // 累加, 将car中所有商品的count属性进行累加
    let totalCount = 0
    state.car.forEach(item => totalCount += item.count)
    return totalCount
  }
  // getMsg(state) {
  //   // 如果state的数据变化  getters也会实时更新
  //   // 类似于filter和computed的结合体
  //   return '它的名字叫:' + state.msg
  // }
}