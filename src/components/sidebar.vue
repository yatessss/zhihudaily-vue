<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="sidebar-container swiper-container-vertical swiper-container-free-mode">
      <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, -26.8382px, 0px);">
        <div class="swiper-slide swiper-slide-active">
          <!--侧边栏头部-->
          <div class="sidebar-header">
            <div class="user">
              <img src="http://7xqch8.com1.z0.glb.clouddn.com/%E5%A4%B4%E5%83%8F4bed2e738bd4b31ca1ce4d1787d6277f9f2ff8a8.jpg" alt="">
              <p>用户名字</p>
            </div>
            <div class="function">
              <div class="function-sub">
                <i class="iconfont">&#xe614</i>
                <p>我的收藏</p>
              </div>
              <div class="function-sub">
                <i class="iconfont">&#xe60f</i>
                <p>离线下载</p>
              </div>
            </div>
          </div>
          <!--侧边栏列表-->
          <div class="sidebar-list">
            <p class="sidebar-list-first" @click="hiddenBar"><i class="iconfont">&#xe61b</i>首页</p>
            <ul class="sidebar-list-ul">
              <li class="sidebar-list-li" v-for="item in list" @click="hiddenBar">
                <p>{{item.name}}</p>
                <div>+</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  import ajax from '../ajax'
  export default{
    props: ['showSidebar'],
    data () {
      return {
        list: []
      }
    },
    ready () {
      this.getList()
      new window.Swiper('.sidebar-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
      })
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
      },
      getList () {
        let _this = this
        ajax({
          url: 'http://news-at.zhihu.com/api/4/themes',
          method: 'GET',
          callback: function (res) {
            _this.$set('list', res.others)
//            console.log(_this.list)
          }
        })
      },
      hiddenBar () {
        document.body.style.overflow = 'auto'
        this.showSidebar = !this.showSidebar
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family:"iconfont";
    font-size: 14px;
    font-style:normal;
    color: #ffffff;
  }

  .show-sidebar{
    transform: translateX(290px);
  }
  .sidebar-box{
    position: fixed;
    height: 100%;
    overflow: hidden;
    width: 290px;
    left: -290px;
    z-index: 99;
    background: #f9f9f9;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    &.show-sidebar{
      transform: translateX(290px);
    }
    .sidebar-container {
      margin: 0 auto;
      width: 100%;
      height: 667px;
    }
    .swiper-slide {
      font-size: 15px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .sidebar-box{
    .sidebar-header{
      padding: 15px;
      background: #00A2EA;
      .user{
        display: flex;
        flex-direction: row;
        >img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        >p{
          margin-left: 20px;
          line-height: 30px;
          flex: 1;
          font-size: 15px;
          font-weight: 300;
          color: #ffffff;
        }
      }
    }
    .function{
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      color: #ffffff;
      .function-sub{
        padding-left: 52px;
        flex: 1;
        font-size: 13px;
        font-weight: 300;
        position: relative;
        >i{
          position: absolute;
          top: 0;
          left: 20px;
        }
      }
    }
  }

  .sidebar-list{
    padding-bottom: 20px;
    .sidebar-list-first{
      color: #00A2EA;
      height: 47px;
      line-height: 47px;
      font-size: 15px;
      padding-left: 55px;
      position: relative;
      >i{
        color: #00A2EA;
        font-size: 20px;
        position: absolute;
        top: 0px;
        left: 20px;
      }
    }
    .sidebar-list-li{
      height: 47px;
      line-height: 47px;
      display: flex;
      flex-direction: row;
      padding-left: 15px;
      >p{
        flex: 1;
      }
      >div{
        padding-right: 40px;
        font-size: 25px;
        font-weight: 200;
        color: #868686;
      }
    }
  }
</style>

