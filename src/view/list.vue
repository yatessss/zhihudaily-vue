<!--列表页-->
<template>
  <div class="main-list" id="foo">
    <list-header :show-sidebar.sync="showSidebar" :title="title" :icon-display="iconDisplay"> </list-header>
    <!--侧边栏-->
    <side-bar :show-sidebar.sync="showSidebar"> </side-bar>

    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>

    <!--页面子路由-->
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
  computed: {
    title () {
      switch (this.$route.params.id) {
        case '13':
          return '日常心理学'
        case '12':
          return '用户推荐日报'
        case '3':
          return '电影日报'
        case '11':
          return '不许无聊'
        case '4':
          return '设计日报'
        case '5':
          return '大公司日报'
        case '6':
          return '财经日报'
        case '10':
          return '互联网安全'
        case '2':
          return '开始游戏'
        case '7':
          return '音乐日报'
        case '9':
          return '动漫日报'
        case '8':
          return '体育日报'
        default:
          return '首页'
      }
    },
    iconDisplay () {
      if (this.$route.params.id) {
        return false
      } else {
        return true
      }
    }
  },
  attached () {
  },
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
      window.document.body.style.overflow = 'initial'
      window.document.querySelector('html').style.overflow = 'initial'
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
    /*overflow: auto;*/
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
