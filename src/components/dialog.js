import dialogComponent from './dialog.vue'

let $dialog

export default {
	install(Vue, options) {
		if(!$dialog) {
			const dialogPlugin = Vue.extend(dialogComponent);

			$dialog = new dialogPlugin()

			$dialog.$mount(document.createElement('div'))

			document.body.appendChild($dialog.$el);
		}

		$dialog.showDialog = false;

		let dialog = {
			show(obj) {
				$dialog.showDialog = true
				$dialog.type = obj.type
				$dialog.headMessage = obj.headMessage
				$dialog.message = obj.message
				$dialog.buttons = obj.buttons

				$dialog.canel = obj.canel
				$dialog.confirm = obj.confirm
			},
			hide() {
				$dialog.showDialog = false
			}
		};

		if(!Vue.$dialog) {
			Vue.$dialog = dialog;
		}

		Vue.prototype.$dialog = Vue.$dialog
	}
}