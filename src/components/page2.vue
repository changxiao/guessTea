<template>
  <div class="page page2">
    <!-- <div class="page2ques"> -->

    <transition-group appear
      appear-active-class="animated zoomIn" tag="div" class="page2ques" v-if="show2"
    >
      <div v-for="(item, index) in datalist[no].material" class="fore" v-bind:class="'fore' + index" v-bind:key="item">
        <img v-bind:src="'static/' + item + '.png'" alt="">
        <p class="materialname">{{ showName(item) }}</p>
      </div>
    </transition-group>
    <!-- </div> -->
    <div class="page2ans">
      <transition-group  appear
          appear-active-class="animated flip" tag="ul" class="clearfix"
        >
        <li v-for="(item, index) in tempQuesArray" v-bind:key="item">
          <div class="picw" v-on:click="ans(item.teapic)">
            <img v-bind:src="'static/' + item.teapic + '.png'" alt="">
          </div>
          <p class="ans" v-on:click="ans(item.teapic)">{{ showName(item.teapic) }}</p>
        </li>
      </transition-group>
    </div>
    <div class="currentans" v-if="showAns" v-on:click="showAnswer()">
      <p class="toptext" v-show="ansRight">回答正确</p>
      <p class="toptext" v-show="!ansRight">错误</p>
      <p class="bottext" v-show="!ansRight">答案: <span>{{ showName(datalist[no].teapic) }}</span></p>
    </div>
  </div>
</template>

<script>
import dataOri from '@/data'
import router from '@/router'
export default {
  name: 'page2',
  router,
  data () {
    return {
      score: 0, // 得分
      namelist: null, // 转名称map
      datalist: null, // 需要答的五道题目
      no: -1, // 答题序号
      // answerNo: null, // 答案序号
      showAns: false, // 展示答案
      ansRight: false,
      tempQuesArray: [], // 临时待选答案数组
      timer: null,
      show2: true
    }
  },
  created () {
    this.namelist = Object.assign({}, dataOri.namelist)
    this.datalist = [].slice.call(dataOri.datalist)
    this.datalist = this.randomArray(this.datalist)
    this.nextQue()
  },
  watch: {
    showAns (val, oldval) {
      if (val === false && oldval === true) {
        this.nextQue()
      }
    },
    no (val, oldval) {
      this.show2 = false
      setTimeout(() => {
        this.show2 = true
      }
      , 0)
    }
  },
  methods: {
    nextQue () { // 更新下一题数据
      if (++this.no >= 5) {
        return false
      }
      var ans = this.datalist[this.no].teapic
      var temparr = dataOri.datalist.filter(function (obj) {
        if (obj.teapic !== ans) {
          return obj
        }
      })
      temparr = this.randomArray(temparr) // 随机提取三个数据
      temparr.length = 3
      temparr.unshift(this.datalist[this.no]) // 插入正确答案 并打算顺序
      this.tempQuesArray = this.randomArray(temparr)
      // this.answerNo = parseInt(Math.random() * 4) // 正确答案序号
    },
    randomArray (array) { // 随机洗牌数组
      var nums = array.length
      for (let i = 0; i < nums; i++) {
        let rand = parseInt(nums * Math.random())
        let temp = array[i]
        array[i] = array[rand]
        array[rand] = temp
      }
      return array
    },
    showName (char) { // 根据标识符转中文名称
      return this.namelist[char]
    },
    showAnswer () { // 显示正确答案
      clearTimeout(this.timer)
      if (this.no < 4) {
        this.ansRight = false
        this.showAns = false
      } else {
        this.$emit('getscore', this.score)
        router.push('/3')
      }
    },
    ans (no) { // 判断答案
      if (no === this.datalist[this.no].teapic) {
        this.score++
        this.ansRight = true
      }
      this.showAns = true
      let self = this
      clearTimeout(this.timer)
      this.timer = setTimeout(function () {
        self.showAnswer()
      }, 1000)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.page2{  position: relative; background-image: url(../../static/img/page2bg.png);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  ul{margin: 0 55rem; padding: 0; }
  .currentans{ position: absolute; left: 0; top: 0; bottom: 0; right: 0; text-align: center; vertical-align: middle; background-color: rgba(0,0,0,0.7); color: #fff; font-size: 30rem; color: #fff; font-size: 48rem;
    p{margin: 0;
      span{font-family: Simsun,sans-serif;;}
    }
    .toptext{ padding-top: 270rem; font-size: 60rem; line-height: 100rem; }
  }
}
.page2ques{ width: 530rem; height: 276rem; background: url(../../static/img/page2select.png) 0 0 no-repeat; background-size:cover; padding:100rem 110rem; display: flex; justify-content: space-around;
  .fore{ width: 33%;
    img{ width: 100%;}
  }
  .materialname{ font-size: 24rem; color: #666; text-align: center; margin: 0;}
}
.page2ans{ 
  flex: 1 2 480rem;
  li{ float: left; width: 50%; text-align: center; margin-bottom: 10rem;}
  .picw{ width: 232rem; height: 232rem; margin: 0 auto;
    img{ display: block; width: 100%; height: 100%;}
  }
  .ans{ width: 266rem; height: 122rem; margin: 0 auto; background: url(../../static/img/page2titlebg.png) 0 0 no-repeat; background-size: cover; font-size: 30rem; color: #333; overflow: hidden; white-space: nowrap; line-height: 122rem;}
}
</style>
