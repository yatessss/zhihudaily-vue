<template>
  <header-component/>
  <div>this is template body</div>
  <other-component/>
</template>
<style>
  body{
    background-color:#ff0000;
  }
</style>
<script>
  import HeaderComponent from './components/header.vue'
  import OtherComponent from './components/other.vue'
  export default{
    data(){
      return{
        msg:'hello vue'
      }
    },
    components:{
      'other-component':OtherComponent,
      HeaderComponent,
    }
  }
</script>
