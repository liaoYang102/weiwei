import Vue from 'vue'
import Router from 'vue-router'
import anni from '@/router/modules/anni'
import qiang from '@/router/modules/qiang'
import liaoy from '@/router/modules/liaoy'
import inygl from  '@/router/modules/inygl'

Vue.use(Router)
var all=anni.concat(qiang,liaoy,inygl);

export default new Router({
  routes: all
})
