import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import page from './modules/page';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
    	user:user,
    	page:page
    },
    getters
})

export default store;