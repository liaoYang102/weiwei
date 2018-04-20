import ShareIndex from '@/views/share/index'
import Sdetail from '@/views/share/sdetail'
import StoreList from '@/views/share/storelist'


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
	}
]

export default inygl