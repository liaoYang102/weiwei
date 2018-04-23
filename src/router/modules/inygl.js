import ShareIndex from '@/views/share/index'
import Sdetail from '@/views/share/sdetail'
import StoreList from '@/views/share/storelist'
import MeaiDetail from '@/views/share/meaidetail'
import PIntroduce from '@/views/share/pintroduce'


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
	}
]

export default inygl