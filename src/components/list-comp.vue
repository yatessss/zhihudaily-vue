<!--列表页单独话题块组件-->

<template>
  <li v-link="{ path: 'detail'}" @click="setId(item.id)" class="list-detail-box">
    <div class="list-content-box">
      <p>{{item.title}}</p>
    </div>
    <div class="list-img-box">
      <img :src="item.images[0] | replaceUrl" alt="">
      <p v-if="item.multipic" class="tip">多图</p>
    </div>
  </li>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['item'],
    data () {
      return {
        id: this.item.id
      }
    },
    attached () {
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=')
      },
      setId (str) {
        window.sessionStorage.detailId = JSON.stringify(str)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .list-detail-box{
    height: 100px;
    width: 360px;
    margin: 8px auto 0 auto;
    background: #ffffff;
    padding: 13px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    border: 1px solid #eaeaea;  /*px*/
    border-bottom: 1px solid #d0d0d0; /*px*/
    .list-content-box{
      margin-right: 10px;
      flex: 1;
      >p{
        font-size: 17px;
        line-height: 1.2;
      }
    }
    .list-img-box{
      position: relative;
      width: 75px;
      height: 70px;
      >img{
        width: 75px;
        height: 70px;
      }
      .tip{
        color: #ffffff;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 10px;
        padding: 2px 4px;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
