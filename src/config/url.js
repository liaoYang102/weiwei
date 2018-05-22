var url = {
	platformId: 2018050800000008,
	user: {
		getBasicInfo: '/user/v1/user/getBasicInfo', //基本信息
		getMyTeam: '/user/v1/user/getMyTeam', //我的团队
		getUserInfo: '/user/v1/user/getUserInfo', //个人资料
		changeUserInfo: '/user/v1/user/changeUserInfo', //修改个人资料
		fileuploadImage: '/datacenter/v1/fileupload/image', //上传图片
		login: '/datacenter/public/v1/login', //云中心登录
		userLogin: '/user/public/v1/user/login', //用户登录
		login:'/datacenter/public/v1/login',//云中心登录
		userRegister: '/public/v1/user/register', //用户注册
		checkUserExistsByMobile: '/user/public/v1/user/checkUserExistsByMobile', //用户是否注册
		getVerificationCode: '/user/public/v1/sms/getVerificationCode',//获取验证码
		changeNickname: '/user/v1/user/changeNickname', // 修改用户名
		changeAvatar: '/user/v1/user/changeAvatar', //修改用户名称
		addShippingAddress:'/user/v1/user/addShippingAddress', // 添加收货地址
		getShippingAddress:'/user/v1/user/getShippingAddress', // 获取收货地址
		forgetPassword:'/public/v1/user/forgetPassword',//重置密码
		getConcernLists:'/user/v1/user/getConcernLists',//我的关注
		getUserPayPassword:'/user/v1/user/getUserPayPassword', // 设置是否设置支付密码
	},
	draw: {
		getReviewLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getReviewLists', //往期回顾
		getLuckRankLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getLuckyRankLists' //幸运排行
	},
	zone: {
		area: '/area/v1/area/getCountryList'
	}

}

export default url