<template>
  <div class="list-header">
    <div class="header-icon" @click="showBar"><i class="iconfont">&#xe612</i></div>
    <div class="header-cont"><p>首页</p></div>
    <div class="header-icon"><i class="iconfont">&#xe610</i></div>
    <div class="header-icon"><i class="iconfont">&#xe619</i></div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['showSidebar'],
    data () {
      return {
      }
    },
    attached () {
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
      },
      showBar () {
        document.body.style.overflow = 'hidden'
        this.showSidebar = !this.showSidebar
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .iconfont {
    font-family:"iconfont";
    font-size:19px;
    font-style:normal;
    color: #ffffff;
  }

  .list-header{
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
    }
    .header-cont {
      flex: 6;
      padding-left: 10px;
      >p{
        line-height: 50px;
        color: #ffffff;
        font-size:16px;
      }
    }
  }
</style>
