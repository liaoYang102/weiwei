var url = {
	platformId: 2018050800000008,
	user: {
		getBasicInfo: '/user/v1/user/getBasicInfo', //基本信息
		getMyTeam: '/user/v1/user/getMyTeam', //我的团队
		getUserInfo: '/user/v1/user/getUserInfo', //个人资料
		changeUserInfo: '/user/v1/user/changeUserInfo', //修改个人资料
		fileuploadImage: '/datacenter/v1/fileupload/image', //上传图片
		login: '/datacenter/public/v1/login', //云中心登录
		userLogin: '/user/v1/user/login', //用户登录
		login:'/datacenter/public/v1/login',//云中心登录
		userRegister: '/user/v1/user/register', //用户注册
		checkUserExistsByMobile: '/user/v1/user/checkUserExistsByMobile', //用户是否注册
		getVerificationCode: '/user/v1/sms/getVerificationCode',
		changeNickname: '/user/v1/user/changeNickname', // 修改用户名
		changeAvatar: '/user/v1/user/changeAvatar', //修改用户名称
		addShippingAddress:'/user/v1/user/addShippingAddress', // 添加收货地址
	},
	draw: {
		getReviewLists: '/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getReviewLists', //往期回顾
		getLuckRankLists: '/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getLuckyRankLists' //幸运排行
	},
	zone: {
		area: '/area/v1/area/getInfo'
	}

}

export default url