<template>
  <div>
    <div class="photo">
      <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt="">
    </div>
    <p class="name">yatessss</p>
    <ul>
      <li><a href="https://github.com/yatessss/zhihudaily-vue">项目github地址</a></li>
      <li><a href="http://www.yatessss.com/">我的博客地址</a></li>
      <li><p>给一个star好吗</p></li>
      <li><p>(✪ω✪)</p></li>
    </ul>
    <div class="btn">
      <p>登出</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .photo{
    width: 80px;
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .name{
    width: 100px;
    margin: 0 auto 30px auto;
    padding-bottom: 2px;
    color: #999;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #4bb6ae;
  }
  ul{
    width: 150px;
    margin: 0 auto;
    font-size: 18px;
    text-align: center;
    border-top: 1px solid #b6b6b6;
    li{
      padding: 10px;
      border-bottom: 1px solid #b6b6b6;
      p{
        color: #999;
      }
      a{
        color: #2482ab;
      }
    }
  }
  .btn{
    margin: 50px auto 0 auto;
    width: 100px;
    height: 40px;
    border: 1px solid #999;
    border-radius: 10px;
    color: #b22323;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }
</style>
