<!--评论列表单元-->
<template>
  <li class="comment-li">
    <div class="img-box">
      <img :src="item.avatar | replaceUrl" alt="">
    </div>
    <div class="comment-content">
      <div class="content-header">
        <div class="author">
          {{item.author}}
        </div>
        <div class="likes">
          <i class="iconfont">&#xe611</i> {{item.likes}}
        </div>
      </div>
      <div class="content-main">
        <p>{{item.content}}</p>
        <p class="reply" v-if="item.reply_to">
          //{{item.reply_to.author}}:
          <span> {{item.reply_to.content}}</span>
        </p>
      </div>
      <div class="content-time">
        {{item.time | formatTime "MM-dd hh:mm"}}
      </div>
    </div>
  </li>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['item'],
    data () {
      return {
      }
    },
    attached () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family:"iconfont";
    font-size: 12px;
    font-style:normal;
    color: #b0b0b0;
  }
  .comment-li{
    border-top: 1px solid #c3c3c3;
    padding: 10px 15px 10px 55px;
    position: relative;
    .img-box{
      position: absolute;
      top: 12px;
      left: 15px;
      img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }
    .comment-content{
      display: flex;
      flex-direction: column;
      .content-header{
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        .author{
          flex: 1;
          font-size: 15px;
          font-weight: bold;
        }
        .likes{
          color: #b0b0b0;
          font-size: 12px;
        }
      }
      .content-main{
        padding-right: 15px;
        font-size: 14px;
        margin-bottom: 10px;
        .reply{
          font-size: 15px;
          font-weight: bold;
          >span{
            font-weight: normal;
            font-size: 14px;
            color: #8c8c8c;
          }
        }
      }
      .content-time{
        color: #b0b0b0;
        font-size: 13px;
      }
    }
  }
</style>
