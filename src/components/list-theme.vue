<!--主题日报的列表-->
<template>
  <!--图片-->
  <div class="detail-img-box margin-top" :style="{ backgroundImage: 'url(' + replace(background) + ')' }">
    <div class="detail-mask"></div>
    <h1 class="detail-title">{{description}}</h1>
    <p class="detail-image-source">{{imageSource}}</p>
  </div>
  <!--主编-->
  <div v-link="{path: '/editors' }" v-if="editors.length > 0" class="editors-box">
    <p>主编</p>
    <div class="editors-item" v-for="item in editors">
      <img :src="item.avatar | replaceUrl" alt="">
    </div>
  </div>
  <!--列表-->
  <div class="list-box">
    <ul>
      <list-comp v-for="item in allStories" :item="item"></list-comp>
    </ul>
  </div>

</template>

<script>
  import ajax from '../ajax'
  import listComp from './list-comp.vue'
  /*eslint-disable no-new*/
  export default{
    components: {
      listComp
    },
    data () {
      return {
        editors: [],
        allStories: [],
        loading: false,
        background: '',
        description: '',
        name: '',
        image_source: '',
        id: ''
      }
    },
    ready () {
      this.getTheme()
    },
    route: {
      data (transition) {
        var _this = this
//        判断从哪里来,如果是详情页就不重新请求,并返回上次列表位置
        if (transition.from.name === 'detail') {
          _this.$nextTick(function () {
            window.document.body.scrollTop = window.sessionStorage.scrollTop
          })
        } else {
          _this.getTheme()
          window.document.body.scrollTop = 0
        }
        window.addEventListener('scroll', _this.getScrollTheme, false)
        transition.next()
      },
      deactivate (transition) {
        var _this = this
        window.removeEventListener('scroll', _this.getScrollTheme, false)
        window.sessionStorage.scrollTop = window.document.body.scrollTop
        window.sessionStorage.editors = JSON.stringify(_this.editors)
        transition.next()
      }
    },
    methods: {
      getTheme () {
        let _this = this
        _this.loading = true
        ajax({
//        url: 'http://news-at.zhihu.com/api/4/news/latest',
          url: 'http://api.yatessss.com:8888/news-at/api/4/theme/' + _this.$route.params.id,
          method: 'GET',
          callback: function (res) {
            _this.$set('allStories', res.stories)
            _this.$set('background', res.background)
            _this.$set('editors', res.editors)
            _this.$set('description', res.description)
            _this.$set('name', res.name)
            _this.$set('image_source', res.image_source)
            _this.$set('id', _this.allStories[_this.allStories.length - 1].id)
            _this.loading = false
          }
        })
      },
      getThemeBefore () {
        let _this = this
        _this.loading = true
        ajax({
//        url: 'http://news.at.zhihu.com/api/4/news/before/' + _this.date,
          url: 'http://api.yatessss.com:8888/news-at/api/4/theme/' + _this.$route.params.id + '/before/' + _this.id,
          method: 'GET',
          callback: function (res) {
            _this.$set('allStories', _this.allStories.concat(res.stories))
            _this.$set('id', _this.allStories[_this.allStories.length - 1].id)
            _this.loading = false
          }
        })
      },
      getScrollTheme () {
        var _this = this
        if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getThemeBefore()
        }
      },
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .margin-top{
    margin-top: 50px;
  }
  .detail-img-box{
    position: relative;
    z-index: 0;
    height: 230px;
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
  .list-box{
    padding: 1px 5px 0 5px;
    background: #f2f2f2;
  }
  .editors-box{
    background: #efefef;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 50px;
    p{
      position: absolute;
      top: 13px;
      left: 15px;
      font-size: 13px;
      font-weight: bold;
    }
    .editors-item{
      height: 30px;
      width: 30px;
      margin: 7px 7px 0 7px;
      >img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }
  }
</style>
