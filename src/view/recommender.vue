<template>
  <div>
    <!--头部-->
    <div class="comments-header">
      <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
      <div class="header-cont"><p>推荐者</p></div>
    </div>
    <ul>
      <p class="title">本文推荐者</p>
      <li v-for="item in recommenders">
        <a :href="'http://www.zhihu.com/people/' + item.zhihu_url_token">
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
  import ajax from '../ajax'
  /*eslint-disable no-new*/
  export default{
    data () {
      return {
        detailId: '',
        recommenders: []
      }
    },
    attached () {
    },
    route: {
      activate (transition) {
        var _this = this
        _this.detailId = window.sessionStorage.detailId
        _this.getRecommender()
        _this.$nextTick(function () {
          window.document.body.scrollTop = 0
        })
        transition.next()
      },
      deactivate (transition) {
        transition.next()
      }
    },
    methods: {
      goBack () {
        window.history.back()
      },
      getRecommender () {
        let _this = this
        _this.loading = true
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/story/' + _this.detailId + '/recommenders',
          url: 'http://api.yatessss.com:8888/news-at/api/4/story/' + _this.detailId + '/recommenders',
          method: 'GET',
          callback: function (res) {
            _this.$set('recommenders', res.items[0].recommenders)
            console.log(_this.recommenders)
            _this.loading = false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family:"iconfont";
    font-size: 19px;
    font-style:normal;
    color: #ffffff;
  }
  .comments-header{
    position: fixed;
    top: 0;
    z-index: 4;
    height: 50px;
    width: 100%;
    background: #00A2EA;
    display: flex;
    flex-direction: row;
    .header-icon{
      flex:1;
      text-align: center;
      >i{
        line-height: 53px;
      }
      >span{
        color: #ffffff;
        font-size: 14px;
        margin-left: 3px;
      }
      .collection{
        color: #FFCE00;
      }
    }
    .header-cont {
      flex: 6;
      padding-left: 10px;
      >p{
        line-height: 50px;
        color: #ffffff;
        font-size:16px;
        span{
          font-size: 18px;
        }
      }
    }
  }
  ul{
    padding: 15px;
    margin-top: 50px;
    .title{
      color: #8c8c8c;
      margin-bottom: 15px;
    }
    li{
      padding: 10px 0;
      border-top: 1px solid #d1d1d1; /*px*/
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
