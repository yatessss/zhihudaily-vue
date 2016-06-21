<template>
  <div>
    <div class="header">
      这里是header
    </div>
    <div class="slider">
      这里是轮播
    </div>
    <div class="list" v-html="auv">
    </div>
    <a v-link="{ path: 'foo'}">This is foo!</a><br/>
    <a v-link="{ path: 'bar'}">This is bar!</a> <br/>
    <a v-link="{ path: 'demo'}">This is demo!</a>
  </div>
</template>

<script>
import Hello from './Hello'
/*eslint-disable no-useless-escape*/
export default {
  data () {
    return {
      auv: '<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"></div>\n\n\n\n</div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\"></h2>\n\n<div class=\"answer\">\n\n<div class=\"content\">\n<p style=\"text-align: center;\">* * *</p>\r\n<p style=\"text-align: center;\"><em>「筑得起人应该接受都有日倒下</em></p>\r\n<p style=\"text-align: center;\"><em>其实没有一种安稳快乐永远也不差」</em></p>\r\n<p style=\"text-align: center;\">* * *</p>\n</div>\n</div>\n\n\n</div>\n\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\"></h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http://pic1.zhimg.com/da8e974dc_is.jpg\">\n<span class=\"author\">匿名用户</span>\n</div>\n\n<div class=\"content\">\n<p>我出生在一个小县城。爷爷这辈是县里的领导，在小县城也勉强算是名门。不知道可敬还是可惜，我爷爷为官清廉，患病去世之后，没留下分文遗产，也没有给任何子女开后门。那时候我爸已经到了西南某个省会谋求机会，我当时大概四岁左右。接下来是长达七八年艰苦的岁月。那个时候几乎一周吃不上一回肉，很多时候一顿饭就是一个馒头加点泡菜。我现在身高勉强 170 出头，想来多半也是因为那些年营养跟不上的原因。基本上那时候应该属于省会城市里最底层收入的人群。这种情况一直持续到我初中。那几年国家的经济因为地产业飞速发展，我爸的工作开始有了些起色，开了个不大不小的公司。我的成绩也很好，很轻易地考上了全市最好的几所高中之一。</p>\r\n<p>本来以为应该可以比较安稳的生活了。可是高中因为父母管教太严，自己的心态也有些变化，加之家里发生了一些事，导致我高中完全没有学习的兴趣，最后勉强只上了二本分数线。父母因为从穷困到富裕，所以很在乎面子，完全不能接受我只能勉强读个二本，甚至三本，于是强行要求我出国。英语差到没底的我根本没有出国的打算，但是因为父母的期盼，还有自己幡然醒悟之后的一点野心，认真学了几个月的英语，因为自己比较聪明，提升也还蛮大，最后到了一个排名中上，中国人很少的美国大学，也交了一个很好的女朋友。</p>\r\n<p>以为终于可以很平顺的继续下去了。可惜有些时候总会遇到人生给你开的玩笑。就在我看起来很幸福的时候，我爸的公司出问题了。因为 08 年金融危机，很多产业产能过剩。我爸恰好接了一单某个现在已经倒闭的工厂的工程，然后几千万工程款收不到，欠了一大堆材料和人工费。接下来是在某地修路，该县政府出现了一些状况，又有近千万工程款收不回来。屋漏偏逢连夜雨，在资金运转已经相当紧张的时候，银行开始抽贷，终于公司破产。几乎把能卖的东西都卖了，还欠了亲戚朋友一屁股债。我爸给我打电话说家里破产，可能负担不起我学费的时候，我回想起小时候穷困潦倒时的记忆，感觉要崩溃了。真心感谢我的顾问老师，我当时的成绩申请全额奖学金有点勉强，但是他帮我推荐了一下，最后除了拿了一份普通奖学金还很幸运地当了助教。从和几个朋友合租的别墅搬到了和美国人合租的公寓，然后自己剩余时间再打点黑工加上父母寄的剩余的钱，勉强也够我接下来几个学期的开销。</p>\r\n<p>我以为可以这样坚持到毕业的时候，又特么出问题了。女朋友大概因为我忙着打工学习忽略了她，然后提出了分手。我颓废了整整一周。我爸情绪很差，破产后不到一年的时间里突然大病一场。亲戚朋友的钱早就在破产的时候借过一遍了，我妈实在没办法了打电话给我。我没有选择，卖掉了车，把积蓄全部拿了出来，又向一个好朋友借了 5000 美元，凑了 15000 美元，寄了回去。当时我身上的现金加银行的存款不到三百刀，甚至连回国的机票都凑不出来。但是因为我学分修得还比较快，只剩下一学期就能毕业，这时候放弃我真的不甘心。我决定继续留下来熬过最后一学期。</p>\r\n<p>因为最后一学期修了七门课，几乎没有时间打工。我把能卖到东西都卖了，电脑卖了，多余的衣服我摆到公寓的走廊，让他们随便留点钱就可以拿走，甚至连德仪的计算器我也卖了。这些钱加起来只够了一个月的房租加饭钱。我每天只吃两顿，基本就是白米饭或者白粥加白灼生菜再加点酱油老干妈什么的。肉全靠买点快过期的猪肉糜提前炒好冻冰箱。就这样我在第二个月已经不够钱交房租了。我很不要脸的欠房租又多住了一个半月，最后被美国室友和房东赶了出去。这个时候已经是 11 月中旬了，还有大概 20 天的样子就期末考试了。我不好意思麻烦朋友，拖着行李，周中睡图书馆，周末睡商场的厕所，睡麦当劳，又熬过两周。最后还是被一个朋友知道了，帮我交了一份房租，和他合住到期末考完。然后他又借钱给我买了回国的机票。</p>\r\n<p>回国之后到现在终于再没有什么波折了，和路人（现在是我大哥）闲聊历史文学居然很幸运的得到一个实习的机会，然后留了下来。干了两年又回到国内，目前也算是生活安稳，事业勉强小成。父母也从破产的阴影中走了出来，凑了笔钱开了家很小的饭店，算是重新创业，欠亲戚朋友的债也在慢慢地还。</p>\r\n<p>絮絮叨叨写了一大堆，我几乎从没向外人谈过这些连三流电视剧也不敢编的故事，甚至连父母对我美国几年的经历也知之不详。这个算是写给一个身处逆境的朋友看。生活中真的没有过不去的坎，好几次当时我真的感觉很无力很绝望很想放弃甚至想过干脆一死了之，现在回想起来已经没有那些负面情绪，只剩下一些云淡风清。真的不要轻言放弃，也许再坚持一下就可以得见花开。也送给诸君共勉吧。</p>\r\n<p>于乙未年七月深夜</p>\n</div>\n</div>\n\n\n<div class=\"view-more\"><a href=\"http://www.zhihu.com/question/30168227\">查看知乎讨论<span class=\"js-question-holder\"></span></a></div>\n\n</div>\n\n\n</div>\n</div>'
    }
  },
  components: {
    Hello
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../assets/css/swiper-3.3.1.min.css";
  @import "../assets/css/reset";
  @import "../assets/css/zhihu_news_detail.css";

  .header{
    height: 75px;
    background: #27B4FB;
  }
  .slider{
    height: 400px;
    background: #b8dcff;
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
    /*max-width: 600px;*/
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
    font-size: 30px;
  }
</style>
