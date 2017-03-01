<!--评论页-->
<template>
  <div>
    <div class="comments-header">
      <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
      <div class="header-cont"><p><span>{{extra.comments}}</span> 条点评</p></div>
      <div class="header-icon"><i class="iconfont">&#xe627</i><span>{{popularity}}</span></div>
    </div>
    <ul class="long-comments">
      <li class="long-comments-nav"><span>{{extra.long_comments}}</span> 条长评</li>
      <div v-if="extra.long_comments === 0" class="no-comments">
        <div class="no-comments-icon">
          <i class="iconfont">&#xe62a</i>
          <p>深度长评虚位以待</p>
        </div>
      </div>
      <comments-comp @click="show" v-for="item in longComments" :item="item"></comments-comp>
    </ul>
    <ul class="short-comments" id="short-comments-top">
      <li class="short-comments-nav" @click="getShortComments"><span>{{extra.short_comments}}</span> 条短评 <i class="iconfont down">&#xe628</i></li>
      <comments-comp @click="show" v-for="item in shortComments" :item="item"></comments-comp>
    </ul>

    <!--操作框-->
    <div v-if="showReply" class="mask" @click="hidden">
      <div class="reply-box" @click.stop>
        <p>赞同</p>
        <p>举报</p>
        <p>复制</p>
        <p>回复</p>
      </div>
    </div>
  </div>
</template>

<script>
  import commentsComp from '../components/comments-comp.vue'
  import ajax from '../ajax'
  /*eslint-disable no-new*/
  export default{
    components: {
      commentsComp
    },
    data () {
      return {
        longComments: [],
        shortComments: [],
        detailId: '',
        extra: {},
        showReply: false,
        loading: false,
        id: ''
      }
    },
    attached () {
    },
    route: {
      activate (transition) {
        var _this = this
        _this.detailId = window.sessionStorage.detailId
        _this.extra = JSON.parse(window.sessionStorage.extra)
        _this.getLongComments()
        _this.$nextTick(function () {
          window.document.body.scrollTop = 0
        })
        window.addEventListener('scroll', _this.getScrollData, false)
        transition.next()
      },
      deactivate (transition) {
        var _this = this
        this.shortComments = []
        this.longComments = []
        window.removeEventListener('scroll', _this.getScrollData, false)
        transition.next()
      }
    },
    methods: {
      goBack () {
        window.history.back()
      },
      getLongComments () {
        let _this = this
        _this.loading = true
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/story/' + _this.detailId + '/long-comments',
          url: 'http://api.yatessss.com:8888/news-at/api/4/story/' + _this.detailId + '/long-comments',
          method: 'GET',
          callback: function (res) {
            _this.$set('longComments', res.comments)
            _this.loading = false
          }
        })
      },
      getShortComments () {
        let _this = this
        _this.loading = true
        window.document.getElementById('short-comments-top').scrollTop = 0
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/story/' + _this.detailId + '/short-comments',
          url: 'http://api.yatessss.com:8888/news-at/api/4/story/' + _this.detailId + '/short-comments',
          method: 'GET',
          callback: function (res) {
            _this.$set('shortComments', res.comments)
            _this.$set('id', _this.shortComments[_this.shortComments.length - 1].id)
            _this.loading = false
          }
        })
      },
      getScrollData () {
        var _this = this
        if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getShortCommentsNext()
        }
      },
      getShortCommentsNext () {
        let _this = this
        _this.loading = true
        ajax({
          url: 'http://api.yatessss.com:8888/news-at/api/4/story/' + _this.detailId + '/short-comments/before/' + _this.id,
          method: 'GET',
          callback: function (res) {
            _this.$set('shortComments', _this.shortComments.concat(res.comments))
            _this.$set('id', _this.shortComments[_this.shortComments.length - 1].id)
            _this.loading = false
          }
        })
      },
      show () {
        document.body.style.overflow = 'hidden'
        this.showReply = !this.showReply
      },
      hidden () {
        document.body.style.overflow = 'auto'
        this.showReply = !this.showReply
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
    transform: translateZ(0);
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
  .long-comments{
    margin-top:  50px;
    .long-comments-nav{
      padding: 10px 10px 10px 15px;
      font-size: 13px;
      span{
        font-size: 15px;
      }
    }
    .no-comments{
      border-top: 1px solid #c3c3c3;
      height: 530px;
      .no-comments-icon{
        width: 150px;
        height: 170px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #b0b0b0;
        text-align: center;
        >i{
          font-size: 85px;
          color: #b0b0b0;
        }
        >p{
          font-size: 15px;
        }
      }
    }
  }
  .short-comments-nav{
    border-top: 1px solid #c3c3c3;
    padding: 10px 10px 10px 15px;
    font-size: 13px;
    position: relative;
    span{
      font-size: 15px;
    }
    .down{
      position: absolute;
      font-size: 15px;
      top: 10px;
      right: 15px;
      color: #b0b0b0;
    }
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
    .reply-box{
      width: 320px;
      border-radius: 3px;
      padding: 5px 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #f2f2f2;
      >p{
        font-size: 15px;
        padding: 5px 0;
      }
    }
  }
</style>

