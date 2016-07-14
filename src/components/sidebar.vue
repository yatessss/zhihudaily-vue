<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header" v-link="{name: 'author', params: { id: '888'}}" @click="hiddenBar">
        <div class="user">
          <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt="">
          <p>yatessss</p>
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
        <p v-link="{path: '/'}" class="sidebar-list-first" @click="hiddenBar"><i class="iconfont">&#xe61b</i>首页</p>
        <ul class="sidebar-list-ul">
          <li class="sidebar-list-li" v-for="item in list" @click="hiddenBar" v-link="{name: 'theme', params: { id: item.id }}">
            <p>{{item.name}}</p>
            <div>+</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  import ajax from '../ajax'
  export default{
    props: ['showSidebar', 'tip'],
    data () {
      return {
        list: []
      }
    },
    ready () {
      this.getList()
    },
    methods: {
      getList () {
        let _this = this
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/themes',
          url: 'http://api.yatessss.com:8888/news-at/api/4/themes',
          method: 'GET',
          callback: function (res) {
            _this.$set('list', res.others)
//            console.log(_this.list)
          }
        })
      },
      hiddenBar () {
        window.document.body.className = ''
        window.document.querySelector('html').className = ''
//        document.body.style.overflow = 'initial'
//        window.document.querySelector('html').style.overflow = 'initial'
        this.showSidebar = !this.showSidebar
        this.tip = null
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
    transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 290px;
    left: -290px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    &.show-sidebar{
      transform: translateX(290px);
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
          font-size: 18px;
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
    background: #f9f9f9;
    .sidebar-list-first{
      background: #f9f9f9;
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

