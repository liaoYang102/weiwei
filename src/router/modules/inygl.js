import ShareIndex from '@/views/share/index'
import Sdetail from '@/views/share/sdetail'
import StoreList from '@/views/share/storelist'
import MeaiDetail from '@/views/share/meaidetail'
import PIntroduce from '@/views/share/pintroduce'
import Join from '@/views/share/join'
import TreatMent from '@/views/share/treatment'
import ComfirmOrder from '@/views/share/comfirmOrder'
import OrderSuccess from '@/views/share/orderSuccess'
import OrderDetail from '@/views/share/orderDetail'
import OrderEval from '@/views/share/orderEval'


const inygl =[
	{
		path:'/share',
		name:'shareIndex',
		component:ShareIndex
	},
	{
		path:'/share/sdetail',//门店详情
		name:'sdetail',
		component:Sdetail
	},
	{
		path:'/share/storelist',//门店列表
		name:'storelist',
		component:StoreList
	},
	{
		path:'/share/meaidetail',//套餐详情
		name:'meaidetail',
		component:MeaiDetail
	},
	{
		path:'/share/pintroduce',//威伐光介绍
		name:'pintroduce',
		component:PIntroduce
	},
	{
		path:'/share/join',//招商加盟
		name:'join',
		component:Join
	},
	{
		path:'/share/treatment',//治疗指导
		name:'treatment',
		component:TreatMent
	},
	{
		path:'/share/comfirmOrder',//确认订单
		name:'comfirmOrder',
		component:ComfirmOrder
	},
	{
		path:'/share/orderSuccess',//支付成功
		name:'orderSuccess',
		component:OrderSuccess
	},
	{
		path:'/share/orderDetail',//订单详情
		name:'orderDetail',
		component:OrderDetail
	},
	{
		path:'/share/orderEval',//订单评价
		name:'orderEval',
		component:OrderEval
	}
]

export default inygl