<template>
  <div>
    {{detailId}}
  </div>
</template>

<script>
  import ajax from '../ajax'
  /*eslint-disable no-new*/
  export default{
    props: ['top_stories'],
    data () {
      return {
        detailId: ''
      }
    },
    ready () {

    },
    route: {
      activate: function (transition) {
        var _this = this
        _this.detailId = JSON.parse(window.sessionStorage.detailId)
        transition.next()
        _this.getDetails()
        _this.$nextTick(function () {
          window.document.body.scrollTop = 0
        })
        window.addEventListener('scroll', _this.getScrollData, false)
      },
      deactivate: function (transition) {
        var _this = this
//        _this.init()
        transition.next()
        window.removeEventListener('scroll', _this.getScrollData, false)
      }
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=')
      },
      getDetails () {
        let _this = this
        _this.loading = true
        ajax({
          url: 'http://news-at.zhihu.com/api/4/news/' + _this.detailId,
          method: 'GET',
          callback: function (res) {
//            _this.$set('topStories', res.top_stories)
//            _this.$set('date', res.date)
            _this.loading = false
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
