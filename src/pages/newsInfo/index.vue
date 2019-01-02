<template>
  <div class="news-info-container">
    这是新闻详情页 {{ $route.params.id }}
    <comment></comment>
  </div>
</template>

<script>
// import comment from '../../components/common/comment'
// 全局过滤器和私有过滤器
// 注册方式分为: 全局组件注册和私有组件注册
// 如果项目中多个地方都要用到该组件, 建议在main.js中全局注册
export default {
  // filters: {
  //   comment
  // }
}

</script>