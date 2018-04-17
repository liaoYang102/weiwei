import team from '@/views/member/team/index'
import info from '@/views/member/info/index'
import changeCode from '@/views/member/setting/changeCode'
import code from '@/views/member/setting/code'

const qiang = [
	{
      path: '/member/team/index',
      name: 'team',
      component: team
    },
    {
      path: '/member/info/index',
      name: 'info',
      component: info
    },
    {
      path: '/member/setting/changeCode',
      name: 'changeCode',
      component: changeCode
    },
    {
      path: '/member/setting/code',
      name: 'code',
      component: code
    }
]

export default qiang