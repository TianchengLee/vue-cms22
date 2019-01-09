export default {
  addToCar(state, goodsInfo) {
    // 添加商品到购物车
    // 1. 如果购物车中没有该商品, 直接push
    // 2. 如果购物车中有该商品了, 应该取出该商品, 将其 count 属性 += 新传入的goodsInfo的count属性

    // 在for循环之前  先假设没有找到
    let isFound = false
    // 普通for循环
    // 问题一  如何去数组中找一个对象是否存在 ?
    // for (let i = 0; i < state.car.length; i++) {
    //   let carInfo = state.car[i]
    //   // 如果两者相等 表示数组中已经存在该商品
    //   if (carInfo.id === goodsInfo.id) {
    //     carInfo.count += goodsInfo.count
    //     // 只要进入了if 表示找到了
    //     isFound = true
    //     break
    //   }
    // }
    // some方法: 迭代数组的方法, 特点是如果回调函数返回true表示找到了, 就会停止循环
    state.car.some(item => {
      if (item.id === goodsInfo.id) {
        // 表示找到了
        item.count += goodsInfo.count
        return isFound = true
      }
    })

    // forEach some every reduce map filter等ES5的数组迭代方法 都不能使用break
    // state.car.forEach(item => {
    //   // 函数中能使用break?  否
    // })

    // 问题二  在for循环结束后如何判断是否找到该商品了?
    // isFound表示是否找到商品
    if (!isFound) {
      state.car.push(goodsInfo)
    }

    // JS基础很重要 JS基础: 冒泡排序 假设已经排好序了  DOM: 全选反选 假设已经全选了
    // 假设法  在开发中非常常用
  }
  // mutations中的所有方法, 第一个参数都是state
  // changeMsg(state, newMsg) {
  //   if (newMsg == '吴聪') throw new Error('传入的值非法!请检查!')
  //   state.msg = newMsg
  // }
}