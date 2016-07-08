<!--主编页面-->
<template>
  <div>
    <!--头部-->
    <common-header :title="'主编'"></common-header>
    <ul>
      <li v-for="item in editors">
        <a :href="'http://news-at.zhihu.com/api/4/editor/'+item.id+'/profile-page/android'">
          <div class="img-box">
            <img :src="item.avatar | replaceUrl" alt="">
          </div>
          <div class="info">
            <p class="name">{{item.name}}</p>
            <p class="bio">{{item.bio}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import commonHeader from '../components/common-header.vue'
  /*eslint-disable no-new*/
  export default{
    components: {
      commonHeader
    },
    data () {
      return {
        editors: []
      }
    },
    attached () {
    },
    route: {
      activate (transition) {
        var _this = this
        _this.editors = JSON.parse(window.sessionStorage.editors)
        _this.$nextTick(function () {
          window.document.body.scrollTop = 0
        })
        transition.next()
      },
      deactivate (transition) {
        this.editors = []
        transition.next()
      }
    },
    methods: {
      goBack () {
        window.history.back()
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  ul{
    padding: 0 15px 15px 15px;
    margin-top: 50px;
    .title{
      color: #8c8c8c;
      margin-bottom: 15px;
    }
    li{
      padding: 10px 0;
      border-bottom: 1px solid #d1d1d1;
      a{
        display: flex;
        flex-direction: row;
        overflow: hidden;
        .img-box{
          height: 40px;
          width: 40px;
          img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
          }
        }
        .info{
          margin-left: 10px;
          .name{
            font-size: 15px;
            font-weight: bold;
            color: #000;
          }
          .bio{
            color: #8c8c8c;
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>

