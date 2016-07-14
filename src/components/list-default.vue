<!--首页的列表-->
<template>
  <!--轮播组件-->
  <slider :top_stories="topStories" v-cloak></slider>

  <!--列表-->
  <div class="list-box s-{{* date}}" v-for="item in allStories">
    <ul>
      <h2 class="title">{{item.date | dateTime}}</h2>
      <list-comp v-for="subItem in item.stories" :item="subItem"></list-comp>
    </ul>
  </div>
</template>

<script>
  import ajax from '../ajax'
  import slider from '../components/slider.vue'
  import listComp from './list-comp.vue'
  /*eslint-disable no-new*/
  export default{
    components: {
      slider,
      listComp
    },
    data () {
      return {
        topStories: [],
        allStories: [],
        date: '',
        loading: false,
        dateArr: [],
        titleTip: ''
      }
    },
    ready () {
      this.getLatest()
    },
    route: {
      data (transition) {
        var _this = this
        if (transition.from.name === 'detail') {
          _this.$nextTick(function () {
            window.document.body.scrollTop = window.sessionStorage.scrollTop
          })
        } else {
//          _this.getLatest()
          window.document.body.scrollTop = 0
        }
        window.addEventListener('scroll', _this.getScrollList, false)
        window.addEventListener('touchmove', _this.whatsTitle, false)
        transition.next()
      },
      deactivate (transition) {
        var _this = this
        window.removeEventListener('scroll', _this.getScrollList, false)
        window.removeEventListener('touchmove', _this.whatsTitle, false)
        window.sessionStorage.scrollTop = window.document.body.scrollTop
        transition.next()
      }
    },
    methods: {
      getLatest () {
        let _this = this
        _this.loading = true
        ajax({
//        url: 'http://news-at.zhihu.com/api/4/news/latest',
          url: 'http://api.yatessss.com:8888/news-at/api/4/news/latest',
          method: 'GET',
          callback: function (res) {
            _this.$set('topStories', res.top_stories)
            _this.$set('allStories', _this.allStories.concat(res))
            _this.$set('date', res.date)
            _this.dateArr.push(_this.date)
            _this.loading = false
          }
        })
      },
      getNews () {
        let _this = this
        _this.loading = true
        ajax({
//        url: 'http://news.at.zhihu.com/api/4/news/before/' + _this.date,
          url: 'http://api.yatessss.com:8888/news-at/api/4/news/before/' + _this.date,
          method: 'GET',
          callback: function (res) {
            _this.$set('allStories', _this.allStories.concat(res))
            _this.$set('date', res.date)
            _this.dateArr.push(_this.date)
            _this.loading = false
//          console.log(_this.allStories)
          }
        })
      },
      getScrollList () {
        var _this = this
        if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getNews()
        }
      },
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      },
      whatsTitle () {
        let dateArr = this.dateArr
        for (let i = 0, len = dateArr.length; i < len; i++) {
          let top = document.querySelector('.s-' + dateArr[i]).getBoundingClientRect().top
          if (top < 500 && top > 100) {
            this.titleTip = dateArr[i - 1]
            this.$dispatch('changeTile', this.titleTip)
          }
          if (top < 100 && top > -400) {
            this.titleTip = dateArr[i]
            this.$dispatch('changeTile', this.titleTip)
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .list-box{
    padding: 10px 5px 0 5px;
    background: #f2f2f2;
  }
  .title{
    color: #76787e;
    margin-left: 15px;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
  }
</style>
