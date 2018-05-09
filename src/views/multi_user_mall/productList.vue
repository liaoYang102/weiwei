<template>
    <div id="shops">
       
        <tab :line-width='0'>
            <tab-item selected @on-item-click="showPanel" id="showPanel">
              {{ tabItem}} <img :src="downImg" alt="" width="13%">
            </tab-item>
            <tab-item class='vux-center' @on-item-click="onItemClick">销量</tab-item>
            <tab-item @on-item-click="sort">
                <span>价格</span>
                <img :src="priceImg" alt="" width="12%">
            </tab-item>
            <tab-item @on-item-click="onMenuClick">
                筛选 <img src="../../assets/images/shop/screen.png" alt="" width="12%">
            </tab-item>
        </tab>

        <!-- 综合弹出框 -->
        <div v-transfer-dom class="dialogTop">
            <x-dialog v-model="showDialog" :hide-on-blur="true">
                <div class="panel" id="panel">
                    <li v-for="(item, index) in panel"  @click="select(item,index)">
                        <div :class="{'selected':act1==index}">
                            <span>{{ item.title}}</span> 
                            <img src="../../assets/images/shop/selected.png" alt="" v-if="act1 == index">
                        </div>
                    </li>
                </div>
            </x-dialog>
        </div>

        <maskRight ref='xioaqiang'></maskRight>

        <Swiper :imgList="imgList"></Swiper>

        <div class="shopList">
            <div class="all-shop">
                <!-- <li v-for="(item,index) in scorelist" @click="goShopdetails">
                    <div class="list" :class="{'score' : status == 0}">
                        <div class="score-exchange" v-if="status == 0">积分兑换</div>
                        <div class="score-box">
                            <img src="../../assets/images/shop/shop1.png" alt="">
                            <div class="text-box">
                                <span>{{ item.name }}</span>
                                <div class="score-num">{{ item.score}}</div>
                                <span class="remaining">{{ item.remaining}}</span>
                            </div>
                        </div>
                    </div>
                </li> -->
                
                <li v-for="(item,index) in moneylist" @click="goShopdetails">
                    <div class="list">
                        <div class="score-box">
                            <img src="../../assets/images/shop/shop1.png" alt="">
                            <div class="text-box">
                                <span>{{ item.name }}</span>
                                <div class='money-box'>
                                    <span class="money-red">{{item.presentprice}}</span>
                                    <!-- <div class="score-num" style="display:inline-block;">+{{ item.score}}</div> -->
                                </div>
                                <span class="remaining">
                                    <span class="delete">{{ item.orprice}}</span>
                                    <div class="right">{{ item.pin}}</div> 
                                </span>
                            </div>
                        </div>
                    </div>
                </li>

                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { XDialog} from 'vux'
import settingHeader from '../../components/setting_header'
import Swiper from '../shop/components/swiper'
import BScroll from 'better-scroll'
import maskRight from '../shop/components/maskRight'

export default {
    components: {
        settingHeader,
        Swiper,
        XDialog,
        maskRight
    },
    data(){
        return {
            title: '商品',
            tabItem: '综合',
            imgList: [
              'https://img1.360buyimg.com/da/s750x366_jfs/t15823/359/2502172528/255972/995371c1/5ab39a3aNc707d11c.jpg!cr_1125x549_0_72.dpg',
              'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17263/59/1819098790/59845/c0b2555d/5ad7ef6eN9e686113.jpg!cr_1125x549_0_72!q70.jpg.dpg',
              'https://img1.360buyimg.com/da/s750x366_jfs/t18433/254/1405186807/201565/eed65ff3/5ac9d6caNcebaeb82.jpg!cr_1125x549_0_72.dpg'
            ],
            panel: [ 
                { title: '综合', status: 0},
                { title: '积分兑', status: 1}, 
                { title: '积分购', status: 2}
            ],
            showDialog: false,
            sMaskRight: false,
            act1: 0,
            shopTitle: '',
            test: true,
            list: [
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', status: 2},
            ],
            status: 0,
            score: true,
            scorelist: [],
            moneylist: [],
            show: false,
            showNomore: false,
            downImg:'./static/shop/down1.png',
            topImg: './static/shop/topicon.png',
            priceImg: './static/shop/default.png',
            priceSort: 0,
            obj: null
        }
    },
    mounted:function(){
        this.init()
        // this.InitSc  roll()
    },
    created:function(){
        this.filterData();
    },
    methods: {
        init(){
            if(this.$route.params != {} && this.$route.params.title != null){
                this.tabItem = this.$route.params.title
            }
        },
        showPanel: function(){
            this.priceImg = './static/shop/default.png'
            if(this.downImg == './static/shop/down.png'){
                this.downImg = './static/shop/down1.png'
            }
            if(this.showDialog == false){
                this.showDialog = true;
            }

            let top = parseInt(document.getElementById('showPanel').offsetTop);
            console.log('--00', top)
            this.obj = top + 40;
            let panel = document.getElementById('panel');
            let dialog = panel.parentNode
            
        },
        select: function(obj,i){
            this.act1 = i;
            this.showDialog = false;
            this.tabItem = obj.title;
        },
        onMenuClick: function() {
            this.showDialog = false;
            this.$refs.xioaqiang.show1 = true;
            this.$refs.xioaqiang.InitScroll()
            this.downImg = './static/shop/down.png'
            this.priceImg = './static/shop/default.png'
        },
        onItemClick: function() {
            this.showDialog = false;
            this.priceImg = './static/shop/default.png'
            this.downImg = './static/shop/down.png'
        },
        sort(){
            this.showDialog = false;
            this.downImg = './static/shop/down.png'
            let a = this.priceSort;
            a ++;
            this.priceSort = a;
            if(a == 0){
                this.priceImg = './static/shop/default.png'
            }else if(a%2 != 0){
                this.priceImg = './static/shop/ascending.png'
            }else{
                this.priceImg = './static/shop/descending.png'
            }
            console.log('--', this.priceSort)
        },
        filterData(){
            let vm = this
            for (var i = 0; i<vm.list.length;i++) {
                if(vm.list[i].status == 1){
                    vm.scorelist.push(vm.list[i])
                }else{
                    vm.moneylist.push(vm.list[i])
                }
            }
        },
        goShopdetails(){
            this.$router.push({ path: '/shop/shop_details'})
        },
        

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
        text-align: left;
        .selected{
           color: #336FFF;
           img{
               float: right;
               width: 5%;
           }
        }
    }
}
/*.wrapper {
    height: 100%;
    overflow: hidden;
}*/
/*li:nth-child(odd) .list{
    margin-right: 0.04rem;
}*/
.shopList{
    width: 100%;
    background-color: #F5F6FA;
    .all-shop{
        li{
            list-style: none;
            float: left;
            width: 50%;
            height: 4.28rem;
            font-size: 0.24rem;
            color: #1A2642;
            margin-bottom: 0.04rem;
            .list{
                background: #fff;
                padding-bottom: 0.1rem;
                border-right: 1px solid #F5F8F9;
                .score-exchange{
                    position: absolute;
                    left: -0.05rem;
                    top: -0.05rem;
                    width: 1.23rem;
                    background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
                    text-align: center;
                    color:#fff;
                    font-size: 0.22rem;
                    height: 0.36rem;
                    line-height: 0.36rem;
                    border-radius:0 0.05rem 0.05rem 0;
                }
                .score-box{
                    img{
                        display: block;
                        margin: 0 auto;
                        width: 78%;
                    }
                    .text-box{
                        margin-left: 0.3rem;
                        .money-box{
                            padding: 0.1rem 0;
                            margin-left: -0.04rem;
                        }
                        .money-red{
                            font-size: 0.32rem;
                            color: #F23030;
                        }
                        .score-num{
                            width: 1.2rem;
                            background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
                            text-align: center;
                            color:#fff;
                            font-size: 0.22rem;
                            height: 0.36rem;
                            line-height: 0.36rem;
                            border-radius: 0.05rem;
                            margin: 0.1rem 0 0.19rem 0;
                            padding: 0.02rem 0.08rem;
                        }
                        .remaining{
                            color: #90A2C7;
                            .delete{
                                text-decoration: line-through;
                            }
                            .right{
                                float: right;
                                margin-right: 0.28rem;
                            }
                        }
                    }
                }
            }
            .score{
                height: 4.2rem;
                position: relative;
                border: 0.05rem solid;
                border-image: linear-gradient(#5EC3FF, #106FE3) 30 30;
            }
            
        }
    }
}
</style>

<style lang="less">
.dialogTop {
    .weui-mask{
        top: 50%;
        z-index: 10;
    }
    .weui-dialog{
        position: absolute;
        /*top: 54.1%;*/
        width: 101%;
        /*left: 49.5%;*/
        background: #fff;
        max-width: 101%;
        z-index: 11;
        border-radius: 0;
    }
}
#shops .vux-tab .vux-tab-item{
    color:#1A2642;
}
#shops .vux-tab .vux-tab-item.vux-tab-selected{
    color:#256fff;
    border-bottom:3px solid #256fff;
}

</style>


