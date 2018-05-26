var uri1 = '/user',
	uri2 = '/datacenter'

var url = {
	platformId: 2018051600000004,

	user: {
		getBasicInfo: uri1 + '/v1/user/getBasicInfo', //基本信息
		getMyTeam: uri1 + '/v1/user/getMyTeam', //我的团队
		getUserInfo: uri1 + '/v1/user/getUserInfo', //个人资料
		changeUserInfo: uri1 + '/v1/user/changeUserInfo', //修改个人资料
		fileuploadImage: uri2 + '/v1/fileupload/image', //上传图片
		login: uri2 + '/public/v1/login', //云中心登录
		userLogin: uri1 + '/public/v1/user/login', //用户登录
		logout: uri1 + '/v1/logout', //用户登出
		userRegister: uri1 + '/public/v1/user/register', //用户注册
		checkUserExistsByMobile: uri1 + '/public/v1/user/checkUserExistsByMobile', //用户是否注册
		getVerificationCode: uri1 + '/public/v1/sms/getVerificationCode', //获取验证码
		changeNickname: uri1 + '/v1/user/changeNickname', //修改用户名
		changeAvatar: uri1 + '/v1/user/changeAvatar', //修改用户名称
		addShippingAddress: uri1 + '/v1/user/addShippingAddress', //添加收货地址
		getShippingAddress: uri1 + '/v1/user/getshippingAddress', //获取收货地址
		deleteShippingAddress: uri1 + '/v1/user/deleteShippingAddress', //删除收货地址
		setDefaultShippingAddress: uri1 + '/v1/user/setDefaultShippingAddress', //设置默认收货地址
		forgetPassword: '/public/v1/user/forgetPassword', //重置密码
		getConcernLists: uri1 + '/v1/user/getConcernLists', //我的关注
		getUserPayPassword: uri1 + '/v1/user/getUserPayPassword', //设置是否设置支付密码
		getUserAuthInfo: uri1 + '/v1/user/getUserAuthInfo', //获取用户认证状态
		getShippingAddressById: uri1 + '/v1/user/getShippingAddressById', //id获取收货地址详细信息
		getFundInfo: uri1 + '/v1/user/getFundInfo', //获取用户资金信息
		changeFundShow: uri1 + '/v1/user/changeFundShow', //修改用户资产显示状态
		getMyBalanceList: uri1 + '/v1/user/getMyBalanceList', //获取用户积分列表
		getMyPointsList: uri1 + '/v1/user/getMyPointsList', //获取用户信用积分列表
		getMyBalanceDetail: uri1 + '/v1/user/getMyBalanceDetail', //获取通用积分详情
	},
	draw: {
		getReviewLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getReviewLists', //往期回顾
		getLuckRankLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getLuckyRankLists' //幸运排行
	},
	zone: {
		area: '/area/v1/area/level' //区域地址
	}

}

export default url