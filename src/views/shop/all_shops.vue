<template>
    <div id="shops">
        <settingHeader :title="title"></settingHeader>

        <tab line-width='0' style="border-top: 1px solid #E1E1E1;">
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

        <maskRight :value="value"></maskRight>

        <swiper :list="demoList" auto style="width:100%;margin:0 auto;" height="2.2rem" dots-class="custom-bottom" dots-position="center"></swiper>
    
        <shopList></shopList>
    
    </div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import shopList from './components/all_shopsList'
import maskRight from './components/maskRight'
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
        shopList,
        maskRight
    },
    data(){
        return {
            title: '手机',
            tabItem: '综合',
            demoList,
            panel: [ 
                { title: '综合', status: 0},
                { title: '积分兑', status: 1}, 
                { title: '积分购', status: 2}
            ],
            showMaskTop: false,
            sMaskRight: false,
            act1: 0,
            value: false
        }
    },
    mounted:function(){
        
    },
    methods: {
        showPanel: function(){
            if(this.showMaskTop == false){
                this.showMaskTop = true;
                // let hidden = document.getElementById('app')
                // hidden.setAttribute("style", "overflow: hidden;");
            }else {
                this.showMaskTop = false
            }
            
            
        },
        select: function(obj,i){
            this.act1 = i;
            this.showMaskTop = false;
            this.tabItem = obj.title;
            let hidden = document.getElementById('app')
            hidden.setAttribute("style", "overflow: auto;");
        },
        confirmSelect: function(obj) {
            
        },
        onMenuClick: function() {
            this.showMaskTop = false;
            this.value = true;
            console.log('--', this.value)
        }

    }
}
</script>

<style lang="less" scoped>
.vux-popup-dialog{
    background: #fff;
}
.vux-popup-dialog.vux-popup-top{
    top: 1.815rem;
}
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
.vux-popup-mask{
    top: 1.8rem !important;
}
</style>


