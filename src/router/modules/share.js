// import ShareIndex from '@/views/share/index'
import Sdetail from '@/views/share/sdetail'
import StoreList from '@/views/share/storelist'
import StoreList2 from '@/views/share/storelist2'
import MeaiDetail from '@/views/share/meaidetail'
import PIntroduce from '@/views/share/pintroduce'
import Join from '@/views/share/join'
import TreatMent from '@/views/share/treatment'
import ComfirmOrder from '@/views/share/comfirmOrder'
import OrderSuccess from '@/views/share/orderSuccess'
import OrderDetail from '@/views/share/orderDetail'
import OrderEval from '@/views/share/orderEval'
import UseTime from '@/views/share/usetime'


const share =[
	{
		path:'/share',
		name:'shareIndex',
		// component:ShareIndex,
		component:()=>import('@/views/share/index'),//异步组件
		meta: {
			navShow: true,
			title: '共享设备'
		}
	},
	{
		path:'/share/sdetail',//门店详情
		name:'sdetail',
		component:Sdetail,
		meta: {
			title:'门店详情'
		}
		/*beforeEnter(to,from,next){
			console.log(9);
			next()
		}*/
	},
	{
		path:'/share/storelist',//门店列表
		name:'storelist',
		component:StoreList,
		props:true,
		meta: {
			navShow: true,
			navIndex:3,
			title:'门店列表'
		}
	},
	{
		path:'/share/storelist2',//门店列表2
		name:'storelist2',
		component:StoreList2,
		meta: {
			title:'门店列表2'
		}
	},
	{
		path:'/share/meaidetail',//套餐详情
		name:'meaidetail',
		component:MeaiDetail,
		meta: {
			title:'套餐详情'
		}
	},
	{
		path:'/share/pintroduce',//威伐光介绍
		name:'pintroduce',
		component:PIntroduce,
		meta: {
			title:'威伐光介绍'
		}
	},
	{
		path:'/share/join',//招商加盟
		name:'join',
		component:Join,
		meta: {
			title:'招商加盟'
		}
	},
	{
		path:'/share/treatment',//治疗指导
		name:'treatment',
		component:TreatMent,
		meta: {
			title:'治疗指导'
		}
	},
	{
		path:'/share/comfirmOrder',//确认订单
		name:'comfirmOrder',
		component:ComfirmOrder,
		meta: {
			title:'确认订单'
		}
	},
	{
		path:'/share/orderSuccess',//支付成功
		name:'orderSuccess',
		component:OrderSuccess,
		meta: {
			title:'支付成功'
		}
	},
	{
		path:'/share/orderDetail',//订单详情
		name:'orderDetail',
		component:OrderDetail,
		meta: {
			title:'订单详情'
		}
	},
	{
		path:'/share/orderEval',//订单评价
		name:'orderEval',
		component:OrderEval,
		meta: {
			title:'订单评价'
		}
	},
	{
		path:'/share/usetime',//使用时间
		name:'usetime',
		component:UseTime,
		meta: {
			title:'使用时间'
		}
	}
]

export default share