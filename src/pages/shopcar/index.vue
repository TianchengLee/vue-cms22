<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- v-model="$store.getters.getGoodsSelected[item.id]" -->
            <mt-switch
              v-model="$store.getters.goodsSelected[item.id]"
              @change="selectedChanged(item.id, $store.getters.goodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <div>
                <span class="price">￥{{ item.sell_price }}</span>
                <!-- <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox> -->
                <div class="num-box">
                  <!-- || 一般用于默认值的处理 -->
                  <!-- && 如果前面的结果为false , 后面的代码就不会执行 -->
                  <input @click="zijian(item.id, i)" type="button" value="-">
                  <!-- @change="changeCount($event, item.id)" -->
                  <input
                    ref="goodsCountInp"
                    type="text"
                    @change="changeCount(item.id, i)"
                    :value="$store.getters.goodsCount[item.id]"
                  >
                  <input @click="zizeng(item.id, i)" type="button" value="+">
                </div>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品
              <span class="red">{{ $store.getters.goodsCountAndAmount.count }}</span> 件， 总价
              <span class="red">￥{{ $store.getters.goodsCountAndAmount.amount }}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>

    <!-- <p>{{ $store.getters.goodsSelected }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    zijian(id, i) {
      // console.log('自减')
      // console.log(this.$refs.goodsCountInp)
      let goodsCountInp = this.$refs.goodsCountInp[i];
      if (goodsCountInp.value <= 1) return;
      goodsCountInp.value--;
      this.changeCount(id, i);
    },
    zizeng(id, i) {
      // console.log('自减')
      // console.log(this.$refs.goodsCountInp)
      let goodsCountInp = this.$refs.goodsCountInp[i];
      goodsCountInp.value++;
      this.changeCount(id, i);
    },
    // changeCount(e, id) {
    //   console.log(e.target.value);
    //   console.log("购物车数据发生变化了");
    //   this.$store.commit("updateCarInfo", { id, count: e.target.value });
    // },
    changeCount(id, i) {
      // console.log(e.target.value);
      console.log("购物车数据发生变化了");
      let goodsCountInp = this.$refs.goodsCountInp[i];
      this.$store.commit("updateCarInfo", { id, count: goodsCountInp.value });
    },
    remove(id, index) {
      // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFormCar", id);
    },
    selectedChanged(id, selected) {
      // 每当点击开关，把最新的 快关状态，同步到 store 中
      console.log(id, selected);
      this.$store.commit("updateGoodsSelected", { id, selected });
    }
  }
};
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .num-box {
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 35px;
        input[type="text"] {
          width: 65px;
          height: 100%;
          text-align: center;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        input[type="button"] {
          width: 40px;
          height: 100%;
        }
      }
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
