<!--列表页-->
<template>
  <div class="main-list">
    <list-header :show-sidebar.sync="showSidebar"> </list-header>
    <!--侧边栏-->
    <side-bar :show-sidebar.sync="showSidebar"> </side-bar>

    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>

    <!--轮播组件-->
    <slider :top_stories="topStories" v-cloak></slider>

    <list-body v-for="item in allStories" :list-info="item"></list-body>

    <a v-link="{ path: 'demo'}">This is demo!</a>
  </div>
</template>

<script type="text/ecmascript-6">
import ajax from '../ajax'
import slider from '../components/slider.vue'
import listBody from '../components/list-body.vue'
import sideBar from '../components/sidebar.vue'
import listHeader from '../components/list-header.vue'

/*eslint-disable no-useless-escape*/
/*eslint-disable no-new*/
export default {
  components: {
    slider,
    listBody,
    sideBar,
    listHeader
  },
  data () {
    return {
      auv: '<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"></div>\n\n\n\n</div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\">肩宽的女生该如何穿衣服修饰？</h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http://pic3.zhimg.com/1dc4b5dd6_is.jpg\">\n<span class=\"author\">葛巾，</span><span class=\"bio\">一摘使瓜好，再摘令瓜稀。 三摘尚自可，摘绝抱蔓归。</span>\n</div>\n\n<div class=\"content\">\n<p>实在不明白为什么很多答案都说肩宽的妹子不能穿一字领或露肩装&hellip;&hellip;</p>\r\n<p>而且晒出的那些照片，真心不够宽好么？</p>\r\n<p>论肩宽怎么穿衣，看摩纳哥王妃夏琳就好了，她之前是南非的奥运游泳队员，肩宽到什么程度？一般人真没法跟她比。</p>\r\n<p><img class=\"content-image\" src=\"http://pic3.zhimg.com/70/4bbee6e269f6a7a2eeb80ee88122682a_b.jpg\" alt=\"\" /></p>\r\n<p>婚前婚后当然请了王室级别的服装顾问，被好评的几件衣服恰恰都是露肩的或一字领的。</p>\r\n<p><img class=\"content-image\" src=\"http://pic4.zhimg.com/70/4aa2fb5d182e88b14a0925ede23b4783_b.jpg\" alt=\"\" /></p>\r\n<p>阿玛尼的婚纱，一字领</p>\r\n<p>被时尚杂志评为当年最佳着装的紫色礼服，露肩</p>\r\n<p><img class=\"content-image\" src=\"http://pic3.zhimg.com/70/3feb152a91de2195e99423079f182dc6_b.jpg\" alt=\"\" /></p>\r\n<p>船领也没啥问题</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/d3ade29598ca26e42acef24a050264f5_b.jpg\" alt=\"\" /></p>\r\n<p>大 V 领 ，配夸张颈饰，就没有问题</p>\r\n<p><img class=\"content-image\" src=\"http://pic1.zhimg.com/70/4395dcf1b5fa44865f1ae3fa2d0972d0_b.jpg\" alt=\"\" /></p>\r\n<p>西装领也没有问题，只要有内衬对比，而且不要扣紧。</p>\r\n<p><img class=\"content-image\" src=\"http://pic1.zhimg.com/70/4c49937df6abef911d0eea3d0f45e1e8_b.jpg\" alt=\"\" /></p>\r\n<p>当然她也不是总能穿对，同样露肩，这张就很惨。</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/97a12f31ab58921d95ba72d9949861e1_b.jpg\" alt=\"\" /></p>\r\n<p>为什么？那时候她还比较丰满，也没有腰，就算有锁骨，也显得肉呼呼。<strong>所以穿露肩时，先减肥，让身体线条清晰起来，形成漂亮的倒三角，肩宽就不会是什么问题。</strong></p>\r\n<p><img class=\"content-image\" src=\"http://pic3.zhimg.com/70/a755063566a539b4faf2c5261c3a63aa_b.jpg\" alt=\"\" /></p>\r\n<p>这张西装相对失败，因为厚垫肩增加了肩宽。而且高驳头，收腰的设计，不单让视线往宽肩膀的部分上移，也显得和腰部臃肿。对比上面那张西装图就知道，<strong>肩宽姑娘穿西装时，不要扣紧外套扣子，要散开，同时，领口位置要低。<br /><img class=\"content-image\" src=\"http://pic4.zhimg.com/70/cf78a2ee0dc8041c62a85c5caef6502b_b.jpg\" alt=\"\" /><br /></strong>宽肩真的不一定要遮，要遮就不要横遮，且肩膀设计要简单 ，上图这样就是活生生把搞成扑克牌。</p>\r\n<p>而简单的竖遮（有垂坠感），效果就要好很多。</p>\r\n<p><img class=\"content-image\" src=\"http://pic3.zhimg.com/70/8583e21e1abe5af633a9cf7f2cdefcbe_b.jpg\" alt=\"\" /></p>\r\n<p>下面这张，肩膀装饰太多，也挺灾难。</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/b2a4e298903fe74246abc69c877a8355_b.jpg\" alt=\"\" /></p>\r\n<p>深色小圆领露肩的紧身马甲式，不太是个好选择，因为视力都到了双侧浅色的膀肩上。</p>\r\n<p><img class=\"content-image\" src=\"http://pic1.zhimg.com/70/75289d29c31117309c3601c921174648_b.jpg\" alt=\"\" /></p>\r\n<p>对于这种情况，有两种修正方法。第一是加大领口，不要紧紧地贴着脖子。如下图，同样是圆领深色，加宽一点领口，就会好一点。</p>\r\n<p><img class=\"content-image\" src=\"http://pic4.zhimg.com/70/8fe9e94ce68a9b4a65b62261941e5e33_b.jpg\" alt=\"\" /></p>\r\n<p>或者换件浅色的小圆领，视线焦点也转移了</p>\r\n<p><img class=\"content-image\" src=\"http://pic1.zhimg.com/70/940167ab832b965668ca6048458bfd4c_b.jpg\" alt=\"\" /></p>\r\n<p>能不能穿大衣？当然能，但要看怎么搭配。</p>\r\n<p>象这种斗篷式的，平常人穿起来就显宽，肩宽的人再来一把，就是雪上加霜。下图就感觉是好大一座山的样子</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/7ff09fa3d2a3fa3cea2efe3aaddfca21_b.jpg\" alt=\"\" /></p>\r\n<p>但是换成深色敞开式的大衣呢？这张起的很不错，翻起的大衣领形成了一个弧度，有效的减弱了肩宽。</p>\r\n<p><img class=\"content-image\" src=\"http://pic1.zhimg.com/70/f56ed2b922b3eedb824c23a2ee19718c_b.jpg\" alt=\"\" /></p>\r\n<p>所以总结起来，肩宽的姑娘想穿好，大抵几条：</p>\r\n<p><strong>1、先减肥、瘦下来，手臂围尽量小。<br />2、露肩可以穿，但上面要松，少、不能紧，肩部不能有过多装饰。<br />3、穿有肩外套时，驳头要拉低，最好里面有低领打底和外套形成对比，外套腰部要宽松，不要紧身。<br />4、大 V 领可以穿，但要带能遮不少皮肤的颈饰。圆领可以穿，但别太贴着脖子。<br /><br /></strong></p>\r\n<p>上面举的是欧洲人的例子，其实亚洲名人常人体态中还有一个典型 ，就是日本太子妃小和田雅子。她的肩宽也是日本女性中比较明显的了，遇到高驳头西装打底又高的时候就是这么个粗壮画风。</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/f59f594cb505798a46f8e4804be3b505_b.jpg\" alt=\"\" /></p>\r\n<p>但下面这张就要好很多，为什么 ？一则是因为她年轻，二则是因为脸边的头发是膨胀的，相当于增加了头宽，有效地减小了肩脸宽试的对比，而且这衣服没垫肩。</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/3c5f0ebef1bd4fc1214ee065dcbbab99_b.jpg\" alt=\"\" /></p>\r\n<p>其实她年轻的时候，还更流行宽肩的衣服，但那时只要瘦，也不会觉得特别有问题。</p>\r\n<p><img class=\"content-image\" src=\"http://pic2.zhimg.com/70/c598f262d925c521cc044918e2bb7765_b.jpg\" alt=\"\" /></p>\r\n<p><strong>所以真心话，其实你只要身材够 FIT，大家并不在意你是不是肩很宽。相反，肩宽更多时候意味着衣架子，穿起来是很有气场，是更容易把衣裳穿美的，80 年代就爱走大宽肩路线呢，这么穿你还可以号称复古呢。只是如果你怕肩宽其实是上身壮，那想要穿好，就确实需要更多功夫了。<br /><br />另外，肩宽的人只要记得侧着拍照，其实效果就会好很多啦。</strong></p>\n</div>\n</div>\n\n\n<div class=\"view-more\"><a href=\"http://www.zhihu.com/question/20439450\">查看知乎讨论<span class=\"js-question-holder\"></span></a></div>\n\n</div>\n\n\n</div>\n</div>',
      topStories: [],
      allStories: [],
      date: '',
      loading: false,
      showSidebar: false
    }
  },
  computed: {
  },
  created () {

  },
  ready () {
    this.getLatest()
  },
  attached () {
  },
  route: {
    data (transition) {
      var _this = this
      _this.is_activate = true
      _this.$nextTick(function () {
        window.document.body.scrollTop = window.sessionStorage.scrollTop
      })
      window.addEventListener('scroll', _this.getScrollData, false)
      transition.next()
    },
    deactivate (transition) {
      var _this = this
      window.removeEventListener('scroll', _this.getScrollData, false)
      window.sessionStorage.scrollTop = window.document.body.scrollTop
      transition.next()
    }
  },
  methods: {
    getLatest () {
      let _this = this
      _this.loading = true
      ajax({
//        url: 'http://news-at.zhihu.com/api/4/news/latest',
        url: 'http://112.74.217.65:8888/news-at/api/4/news/latest',
        method: 'GET',
        callback: function (res) {
          _this.$set('topStories', res.top_stories)
          _this.allStories.push(res)
          _this.$set('date', res.date)
          _this.loading = false
//          console.log(_this.allStories)
        }
      })
    },
    getNews () {
      let _this = this
      _this.loading = true
      ajax({
//        url: 'http://news.at.zhihu.com/api/4/news/before/' + _this.date,
        url: 'http://112.74.217.65:8888/news-before/api/4/news/before/' + _this.date,
        method: 'GET',
        callback: function (res) {
          _this.allStories.push(res)
          _this.$set('date', res.date)
          _this.loading = false
//          console.log(_this.allStories)
        }
      })
    },
    getScrollData () {
      var _this = this
      if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
        _this.getNews()
      }
    },
    replace (str) {
      return str.replace(/http\w{0,1}:\/\/pic/g, 'https://images.weserv.nl/?url=pic')
    },
    showBar () {
      window.document.body.style.overflow = 'hidden'
      window.document.querySelector('html').style.overflow = 'hidden'
      this.showSidebar = !this.showSidebar
    },
    hiddenBar () {
      window.document.body.style.overflow = 'auto'
      window.document.querySelector('html').style.overflow = 'auto'
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  /*@import "../assets/css/swiper-3.3.1.min.css";*/
  @import "../assets/css/reset";
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/font_1467357626_5109937.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/font_1467357626_5109937.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/font_1467357626_5109937.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_1467357626_5109937.svg#iconfont') format('svg'); /* iOS 4.1- */
  }

  .main-list{
    margin-top: 50px;
  }

  .sidebar-mask{
    /*width: 357px;*/
    /*height: 667px;*/
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0, 0, 0, 0.7);
  }
  .list{
    background: #efefef;
  }

  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    height: 100%;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }



</style>
