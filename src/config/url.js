var url = {
	//用户 /datacenter
	user:{
		getBasicInfo:'/v1/user/getBasicInfo', //基本信息
		getMyTeam:'/v1/user/getMyTeam', //我的团队
		getUserInfo:'/v1/user/getUserInfo', //个人资料
		changeUserInfo:'/v1/user/changeUserInfo',
		fileuploadImage:'/v1/fileupload/image'
	},

	draw:{
		getReviewLists: '/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getReviewLists',
		getLuckRankLists: '/app/index.php?i=7&c=entry&m=mx_shop&do=mobile&r=copy.getLuckyRankLists'
	}
}

export default url