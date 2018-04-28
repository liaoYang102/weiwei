<template>
    <div id="shops" style="height: 100%;">
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
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <div v-transfer-dom class="masKTop">
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

                <div class="shopList">
                    <div class="all-shop">
                        <li v-for="(item,index) in scorelist" @click="goShopdetails">
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
                        </li>
                        
                        <li v-for="(item,index) in moneylist" @click="goShopdetails">
                            <div class="list">
                                <div class="score-box">
                                    <img src="../../assets/images/shop/shop1.png" alt="">
                                    <div class="text-box">
                                        <span>{{ item.name }}</span>
                                        <div>
                                            <span class="money-red">{{ item.presentprice}}</span>
                                            <div class="score-num" style="display:inline-block;">+{{ item.score}}</div>
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
                    
                    <loading v-if="show"></loading>
                    <noMore v-if="showNomore"></noMore>
                </div>

            </div>
        </div>
        

    
    </div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import maskRight from './components/maskRight'
import Swiper from './components/swiper'
import BScroll from 'better-scroll'
import Loading from '../../components/loading'
import noMore from '../../components/noMore'

export default {
    components: {
        settingHeader,
        maskRight,
        Swiper,
        Loading,
        noMore
    },
    data(){
        return {
            title: '商品分类',
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
            showMaskTop: false,
            sMaskRight: false,
            act1: 0,
            shopTitle: '',
            test: true,
            list: [
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2}
            ],
            status: 0,
            score: true,
            scorelist: [],
            moneylist: [],
            show: false,
            showNomore: false
        }
    },
    mounted:function(){
        this.init()
        this.InitScroll()
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

        },
        InitScroll() {
            this.$nextTick(() => {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        click: true,
                        scrollY: true,
                        pullUpLoad: {
                            // threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
                        }
                    })
                    this.scroll.on('pullingUp', (pos) => {
                        this.show = true;
                        this.LoadData()
                        this.$nextTick(function() {
                            this.scroll.finishPullUp();
                            this.scroll.refresh();
                        });
                    })
                } else {
                    this.scroll.refresh()
                }
            })

        },
        LoadData() {
            var _this = this
            setTimeout(function(){
                _this.show = false;
                let obj = [{ name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2}];
                _this.moneylist = _this.moneylist.concat(obj);
                console.log(_this.moneylist);
            },3000)
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
.wrapper {
    height: 93%;
    overflow: hidden;
}
/*li:nth-child(odd){
    border-right: 1px solid #F5F8F9;
}
li:nth-child(odd){
    border-right: 1px solid #F5F8F9;
}*/
.shopList{
    width: 100%;
    background-color: #F5F6FA;
    .all-shop{
        li{
            border-bottom: 1px solid  #F5F8F9;
            border-right: 1px solid #F5F8F9;
            box-sizing: border-box;
            list-style: none;
            float: left;
            width: 50%;
            /*height: 4.35rem;*/
            font-size: 0.24rem;
            color: #1A2642;
            /*margin-bottom: 0.04rem;*/
            .list{
                padding-bottom: 0.1rem;
                background: #fff;
                /*padding-bottom: 0.04rem;*/
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
.masKTop .vux-popup-dialog{
    background: #fff;
}
/*.masKTop .vux-popup-dialog.vux-popup-top{
    top: 1.815rem;
}*/
.masKTop .vux-popup-mask{
    top: 1.8rem;
}
#shops .vux-tab .vux-tab-item{
    color:#1A2642;
}
#shops .vux-tab .vux-tab-item.vux-tab-selected{
    color:#256fff;
    border-bottom:3px solid #256fff;
}
</style>


