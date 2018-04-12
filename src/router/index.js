import Vue from 'vue'
import Router from 'vue-router'
import anni from '@/router/modules/anni'
import qiang from '@/router/modules/qiang'
import liaoy from '@/router/modules/liaoy'


Vue.use(Router)
var all=anni.concat(qiang,liaoy);

export default new Router({
  routes: all
})
