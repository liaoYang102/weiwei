<template>
    <div>
        <scroller lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" style="background-color:#F5F6FA" v-if='test'>
            <div class="shopList">
                <div class="all-shop">
                    
                    <li v-for="(item,index) in scorelist">
                        <div class="list" :class="{'score' : status == 0}">
                            <div class="score-exchange" v-if="status == 0">积分兑换</div>
                            <div class="score-box">
                                <img src="../../../assets/images/shop/shop1.png" alt="">
                                <div class="text-box">
                                    <span>{{ item.name }}</span>
                                    <div class="score-num">{{ item.score}}</div>
                                    <span class="remaining">{{ item.remaining}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li v-for="(item,index) in moneylist">
                        <div class="list">
                            <div class="score-box">
                                <img src="../../../assets/images/shop/shop1.png" alt="">
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
                </div>
                
                <load-more tip="loading" id='loading'></load-more>
            </div>

        </scroller>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: true,
            list: [
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', score: '26554积分', remaining: '剩余24件', status: 1},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
                { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2}
            ],
            status: 0,
            score: true,
            scorelist: [],
            moneylist: []
        }
    },
    created:function(){
        this.filterData();
    },
    methods:{
        onScrollBottom(){
	    	var load = document.getElementById("loading");
	    	load.style.display = 'block'
	    	if (this.onFetching) {
		        // do nothing
		      } else {
		        this.onFetching = true
		        setTimeout(() => {
		        	load.style.display = 'none'
		        	console.log(123);
		          	this.$nextTick(() => {
		            this.$refs.scrollerBottom.reset()
		          })
		          this.onFetching = false
		        }, 2000)
		      }
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
        }
    }
}
</script>


<style lang="less" scoped>
.vux-loadmore{
    display: none;
}
.shopList{
    width: 100%;
    background-color: #F5F6FA;
    .all-shop{
        li{
            list-style: none;
            float: left;
            width: 50%;
            height: 4.35rem;
            font-size: 0.24rem;
            color: #1A2642;
            margin-bottom: 0.04rem;
            .list{
                margin-right:0.04rem;
                background: #fff;
                height: 4.35rem;
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
<style lang='less'>
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
    background-image: none;
}
</style>

