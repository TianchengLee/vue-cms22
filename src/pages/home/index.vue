<template>
  <div class="home-container">
    <mt-swipe :speed="300" :auto="3000">
      <mt-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- /home的目的是为了路由切换的高亮显示 -->
        <router-link to="/home/newsList">
          <img src="../../assets/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getBanner() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status == 0) {
          this.banners = result.body.message;
        }
      });
    }
  },
  created() {
    // 在组件加载时  发送http请求  获取轮播图的数据
    this.getBanner();
  }
};
</script>

<style lang="less">
.home-container {
  /* 会被编译到最终的css文件 */
  // 不会被编译到最终的css文件
  // less: 1.嵌套  2.变量  3.注释  4.混入
  // 轮播图样式
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      background-color: pink;
      img {
        // width: 100%;
        height: 100%;
      }
    }
  }
  // 九宫格样式

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: 0;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
</style>
