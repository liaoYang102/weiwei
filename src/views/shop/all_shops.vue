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

        <div class="panel">
            <li>
                <div class="selected">
                    <span>综合</span> 
                    <img src="../../assets/images/shop/selected.png" alt="">
                </div>
            </li>
            <li>
                <div class="selected">
                    <span>积分兑</span> 
                    <img src="../../assets/images/shop/selected.png" alt="">
                </div>
            </li>
            <li>
                <div class="selected">
                    <span>积分购</span> 
                    <img src="../../assets/images/shop/selected.png" alt="">
                </div>
            </li>
        </div>

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

<style lang="less" scoped>
.panel{
    width: 100%;
    height: 1.74rem;
    background: #fff;
    li{
        list-style: none;
        margin: 0.18rem 0.29rem 0.06rem 0.46rem;
        font-size: 0.28rem;
        .selected{
           color: #336FFF;
           img{
               float: right;
               width: 5%;
           }
        }
    }
}
</style>


