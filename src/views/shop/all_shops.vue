<template>
    <div id="shops">
        <settingHeader :title="title"></settingHeader>

        <tab :line-width='0' style="border-top: 1px solid #E1E1E1;">
            <tab-item selected @on-item-click="showPanel">
              {{ tabItem}} <img src="../../assets/images/shop/xiaActive.png" alt="" width="6%">
            </tab-item>
            <tab-item class='vux-center' @on-item-click="onItemClick">销量</tab-item>
            <tab-item @on-item-click="onItemClick">价格</tab-item>
            <tab-item @on-item-click="onMenuClick">
                筛选
            </tab-item>
        </tab>

        <div v-transfer-dom>
            <popup v-model="showMaskTop" position="top">
                <div class="panel">
                    <li v-for="(item, index) in panel"  @click="select(item,index)">
                        <div :class="{'selected':act1==index}">
                            <span>{{ item.title}}</span> 
                            <img src="../../assets/images/shop/selected.png" alt="" v-if="act1 == index">
                        </div>
                    </li>
                </div>
            </popup>
        </div> 

        <maskRight ref='xioaqiang'></maskRight>

        <Swiper :imgList="imgList"></Swiper>

        <shopList></shopList>
    
    </div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import shopList from './components/all_shopsList'
import maskRight from './components/maskRight'
import Swiper from './components/swiper'

export default {
    components: {
        settingHeader,
        shopList,
        maskRight,
        Swiper
    },
    data(){
        return {
            title: '手机',
            tabItem: '综合',
            imgList: [
              'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
              'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
              'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
            ],
            panel: [ 
                { title: '综合', status: 0},
                { title: '积分兑', status: 1}, 
                { title: '积分购', status: 2}
            ],
            showMaskTop: false,
            sMaskRight: false,
            act1: 0,
            shopTitle: ''
        }
    },
    mounted:function(){
        this.tabItem = this.$route.params.title
    },
    methods: {
        showPanel: function(){
            if(this.showMaskTop == false){
                this.showMaskTop = true;
            }else {
                this.showMaskTop = false
            }
        },
        select: function(obj,i){
            this.act1 = i;
            this.showMaskTop = false;
            this.tabItem = obj.title;
        },
        onMenuClick: function() {
            this.$refs.xioaqiang.show1 = true;
        },
        onItemClick: function() {

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

<style lang="less">
 .vux-popup-dialog{
    background: #fff !important;
}
.vux-popup-dialog.vux-popup-top{
    top: 1.815rem !important;
}
 .vux-popup-mask{
    top: 1.8rem !important;
}
</style>


