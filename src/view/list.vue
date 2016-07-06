<!--列表页2.:19开始改动-->
<template>
  <div class="main-list" id="foo">
    <list-header :show-sidebar.sync="showSidebar" :title="'首页'" :icon-display="true"> </list-header>
    <!--侧边栏-->
    <side-bar :show-sidebar.sync="showSidebar"> </side-bar>

    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>

    <!--轮播组件-->
    <!--<slider :top_stories="topStories" v-cloak></slider>-->
    <!--<list-body v-for="item in allStories" :list-info="item"></list-body>-->

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import sideBar from '../components/sidebar.vue'
import listHeader from '../components/list-header.vue'

/*eslint-disable no-useless-escape*/
/*eslint-disable no-new*/
export default {
  components: {
    sideBar,
    listHeader
  },
  data () {
    return {
      loading: false,
      showSidebar: false
    }
  },
  attached () {
  },
//  route: {
//    data (transition) {
//      var _this = this
//      window.addEventListener('scroll', false)
//      transition.next()
//    },
//    deactivate (transition) {
//      var _this = this
//      window.removeEventListener('scroll', false)
//      transition.next()
//    }
//  },
  methods: {
    replace (str) {
      return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    },
    showBar () {
      window.document.body.style.overflow = 'hidden'
      window.document.querySelector('html').style.overflow = 'hidden'
      this.showSidebar = !this.showSidebar
    },
    hiddenBar () {
      window.document.body.style.overflow = 'auto'
      window.document.querySelector('html').style.overflow = 'auto'
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  /*@import "../assets/css/swiper-3.3.1.min.css";*/
  @import "../assets/css/reset";
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/font_1467357626_5109937.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/font_1467357626_5109937.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_1467357626_5109937.svg#iconfont') format('svg'); /* iOS 4.1- */
  }

  .main-list{
    margin-top: 50px;
  }

  .sidebar-mask{
    /*width: 357px;*/
    /*height: 667px;*/
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.7);
  }
  .list{
    background: #efefef;
  }

  html {
    height: 100%;
    overflow: auto;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    height: 100%;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

</style>
