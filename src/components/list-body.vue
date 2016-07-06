<!--列表页组件-->

<template>
  <div class="list-box">
    <ul>
      <h2 class="title">{{listInfo.date | dateTime}}</h2>
      <list-comp v-for="item in listInfo.stories" :item="item"></list-comp>
    </ul>
  </div>
</template>

<script>
  import listComp from './list-comp.vue'

  /*eslint-disable no-new*/
  export default{
    props: ['listInfo'],
    components: {
      listComp
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .list-box{
    padding: 10px 5px 0 5px;
    background: #f2f2f2;
  }
  .title{
    color: #76787e;
    margin-left: 15px;
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
  }
</style>
