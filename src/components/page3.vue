<template>
  <div class="page page3">
    <div class="page3con">
      <transition-group appear
        appear-active-class="animated tada"
      >
      <p class="textsmaller" :key="1">{{ firstText }}</p>
      <p class="textsmaller" :key="2">{{ lastText }}</p>
      </transition-group>
      <div class="picwrap">
        <img src="static/ewm.png" alt="">
      </div>
    </div>
    <div class="page3btnwrap">
      <div class="btnagain">
        <router-link to="/">
          <img src="static/page3btnagain.png" alt="">
        </router-link>
      </div>
      <div class="btnshare" v-on:click="showshare=true">
        <img src="static/page3btnshare.png" alt="">
      </div>
    </div>
    <div class="sharecover" v-show="showshare" v-on:click="showshare=false">
      <img src="static/share.png" alt="">
    </div>
  </div>
</template>

<script>
import weixinApi from '@/assets/weixin'
export default {
  name: 'page3',
  props: ['passScore'],
  data () {
    return {
      score: this.passScore,
      ranktext: [
        ['除了大碗儿茶，', '你还可以尝试更多'],
        ['除了大碗儿茶，', '你还可以尝试更多'],
        ['下午茶小学生，', '多喝几种没毛病'],
        ['下午茶小学生，', '多喝几种没毛病'],
        ['下午茶国家队，', '为国争光喝不停'],
        ['下午茶专家，', '自己开店没问题']
      ],
      showshare: false
    }
  },
  created () {
    var wxShare = {
      title: 'title',
      desc: 'miaoshu',
      link: window.location.href,
      imgUrl: 'tupianurl'
    }
    weixinApi.share.init(wxShare)
  },
  computed: {
    firstText: function () {
      return this.ranktext[this.score][0]
    },
    lastText: function () {
      return this.ranktext[this.score][1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page3{ background-image: url(../../static/img/page2bg.jpg);
  .page3con{ background: url(../../static/img/page3border.png) 0 0 no-repeat; background-size: cover; padding-top: 360rem; height: 620rem; text-align: center;}
  .textbigger,.textsmaller{ color: #fff; margin: 0; line-height: 1.4;} 
  .textbigger{ font-size: 60rem; }
  .textsmaller{ font-size: 48rem; margin-top: 10rem;}
  .page3btnwrap{ padding: 20rem 0 0; text-align: center;}
  .btnagain,.btnshare{ display: inline-block; width: 300rem; height: 130rem; margin: 0 8rem; 
    img{ display: block; width: 100%; height: 100%;}
  }
  .picwrap{ text-align: center; width: 200rem; margin: 60rem auto 0; height: 228rem;
    img{ display: block; width: 100%; height: 100%;}
  }
  .sharecover{ position: absolute; left: 0; top: 0; bottom: 0; right: 0; background-color: rgba(0,0,0,0.7); 
    img{ position: absolute; width: 350rem; height: 210rem; top: 0; right: 0;}
  }
}
</style>
