import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: page1
      }
    },
    {
      path: '/2',
      components: {
        default: page2
      }
    },
    {
      path: '/3',
      components: {
        default: page3
      }
    }
  ]
})
