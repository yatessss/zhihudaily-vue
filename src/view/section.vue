<!--专栏具体消息页面-->
<template>
  <div>
    <!--头部-->
    <div class="comments-header">
      <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
      <div class="header-cont"><p>{{name}}</p></div>
    </div>

    <ul class="list">
      <list-comp v-for="item in stories" :item="item"> </list-comp>
    </ul>
  </div>
</template>

<script>
  import ajax from '../ajax'
  import listComp from '../components/list-comp.vue'
  /*eslint-disable no-new*/
  export default{
    components: {
      listComp
    },
    data () {
      return {
        stories: [],
        timestamp: '',
        name: ''
      }
    },
    ready () {
      this.getLatest()
    },
    route: {
      data (transition) {
        var _this = this
        _this.$nextTick(function () {
          window.document.body.scrollTop = window.sessionStorage.sectionScrollTop
        })
        window.addEventListener('scroll', _this.getScrollData, false)
        transition.next()
      },
      deactivate (transition) {
        var _this = this
        window.removeEventListener('scroll', _this.getScrollData, false)
        window.sessionStorage.sectionScrollTop = window.document.body.scrollTop
        transition.next()
      }
    },
    methods: {
      goBack () {
        window.history.back()
      },
      getLatest () {
        let _this = this
        _this.loading = true
        ajax({
          url: 'http://api.yatessss.com:8888/news-at/api/3/section/34',
          method: 'GET',
          callback: function (res) {
            _this.stories.concat(res.stories)
            console.log(res.stories)
            _this.$set('stories', res.stories)
            _this.$set('timestamp', res.timestamp)
            _this.$set('name', res.name)
            _this.loading = false
            console.log(_this.stories)
          }
        })
      },
      getScrollData () {
        var _this = this
        if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getSection()
        }
      },
      getSection () {
        let _this = this
        _this.loading = true
        ajax({
          url: 'http://api.yatessss.com:8888/news-at/api/4/section/34/before/' + _this.timestamp,
          method: 'GET',
          callback: function (res) {
            _this.$set('stories', _this.stories.concat(res.stories))
            _this.$set('timestamp', res.timestamp)
            _this.loading = false
            console.log(_this.stories)
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
    margin-right: 3px;
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
  .list{
    margin-top: 50px;
    padding: 1px 5px 0 5px;
    background: #f2f2f2;
  }
</style>
