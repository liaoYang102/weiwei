<template>
    <div>
        <settingHeader :title="title"></settingHeader>

        <tab line-width='0' style="border-top: 1px solid #E1E1E1;">
	        <tab-item selected @on-item-click="onItemClick">
              综合 <img src="../../assets/images/shop/xiaActive.png" alt="">
            </tab-item>
            <tab-item class='vux-center' @on-item-click="onItemClick">销量</tab-item>
            <tab-item @on-item-click="onItemClick">价格</tab-item>
            <tab-item @on-item-click="onItemClick">
                筛选
                
            </tab-item>
	    </tab>

        <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="2.2rem" dots-class="custom-bottom" dots-position="center"></swiper>
    
        <shopList></shopList>
    
    </div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import shopList from './components/all_shopsList'
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
    components: {
        settingHeader,
        shopList
    },
    data(){
        return {
            title: '手机',
            demo03_list: demoList
        }
    }
}
</script>

