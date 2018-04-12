<template>
    <div>
        <settingHeader :title="title"></settingHeader>

        <tab line-width='0' style="border-top: 1px solid #E1E1E1;">
	        <tab-item selected @on-item-click="onItemClick">
              综合 <span class="triangle"></span>
            </tab-item>
            <tab-item class='vux-center' @on-item-click="onItemClick">销量</tab-item>
            <tab-item @on-item-click="onItemClick">价格</tab-item>
            <tab-item @on-item-click="onItemClick">
                筛选
                
            </tab-item>
	    </tab>

        <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    
        <div class="shopList">
            <li></li>
            <li></li>
        </div>
    
    
    </div>
</template>

<script>
import settingHeader from '../../components/setting_header'
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
        settingHeader
    },
    data(){
        return {
            title: '手机',
            demo03_list: demoList
        }
    }
}
</script>

<style lang="less" scoped>
.triangle{
    position: relative;
    top: 0.2rem;
    left: 0.1rem;
    width: 0;
    height: 0;
    border-left: 0.07rem solid transparent;
    border-right: 0.08rem solid transparent;
    border-top: 0.1rem solid #336FFF;
    border-radius: 0.02rem;
}
     
</style>

