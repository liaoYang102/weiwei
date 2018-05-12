<template>
	<div style="height: 100%;">
		<div v-transfer-dom class="maskright">
			<popup v-model='show1' position="right">
				<div class="wrapper" ref="wrapper">
					<div class="content">
					    <div class="screening">
					    	<div class="logo">
			    				<group>
			    					<cell is-link :title="logoTitle" :border-intent="false" :arrow-direction="showContent ? 'up' : 'down'" @click.native="down()"></cell>
			    					<div>
			    						<div class="logolist">
			    							<li class="item" v-for="(item, index) in logolist" @click="active($event)">{{ item.name}}</li>
			    						</div>
			    				    </div>
			    				</group>
					    	</div>

					    	<div class="list" v-for="(screen) in screening">
						    	<div class="category">{{ screen.title}}</div>
						    	
				    			<li class="item" v-for="(item, index) in screen.options" @click="active($event)">
				    				{{ item.name}}
				    			</li>
					    	</div>
					    </div>
					 </div>
					<div class="bottom">
			    		<div class="reset" @click="reset()">重置</div>
			    		<div class="complete" @click="complete">完成</div>
			    	</div>
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
    	return {
    		show1:false,
    		logoTitle: '品牌',
    		logolist: [
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'},
    			{ name:'logo'}
    		],
    		screening: [
    			{ title: '类别', options: [ {name: '女士双肩包'},{name: '女士双肩包'},{name: '女士双肩包'}]},
    			{ title: '店铺类型', options: [ {name: '旗舰店'},{name: '专卖店'},{name: '专营店'}]},
    			{ title: '服务折扣', options: [ {name: '积分全额兑'},{name: '积分+现金'},{name: '包邮'},{ name: '积分赠送'}]}
    		],
    		showContent: true
    	}
    },
    mounted() {
		// this.InitScroll()
	},
    methods: {
        InitScroll() {
    		this.$nextTick(() => {
    			if(!this.scroll) {
    				this.scroll = new BScroll(this.$refs.wrapper, {
    					click: true,
    					scrollY: true,
    					pullUpLoad: {
    						threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
    					}
    				})
    				this.scroll.on('pullingUp', (pos) => {
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
    	// 下拉
    	down: function() {
    		let list = this.logolist;
    		let length= list.length;
    		let obj = { name: 'logo'};

			if(length == 9) {
				for(let i =0; i<6;i++){
					list.push(obj)
					this.showContent = false;
				}
			}else{
				list.splice(9,6)
				this.showContent = true;
			}
    	},
    	// 切换样式
    	active: function(e){
			if (e.target.className.indexOf("li-selected") == -1) {
	            e.target.className = "item li-selected"; //切换按钮样式

	        } else {
	            e.target.className = "item";//切换按钮样式
	        }
    	},
    	// 重置
    	reset: function(){
    		var classList = document.getElementsByClassName('li-selected');
    		let listLength = classList.length
    		for(let i=0;i<listLength;i++){
    			classList[0].className = 'item';
    		}
    	},
    	// 完成
    	complete(){
    		this.show1 = false
    	}
    }
}	
</script>

<style lang="less" scoped>
.wrapper {
	height: 95%;
	overflow: hidden;
	.content{
		padding-top: 0.6rem;
		padding-bottom: 0.7rem;
	}
}
.maskright .vux-popup-dialog{
	background: #fff;
}
li{
	float: left;
	background: #F5F6FA;
	font-size: 0.24rem;
	text-align: center;
	list-style: none;
}
.screening{
	width: 6.6rem;
	font-family: PingFangSC-Regular;
	font-size: 0.28rem;
	color: #90A2C7;
	letter-spacing: 0;
	list-style: none;
	.logo{
		overflow: hidden;
		margin-left: 0.25rem;
		margin-bottom: 0.45rem;
		img{
			float: right;
			width: 5%;
			margin-right: 0.255rem;
		}
		.logolist{
			margin: 0.24rem 0.32rem 0 0.15rem;
			.item{
				width: 1.86rem;
				margin: 0 0.1rem 0.1rem 0;
				padding: 0.32rem 0;
			}
		}
	}
	.li-selected{
		color: #336FFF;
		background: #E4EBFB;
	}
	.list{
		overflow: hidden;
		margin-bottom: 0.35rem;
		margin-left: 0.18rem;
		color: #1A2642;
		.category{
			margin-left: 0.07rem;
			margin-bottom: 0.24rem;
		}
		.item{
			width: 1.96rem;
			padding: 0.15rem 0;
			border-radius: 0.04rem;
			margin-right: 0.18rem;
			margin-bottom: 0.18rem;
		}
	}
}
.bottom{
	position: fixed;
	bottom: 0;
	font-size: 0.28rem;
	text-align: center;
	.reset{
		float: left;
		width: 2.64rem;
		padding: 0.3rem 0;
		background: #F5F6FA;
		color: #336FFF;
	}
	.complete{
		float: left;
		width: 3.96rem;
		padding: 0.3rem 0;
		background: #336FFF;
		color: #fff;
	}
}
</style>

<style lang="less">
.logo{
	.weui-cells{
		margin-top: 0;
	}
	.weui-cell{
		padding: 0 0.24rem 0 0;
	}
	.vux-no-group-title{
		margin-top: 0;
	}
	.weui-cells:before{
		border-top: none;
	}
	.weui-cells:after{
		border-bottom: none;
	}
	.vux-label{
		font-size: 0.28rem;
	}
} 
.maskright .vux-popup-dialog{
	min-height: 100%;
	height: 100%;
	max-height: auto;
}
.maskright .vux-popup-dialog.vux-popup-right{
	height: 100%;
}
</style>