var uri1 = '/user',
	uri2 = '/datacenter'

var url = {
	platformId: 2018050800000002,

	user: {
		getAuthorizationUrl: uri1 + '/pubilc/v1/user/getAuthorizationUrl', //获取第三方应用授权链接接口
		getAuthorizationUrl1: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7a4933a7a3c33ec8&redirect_uri=https%3A%2F%2Fnew.cgc999.com%2Fapigw%2Fuser%2Fthirdparty%2Fwechat%2Fnotify&response_type=code&scope=snsapi_userinfo&state=20180508000000021527669875A2a3a5d99d9a73ddc406adcdc42fe04bdA2018050800000002',

		getBasicInfo: uri1 + '/v1/user/getBasicInfo', //基本信息
		getMyTeam: uri1 + '/v1/user/getMyTeam', //我的团队
		getUserInfo: uri1 + '/v1/user/getUserInfo', //个人资料
		changeUserInfo: uri1 + '/v1/user/changeUserInfo', //修改个人资料
		fileuploadImage: uri2 + '/v1/fileupload/image', //上传图片
		login: uri2 + '/public/v1/login', //云中心登录
		userLogin: uri1 + '/public/v1/user/login', //用户登录
		logout: uri1 + '/v1/user/logout', //用户登出
		userRegister: uri1 + '/public/v1/user/register', //用户注册
		forgetPassword: uri1 + '/public/v1/user/forgetPassword', //重置登录密码
		checkUserExistsByMobile: uri1 + '/public/v1/user/checkUserExistsByMobile', //用户是否注册
		getVerificationCode: uri1 + '/public/v1/sms/getVerificationCode', //获取验证码
		authVerification: uri1 + '/public/v1/sms/authVerificationCode', //检测验证码是否正确
		setPayPassword: uri1 + '/v1/user/setPayPassword', //设置支付密码
		changeNickname: uri1 + '/v1/user/changeNickname', //修改用户名
		changeAvatar: uri1 + '/v1/user/changeAvatar', //修改用户名称
		addShippingAddress: uri1 + '/v1/user/addShippingAddress', //添加收货地址
		getShippingAddress: uri1 + '/v1/user/getshippingAddress', //获取收货地址
		deleteShippingAddress: uri1 + '/v1/user/deleteShippingAddress', //删除收货地址
		setDefaultShippingAddress: uri1 + '/v1/user/setDefaultShippingAddress', //设置默认收货地址
		editShippingAddress: uri1 + '/v1/user/editShippingAddress', //修改收货地址
		addConcern: uri1 + '/v1/user/addConcern', //用户添加关注商品/联盟企业/联营企业
		getConcernLists: uri1 + '/v1/user/getConcernLists', //获取用户关注商品/联盟企业/联营企业
		deleteConcern: uri1 + '/v1/user/deleteConcern', //用户取消关注商品/联盟企业/联营企业
		getUserPayPassword: uri1 + '/v1/user/getUserPayPassword', //设置是否设置支付密码
		authPayPassword: uri1 + '/v1/user/authPayPassword', //检测支付密码正确性
		setPayPasswordByOld: uri1 + '/v1/user/setPayPasswordByOld', //根据旧支付密码设置新支付密码
		getUserAuthInfo: uri1 + '/v1/user/getUserAuthInfo', //获取用户认证状态
		getShippingAddressById: uri1 + '/v1/user/getShippingAddressById', //id获取收货地址详细信息
		getFundInfo: uri1 + '/v1/user/getFundInfo', //获取用户资金信息
		changeFundShow: uri1 + '/v1/user/changeFundShow', //修改用户资产显示状态
		getMyBalanceList: uri1 + '/v1/user/getMyBalanceList', //获取用户积分列表
		getMyPointsList: uri1 + '/v1/user/getMyPointsList', //获取用户信用积分列表
		getDayBalanceList: uri1 + '/v1/user/getDayBalanceList', //通用积分每日累计变更列表信息接口
		getMyBalanceDetail: uri1 + '/v1/user/getMyBalanceDetail', //获取通用积分详情
		getMyPointDetail: uri1 + '/v1/user/getMyPointDetail', //获取信用积分详情
		getUserCouponList: uri1 + '/v1/user/getUserCouponList', //获取优惠券列表
	},
	qy: {
		getBasicInfo: uri1 + '/public/v1/enterprise/getBasicInfo', //获取企业基本信息
		getThumbInfo: uri1 + '/public/v1/enterprise/getThumbInfo', //获取企业图册
		getAllianceConcern: uri1 + '/v1/enterprise/getAllianceConcern', //获取用户是否关注联盟企业角色接口
		getChainsConcern: uri1 + '/v1/enterprise/getChainsConcern', //获取用户是否关注联盟企业角色
		getEnterpriseListInfo: uri1 + '/public/v1/enterprise/getEnterpriseListInfo', //获取产业联盟企业列表信息接口
	},
	draw: {
		getReviewLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getReviewLists', //往期回顾
		getLuckRankLists: 'http://www.cgc999.com/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getLuckyRankLists' //幸运排行
	},
	zone: {
		area: '/area/v1/area/level', //区域地址
		address: '/area/v1/area/getInfo' //三级联动地址
	}

}

export default url