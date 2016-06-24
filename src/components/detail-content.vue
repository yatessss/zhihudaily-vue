<template>
  <div class="detail-content" v-html="auv | replaceUrl"></div>
</template>

<script>
  /*eslint-disable no-new*/
  export default{
    props: ['top_stories'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    attached () {
    },
    methods: {
      replace (str) {
        return str.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
