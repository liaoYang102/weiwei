import Vue from 'vue'
import Router from 'vue-router'
import shopModule from '@/router/modules/shop'
import memberModule from '@/router/modules/member'
import share from '@/router/modules/share'
import draw from '@/router/modules/draw'
import lock from '@/router/modules/lock'

Vue.use(Router)
var all=shopModule.concat(memberModule,share,draw,lock);

export default new Router({
  // base:'/new/',
  routes: all
})
