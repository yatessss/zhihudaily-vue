<template>
  <div class="swiper-container swiper-container-vertical swiper-container-free-mode">
    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, -26.8382px, 0px);">
      <div class="swiper-slide swiper-slide-active">
        <div id="header">
          <a v-link="{ path: '/'}">This is bar!</a> <br/>
        </div>
        <h4>绝顶聪明</h4>
        <p style="font-family:microsoft yahei; line-height:1.8;">一天下午，我同学在建设银行十分无聊的上班，一个穿得很糟糕的女士(神经病患者)来到他窗口，给了他一张纸条要提款。&nbsp;<br><br>
          纸条上赫然写着&nbsp;<br><br>
          '兹派XX同志于贵银行处提取人民币'.&nbsp;<br>
          然后是l后面N多个零元。&nbsp;<br>
          落款是***C.P中央办公厅***。&nbsp;<br><br>
          我同学本来想报警,可看该神经病患者女子很认真的样子,想想还是打发给保安算鸟.(~估计保安也是很闲).&nbsp;<br>
          果然,保安对该女子说:'你这张条子想要提款,必须先到对面派出所,找所长盖一个章，他盖完章,你再来取钱就没问题啦。'&nbsp;<br>
          该女子想都没想，直接就向派出所走去了。(这保安还真不一般,平时有点小看他了).&nbsp;<br><br>
          大概十多分钟，排队的顾客慢慢多起来的时候，那个女子兴高采烈的回来了，举着那个条子，说：'人家说啦，办公程序简化了，不用所长批条直接就可以取钱啦。'&nbsp;<br><br>
          我这个同学一听到这就不住的感叹:pol.ice队伍里真有高人，一句'高调'就给打发回来了。&nbsp;<br><br>
          我这个同学和保安当时就有点傻了，营业大厅有很多人都在，怕她精神病发作起来影响正常的秩序，只好把值班主管找来了。&nbsp;<br><br>
          主管和女患者在一边聊了几句，问你取钱做什么用呀,女患者说:'取钱买面包,蛋糕,吃的,买穿的'主管指了指不远处的地方，该女子就又高高兴兴地走了。&nbsp;<br>
          保安去请教'高招',主管当时是这样对女患者说的: '我们这里是建行,只有建房子才能到这里取钱。你取钱买吃的,那肯定是粮食了,要去农行,买穿的等东西,取钱要到工商银行才行！'&nbsp;<br>
          我同学打心眼里佩服呀,到底是当主管的啊!!!!&nbsp;<br><br>
          …………&nbsp;<br>
          …………&nbsp;<br>
          过了一会儿,该女士又回来了.而且带来了工行的回答:'农行的人说了,这里是农行,只有农民能取钱,我是城市人口,工行的人说了,我们这里是公行,只能公的来取,母的不行!!!!,说我是贱人,要到建行取钱'&nbsp;</p>
      </div>
    </div>
    <!-- Add Scroll Bar -->
    <div class="swiper-scrollbar" style="opacity: 0; transition-duration: 400ms;"><div class="swiper-scrollbar-drag" style="height: 145.59px; transition-duration: 0ms; transform: translate3d(0px, 9.76842px, 0px);"></div></div>
  </div>
</template>
<style>
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    margin: 50px auto;
    width: 100%;
    height: 1000px;
  }
  .swiper-slide {
    font-size: 30px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  #header {
    width: 100%;
    height: 100px;
    background: green;
  }
</style>
<script>
  /* eslint-disable no-new */
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    ready () {
      new window.Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
      })
    },
    components: {
    }
  }
</script>


