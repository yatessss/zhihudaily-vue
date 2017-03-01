<!--详情页-->
<template>
  <div>
    <!--详情页头部-->
    <detail-header :popularity="extra.popularity" :comments="extra.comments" :show-share.sync="showShare"></detail-header>

    <div class="detail-main-box">
      <div v-if="image" class="detail-img-box margin-top" :style="{ backgroundImage: 'url(' + replace(image) + ')' }">
        <div class="detail-mask"></div>
        <h1 class="detail-title">{{title}}</h1>
        <p class="detail-image-source">{{imageSource}}</p>
      </div>

      <!--推荐者部分-->
      <div v-link="{path: '/recommenders' }" v-if="recommenders.length > 0" class="recommenders-box">
        <p>推荐者</p>
        <div class="recommenders-item" v-for="item in recommenders">
          <img :src="item.avatar | replaceUrl"  alt="">
        </div>
      </div>

      <!--如果有body字段显示body,否则显示iframe加载外部链接-->
      <detail-content v-if="body" :content="body"> </detail-content>
      <iframe v-else :src="shareUrl" frameborder="0">您的浏览器不支持iframe</iframe>

      <div v-if="section.name" class="section-box" v-link="{path: '/section'}">
        <div class="section-btn">
          <img :src="thumbnail | replaceUrl" alt="">
          <p>本文来自: {{section.name}} · 合集</p>
          <div class="arrow"></div>
        </div>
      </div>
    </div>

    <!--分享部分-->
    <div v-if="showShare" class="mask" @click="hiddenShare">
      <div class="share-box" @click.stop>
        <p class="share-title">分享</p>
        <div class="share-content">
          <div class="child"><div class="icon color-red"><i class="iconfont">&#xe624</i></div><p>新浪微博</p></div>
          <div class="child"><div class="icon color-green-1"><i class="iconfont">&#xe626</i></div><p>微信</p></div>
          <div class="child"><div class="icon color-green-2"><i class="iconfont">&#xe622</i></div><p>微信朋友圈</p></div>
          <div class="child"><div class="icon color-yellow"><i class="iconfont">&#xe621</i></div><p>QQ空间</p></div>
          <div class="child"><div class="icon color-blue-1"><i class="iconfont">&#xe625</i></div><p>推特</p></div>
          <div class="child"><div class="icon color-blue-2"><i class="iconfont">&#xe623</i></div><p>QQ</p></div>
          <div class="child"><div class="icon color-green-3"><i class="iconfont">&#xe620</i></div><p>豆瓣</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ajax from '../ajax'
  import detailContent from '../components/detail-content.vue'
  import detailHeader from '../components/detail-header.vue'

  /*eslint-disable no-new*/
  export default{
    components: {
      detailContent,
      detailHeader
    },
    data () {
      return {
        body: '',
        image: '',
        title: '',
        imageSource: '',
        section: {},
        thumbnail: '',
        extra: {},
        showShare: false,
        recommenders: [],
        shareUrl: ''
      }
    },
    ready () {

    },
    route: {
      activate (transition) {
        var _this = this
        if (transition.from.path === '/') {
          window.sessionStorage.sectionScrollTop = 0
          window.sessionStorage.ifSectionReq = true
        } else {
          window.sessionStorage.ifSectionReq = false
        }
        _this.getDetails()
        _this.getExtra()
        _this.$nextTick(function () {
          window.document.body.scrollTop = 0
        })
        transition.next()
      },
      deactivate (transition) {
        let _this = this
//        初始化数据
//        把下个页面需要的值存入session
        window.sessionStorage.detailId = _this.$route.params.id
        window.sessionStorage.extra = JSON.stringify(_this.extra)
        window.sessionStorage.sectionId = JSON.stringify(_this.section.id)
        _this.init()
        transition.next()
      }
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      },
      getDetails () {
        let _this = this
        _this.loading = true
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/news/' + _this.$route.params.id,
          url: 'http://api.yatessss.com:8888/news-at/api/4/news/' + _this.$route.params.id,
          method: 'GET',
          callback: function (res) {
            _this.$set('body', res.body)
            _this.$set('image', res.image)
            _this.$set('title', res.title)
            _this.$set('imageSource', res.image_source)
            if (res.recommenders) {
              _this.$set('recommenders', res.recommenders)
            }
            if (res.section) {
              _this.$set('section', res.section)
              _this.$set('thumbnail', res.section.thumbnail)
            }
            if (!res.body) {
              _this.$set('shareUrl', res.share_url)
            }
            _this.loading = false
          }
        })
      },
      init () {
        let _this = this
        _this.body = ''
        _this.image = ''
        _this.title = ''
        _this.imageSource = ''
        _this.section = ''
        _this.thumbnail = ''
        _this.extra = {
          popularity: '···',
          comments: '···'
        }
        _this.recommenders = []
        _this.replaceUrl = ''
      },
      getExtra () {
        let _this = this
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/story-extra/' + _this.$route.params.id,
          url: 'http://api.yatessss.com:8888/news-at/api/4/story-extra/' + _this.$route.params.id,
          method: 'GET',
          callback: function (res) {
            _this.$set('extra', res)
          }
        })
      },
      hiddenShare () {
        document.body.style.overflow = 'initial'
        this.showShare = !this.showShare
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family:"iconfont";
    font-size: 30px;
    font-style: normal;
    font-weight: 100;
    color: #ffffff;
  }
  .color-red{
    background: #ED4016;
  }
  .color-blue-1{
    background: #2EA2EB;
  }
  .color-blue-2{
    background: #2269C5;
  }
  .color-green-1{
    background: #5FC74A;
  }
  .color-green-2{
    background: #71CE25;
  }
  .color-green-3{
    background: #228A31;
  }
  .color-yellow{
    background: #FFCE00;
  }

  .detail-main-box{
    padding-top: 50px;
  }

  iframe{
    width: 100%;
    height: 600px;
  }
  .mask{
    position: fixed;
    transform: translateZ(0);
    top: 0;
    left: 0;
    width: 375px;
    height: 667px;
    background: rgba(0,0,0,0.7);
    z-index: 5;
    .share-box{
      width: 330px;
      height: 330px;
      border-radius: 3px;
      padding: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #f2f2f2;
      .share-title{
        font-size: 18px;
      }
      .share-content{
        height: 260px;
        width: 290px;
        display: flex;
        flex-wrap: wrap;
        .child{
          flex: 0 0 33.33%;
          .icon{
            width: 50px;
            height: 50px;
            margin: 5px auto;
            border-radius: 50%;
            position: relative;
            text-align: center;
            i{
              line-height: 50px;
            }
          }
          >p{
            color: #242424;
            text-align: center;
            font-size: 13px;
          }
        }
      }
    }
  }
  .detail-img-box{
    position: relative;
    z-index: 0;
    height: 200px;
    width: 100%;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    .detail-mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
      background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
    }
    .detail-title{
      position: absolute;
      bottom: 23px;
      line-height: 1.2;
      left: 0;
      padding: 0 18px;
      font-weight: 300;
      font-size: 21px;
      color: #ffffff;
    }
    .detail-image-source{
      position: absolute;
      bottom: 8px;
      right: 0;
      padding: 0 18px;
      font-weight: 300;
      font-size: 12px;
      color: #d3d3d3;
    }
  }
  .section-box{
    padding: 0 20px 25px 20px;
    width: 375px;
    .section-btn{
      background: #f0f0f0;
      width: 335px;
      height: 50px;
      position: relative;
      display: flex;
      flex-direction: row;
      >img{
        width: 50px;
        height: 50px;
      }
      >p{
        flex: 1;
        line-height: 50px;
        margin-left: 10px;
        font-size: 13px;
      }
      .arrow{
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 20px;
        right: 15px;
        border: solid #867e7a;
        border-width: 1px 1px 0 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  .recommenders-box{
    background: #efefef;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 70px;
    p{
      position: absolute;
      top: 13px;
      left: 20px;
      font-size: 13px;
      font-weight: bold;
    }
    .recommenders-item{
      height: 30px;
      width: 30px;
      margin: 7px;
      >img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }
  }
</style>
