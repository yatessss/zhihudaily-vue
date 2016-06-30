<template>
  <div class="list-header">
    <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
    <div class="header-cont"></div>
    <div class="header-icon" @click="share"><i class="iconfont">&#xe61f</i></div>
    <div class="header-icon" @click="showCollection"><i :class="{'collection': collection}" class="iconfont">&#xe604</i></div>
    <div class="header-icon"><i class="iconfont">&#xe606</i><span>{{comments}}</span></div>
    <div class="header-icon"><i class="iconfont">&#xe609</i><span>{{popularity}}</span></div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['popularity', 'comments', 'showShare'],
    data () {
      return {
        collection: false
      }
    },
    ready () {
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
      },
      goBack () {
        window.history.back()
      },
      share () {
        document.body.style.overflow = 'hidden'
        this.showShare = !this.showShare
      },
      showCollection () {
        this.collection = !this.collection
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

  .list-header{
    position: fixed;
    top: 0;
    z-index: 4;
    height: 50px;
    width: 375px;
    background: #00A2EA;
    display: flex;
    flex-direction: row;
    padding-right: 10px;
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
      flex: 2;
      padding-left: 10px;
      >p{
        line-height: 50px;
        color: #ffffff;
        font-size:16px;
      }
    }
  }
</style>
