// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* // 默认分享内容
window.wxShare = {
  title: "两分钟鉴别真假土豪",
  desc: "你去做多少个国家？见过多少个国家的货币？是不是真土豪，两分钟时间立见分晓。",
  link: window.location.href,
  imgUrl: "http://m.xhwhouse.com/special/GuessMoney/images/WechatIMG7.jpeg"
} */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate: function () {
    function fnResize (pixal) {
      var docWidth = pixal || document.documentElement.clientWidth
      var body = document.getElementsByTagName('html')[0]
      body.style.fontSize = docWidth / 750 + 'px'
    }
    fnResize()
  }
})
