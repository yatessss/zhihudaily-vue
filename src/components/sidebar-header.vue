<template>

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
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
