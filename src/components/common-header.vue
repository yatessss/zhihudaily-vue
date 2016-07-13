<!--评论页推荐页等通用头部-->
<template>
  <div class="common-header">
    <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
    <div class="header-cont"><p>{{title}}</p></div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['title'],
    data () {
      return {
      }
    },
    attached () {
    },
    methods: {
      goBack () {
        window.history.back()
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
  .common-header{
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
</style>
