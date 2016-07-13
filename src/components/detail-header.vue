<template>
  <div class="list-header">
    <div class="header-icon" @click="goBack"><i class="iconfont">&#xe603</i></div>
    <div class="header-cont"></div>
    <div class="header-icon" @click="share"><i class="iconfont">&#xe61f</i></div>
    <div class="header-icon" @click="showCollection"><i :class="{'collection': collection}" class="iconfont">&#xe604</i></div>
    <div class="header-icon" v-link="{ path: '/comments'}"><i class="iconfont">&#xe606</i><span>{{comments}}</span></div>
    <div class="header-icon"><i class="iconfont">&#xe611</i><span>{{popularity | toK}}</span></div>
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
    transform: translateZ(0);
    top: 0;
    z-index: 4;
    height: 50px;
    width: 100%;
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
