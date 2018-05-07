import LoadingComponent from './loading.vue'

let $vm

export default {
	install(Vue, options) {
		if(!$vm) {
			const LoadingPlugin = Vue.extend(LoadingComponent);

			$vm = new LoadingPlugin()
			
			$vm.$mount(document.createElement('div'))

			document.body.appendChild($vm.$el);
		}

		$vm.show = false;

		let loading = {
			showLoading(text) {
				$vm.show = true;

				$vm.text = text;
			},
			hideLoading() {
				$vm.show = false;
			}
		};

		if(!Vue.$loading) {
			Vue.$loading = loading;
		}

		Vue.prototype.$loading = Vue.$loading
	}
}