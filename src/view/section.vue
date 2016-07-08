<!--专栏消息列表页面-->
<template>
  <div>
    <!--头部-->
    <common-header :title="name"></common-header>

    <ul class="list">
      <list-comp v-for="item in stories" :item="item"> </list-comp>
    </ul>
  </div>
</template>

<script>
  import ajax from '../ajax'
  import listComp from '../components/list-comp.vue'
  import commonHeader from '../components/common-header.vue'
  /*eslint-disable no-new*/
  export default{
    components: {
      listComp,
      commonHeader
    },
    data () {
      return {
        stories: [],
        timestamp: '',
        name: '',
        sectionId: ''
      }
    },
//    ready () {
//      this.getLatest()
//    },
    route: {
      data (transition) {
        var _this = this
        _this.sectionId = window.sessionStorage.sectionId
        if (window.sessionStorage.ifSectionReq === 'true') {
          _this.getLatest()
        }
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
      getLatest () {
        let _this = this
        _this.loading = true
        ajax({
          url: 'http://api.yatessss.com:8888/news-at/api/3/section/' + _this.sectionId,
          method: 'GET',
          callback: function (res) {
            _this.stories.concat(res.stories)
            _this.$set('stories', res.stories)
            _this.$set('timestamp', res.timestamp)
            _this.$set('name', res.name)
            _this.loading = false
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
          url: 'http://api.yatessss.com:8888/news-at/api/4/section/' + _this.sectionId + '/before/' + _this.timestamp,
          method: 'GET',
          callback: function (res) {
            _this.$set('stories', _this.stories.concat(res.stories))
            _this.$set('timestamp', res.timestamp)
            _this.loading = false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .list{
    margin-top: 50px;
    padding: 1px 5px 0 5px;
    background: #f2f2f2;
  }
</style>
