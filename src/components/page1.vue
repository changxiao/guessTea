<template>
  <div class="page page1">
    <div class="loading">
      <div class="progress">
        <div class="progress-bar progress-bar-warning progress-bar-striped active bar" style="width: 0;">
        </div>
      </div>
    </div>
    <div class="page1top" v-show="show">
      <img src="static/page1top.png" alt="">
    </div>
    <div class="page1bot" v-show="show">
      <img src="static/page1bot.png" alt="">
    </div>
    <div class="page1con" v-show="show">
      <div class="page1topwave">
        <img src="static/page1topwave.png" alt="">
      </div>
      <transition appear
        appear-active-class="animated tada"
      >
        <div class="page1cup">
          <img src="static/page1cup.png" alt="">
        </div>
      </transition>

      <transition appear
        appear-active-class="animated bounceOut"
      >
        <div class="page1title">
          <img src="static/page1title.png" alt="">
        </div>
      </transition>

      <div class="page1btn animated infinite tada">
        <router-link to="/2">
          <img src="static/page1btn.png" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dataOri from '@/data'
export default {
  name: 'page1',
  data () {
    return {
      show: false,
      show2: false
    }
  },
  mounted () {
    var self = this
    var imgList = [
      'static/page1top.png',
      'static/page1bot.png',
      'static/page1topwave.png',
      'static/page1cup.png',
      'static/page1title.png',
      'static/page1btn.png',
      'static/ewm.png',
      'static/page3btnagain.png',
      'static/page3btnshare.png',
      'static/img/page1bg.png',
      'static/img/page1shadow.png',
      'static/img/page2bg.png',
      'static/img/page2select.png',
      'static/img/page2titlebg.png',
      'static/img/page3border.png'
    ]
    var tempkeys = Object.keys(dataOri.namelist)
    tempkeys = tempkeys.map(function (item, idx, arr) {
      return `static/${item}.png`
    })
    imgList = imgList.concat(tempkeys)
    var timer = null
    var path = ''
    function loadResource () {
      timer = setInterval(function () {
        loadCheck()
      }, 1000)

      for (let i = 0; i < len; i++) {
        var img = new Image()
        img.src = path + imgList[i]
        img.onload = function () {
          count++
          loadCheck()
        }
        img.onerror = function () {
          count++
          loadCheck()
        }
      }
    }

    var $bar = document.querySelector('.bar')
    var $progress = document.querySelector('.loading')
    var count = 0
    var len = imgList.length

    function loadCheck () {
      var per
      per = count / len * 100
      $bar.style.width = per + '%'
      if (per === 100) {
        clearInterval(timer)
        $progress.style.display = 'none'
        self.show = true
      }
    }
    loadResource()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page1{ }
.page1::after{ content:''; width: 100%; height:100%; background: url(/static/img/page1shadow.png) 0 0 no-repeat; background-size: cover; position: absolute; left: 0; top: 0; z-index: 2;}
.page1top{ position: absolute; left: 50%; transform: translateX(-50%); width: 294rem; height: 140rem;
}
.page1bot{ position: absolute; left: 50%; bottom:0; transform: translateX(-50%); width: 560rem; height: 130rem;
}
.page1con{
  position: absolute; top: 135rem; z-index: 3;
}
.page1topwave{ width: 750rem; height:88rem;}
.page1cup{height:384rem;}
.page1title{ height: 350rem;}
.page1btn{ height: 156rem;}
.page1top img,
.page1bot img,
.page1topwave img,
.page1cup img,
.page1title img,
.page1btn img
{ display: block; width: 100%; height: 100%;}

.loading {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.loading{ z-index: 4; background-color: #fe6c55;
    background: radial-gradient(circle, #ebc630 10%, transparent 10%), radial-gradient(circle, #ebc630 10%, #f4d340 10%) 10px 10px;
    background-size: 40px 40px;
}
.progress {
     width: 500rem; height: 10px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    background: #262626;
    padding: 4rem;
    overflow: visible;
    border-radius: 20rem;
    border-top: 1px solid #000;
    border-bottom: 1px solid #7992a8;
    .progress-bar {
        float: left;
        width: 0;
        height: 100%;
        color: #fff;
        text-align: center;
        background-color: #337ab7;
        transition: width .6s ease;
    }
    .progress-bar-striped {
        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
        background-size: 40rem 40rem;
    }
    .progress-bar-warning {
        background-color: #f0ad4e;
    }
    .progress-bar {
        border-radius: 20rem;
        position: relative;
        animation: animate-positive 2s;
    }
    .progress-bar.active {
        animation: reverse progress-bar-stripes 0.5s linear infinite, animate-positive 2s;
    }
}
@keyframes progress-bar-stripes{from{background-position:40rem 0}to{background-position:0 0}}

</style>
