import Vue from 'vue'
import Router from 'vue-router'
import shopModule from '@/router/modules/shop'
import memberModule from '@/router/modules/member'
import inygl from '@/router/modules/inygl'
import draw from '@/router/modules/draw'

Vue.use(Router)
var all=shopModule.concat(memberModule,inygl,draw);

export default new Router({
  routes: all
})
