import codeComponent from '@/views/member/setting/code'

let $code

export default {
	install(Vue, options) {
		//验证码
		if(!$code) {
			const codePlugin = Vue.extend(codeComponent);
			$code = new codePlugin()
			$code.$mount(document.createElement('div'))
			document.body.appendChild($code.$el);
		}
		let code = {
			show(obj){
				$code.showCode = true
				$code.codeChange = obj.codeChange
			},
			hide(){
				$code.showCode = false
			}
		}
		
		
		if(!Vue.$code) {
			Vue.$code = code
		}
		
		Vue.prototype.$code = Vue.$code
		
		console.log(Vue.$code)
	}
}