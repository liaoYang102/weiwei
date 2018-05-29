<template>
	<div class="vip">
		<settingHeader :title="title"></settingHeader>
		<header>
			<img src="../../../assets/images/member/vip-bg.png" alt="" class='vipBg'>
			<section>
				<img src="../../../assets/images/member/score_1.png" alt="">
				<p class="vipInfo">
					<span class="name">张媚儿</span><br>
					<span class="level">会员级别</span>
				</p>
			</section>
		</header>
		<section class="condition">
			<section class="level"><!-- @click="level = level-1;oldLevel=level"   @click="level = level+ 1;oldLevel=level" -->
				<span class='fl' @click="back"><img src="../../../assets/images/shop/turn_right.png" alt="" class='left'> 上一级</span>
				<span class="text">满足以下要求可升级VIP2</span>
				<span class="fr" @click="forword">下一级 <img src="../../../assets/images/shop/turn_right.png" alt=""></span>
			</section>

			<div class="levContent" style="left: -375px;">
				<section class="achieve left" v-for="(item, index) in 5">
					<section class="achieveLeft">
						<span class="brige">1,100.00</span>
						<section class="achieveCondition">
							<section class="recharge fl">
								<img src="../../../assets/images/member/vip-account.png" alt="">
								<p class="rechargeName">积分充值{{index}}</p>
							</section>
							<img src="../../../assets/images/member/vip-right.png" alt="" class='fl'>
							<span class="rechargePrice fl">120000<span class="text">元</span></span>
							<section class="clear"></section>
						</section>
						<p class="achieveText">再充值100元即可满足条件</p>
					</section>
					<section class="achieveRight">
						<span class="brige">360</span>
						<section class="achieveCondition">
							<section class="recharge fl">
								<img src="../../../assets/images/member/vip-buy.png" alt="">
								<p class="rechargeName">消费购物</p>
							</section>
							<img src="../../../assets/images/member/vip-right.png" alt="" class='fl'>
							<span class="rechargePrice fl">120000<span class="text">元</span></span>
							<section class="clear"></section>
						</section>
						<p class="achieveText">再充值840元即可满足条件</p>
					</section>
				</section>
			</div>
		</section>
		<section class="levelRules">
			<nav class='fr'>等级规则 <img src="../../../assets/images/shop/turn_right.png" alt=""></nav>
			<section class="equity fl">
				<p class="head">
					<span class="xian"></span>
					<span class="text">VIP2权益</span>
				</p>
				<section class="coupon">
					<p>权益一 · 优惠券</p>
					<article>
						<span class="fl discount">8<span>折</span></span>
						<span class="fl quan">打折卷</span>
						<span class="fr">全国通用</span>
					</article>
					<article>
						<span class="fl discount">120<span>元</span></span>
						<span class="fl quan">满减卷</span>
						<span class="fr">满10000可用</span>
					</article>
					<p>权益一 · 通用积分</p>
					<span class="account">200<span>通用积分</span></span>
				</section>
			</section>
			<section class="equity fl">
				<p class="head">
					<span class="xian"></span>
					<span class="text">VIP2权益</span>
				</p>
				<section class="coupon">
					<p>权益一 · 优惠券</p>
					<article>
						<span class="fl discount">8<span>折</span></span>
						<span class="fl quan">打折卷</span>
						<span class="fr">全国通用</span>
					</article>
					<article>
						<span class="fl discount">120<span>元</span></span>
						<span class="fl quan">满减卷</span>
						<span class="fr">满10000可用</span>
					</article>
					<p>权益一 · 通用积分</p>
					<span class="account">200<span>通用积分</span></span>
				</section>
			</section>
			<section class="clear"></section>
		</section>
	</div>
</template>

<script>
	import settingHeader from '../../../components/setting_header'
	export default {
		data(){
			return{
				title:"会员等级",
				level: 1,
			}
		},
		components: {
			settingHeader,
		},
		methods:{
			back(){
				this.level --;
			  	// var newLeft = parseInt(wrap.style.left)+width;
			  	if(this.level<0){
  	                this.level = 0;
  	            }
  	            this.change()
			},
			forword(){
				this.level ++;
				// let wrap=document.getElementsByClassName('levContent')[0];
				// var width = window.innerWidth;
				// var newLeft = parseInt(wrap.style.left)-width;
				if(this.level >= 4){
				    this.level = 4
				}
				this.change()
			},
			change(){
				let wrap=document.getElementsByClassName('levContent')[0];
				var width = window.innerWidth;
				wrap.style.left = 0 +'px';
				let dis = -(width * this.level)
			    wrap.style.transform = 'translate3d(' + dis + 'px, 0, 0)'; 
   				wrap.style.transition = 'transform .2s ease-out'; 
			}
		}
	}
</script>

<style lang='less' scoped>
	.vip{
		header{
			position: relative;
			.vipBg{
				width: 100%;
				height: 3.3rem;
			}
			section{
				position: absolute;
				top: 0.96rem;
				left: 0.56rem;
				img{
					width: 0.9rem;
					height: 0.9rem;
					border-radius: 50%;
					float: left;
				}
				.vipInfo{
					float: left;
					margin-left: 0.16rem;
					.name{
						font-size:0.3rem;
						line-height: 0.45rem;
						color: #FFFFFF;
					}
					.level{
						font-size:0.3rem;
						line-height: 0.5rem;
						color: #FFE19F;
					}
				}
			}
		}
		.condition{
			z-index: 2;
			margin-top: -0.7rem;
			background-color: #fff;
			padding: 0.28rem 0.24rem;
			position: relative;
			box-shadow: 0px 2px 30px 0px rgba(26,38,66,0.1);
			overflow: hidden;
			height: 3rem;
			.level{
				text-align: center;
				.fl,.fr{
					font-size:0.24rem;
					line-height: 0.4rem;
					color: #90A2C7;
					img{
						width: 0.2rem;
					}
					.left{
						transform: rotate(180deg);
						margin-top: 0.08rem;
					}
				}
				.text{
					font-size:0.28rem;
					line-height: 0.4rem;
					color: #1A2642;
				}
			}
			.levContent{
				position: absolute;
				width: 40rem;
				height: 2.42rem;
				z-index: 2;
			}
			.achieve{
				width: 7.5rem;
				margin-top: 0.3rem;
				display: flex;
				.achieveLeft{
					flex: 1;
					border-right: 1px solid #D8DFF0;
					padding-left: 0.2rem;
					.brige{
						display: inline-block;
						background-color: #336FFF;
						height:0.4rem;
						line-height: 0.4rem;
						font-size:0.2rem;
						color: #FFFFFF;
						padding: 0 0.1rem;
						border-radius: 0.1rem;
						position: relative;
						border:1px solid #336fff;
					}
					.brige:before{
						content: '';
						transform: rotate(270deg);
						border-top: 0.15rem solid transparent;/*方框上部分背景颜色为透明*/
						border-bottom: 0.15rem solid transparent;/*方框下部分背景为透明*/
						border-right: 0.15rem solid #336fff;/*箭头背景颜色*/
						position: absolute;/*绝对定位1*/
						top: 0.34rem;/*距离顶部位置偏移量2*/
						left: 34%;/*距离左边位置偏移量3*/ /*123都是控制显示位置的*/
					}
					.achieveCondition{
						margin-top: 0.3rem;
					}
					.recharge{
						text-align: center;
						img{
							width: 0.64rem;
						}
						.rechargeName{
							font-size: 0.2rem;
							color: #1A2642;
						}
					}
					img.fl{
						margin-top: 0.18rem;
						width: 0.43rem;
					}
					.rechargePrice{
						font-size: 0.36rem;
						margin-top: 0.06rem;
						margin-left: 0.2rem;
						/*margin-top: 0.14rem;*/
						color: #1A2642;
						.text{
							color: #425884;
							font-size: 0.24rem;
						}
					}
					.achieveText{
						margin-top: 0.3rem;
						font-size: 0.24rem;
						color: #90A2C7;
					}
				}
				.achieveRight{
					flex: 1;
					padding-left: 0.2rem;
					.brige{
						display: inline-block;
						background-color: #336FFF;
						height:0.4rem;
						line-height: 0.4rem;
						font-size:0.2rem;
						color: #FFFFFF;
						padding: 0 0.1rem;
						border-radius: 0.1rem;
						position: relative;
						border:1px solid #336fff;
					}
					.brige:before{
						content: '';
						transform: rotate(270deg);
						border-top: 0.15rem solid transparent;/*方框上部分背景颜色为透明*/
						border-bottom: 0.15rem solid transparent;/*方框下部分背景为透明*/
						border-right: 0.15rem solid #336fff;/*箭头背景颜色*/
						position: absolute;/*绝对定位1*/
						top: 0.34rem;/*距离顶部位置偏移量2*/
						left: 34%;/*距离左边位置偏移量3*/ /*123都是控制显示位置的*/
					}
					.achieveCondition{
						margin-top: 0.3rem;
					}
					.recharge{
						text-align: center;
						img{
							width: 0.64rem;
						}
						.rechargeName{
							font-size: 0.2rem;
							color: #1A2642;
						}
					}
					img.fl{
						margin-top: 0.18rem;
						width: 0.43rem;
					}
					.rechargePrice{
						font-size: 0.36rem;
						margin-top: 0.06rem;
						margin-left: 0.2rem;
						/*margin-top: 0.14rem;*/
						color: #1A2642;
						.text{
							color: #425884;
							font-size: 0.24rem;
						}
					}
					.achieveText{
						margin-top: 0.3rem;
						font-size: 0.24rem;
						color: #90A2C7;
					}
				}
			}
			.left{
				float: left;
			}
		}
		.levelRules{
			padding: 0 0.24rem;
			background-color: #F5F6FA;
			nav{
				font-size:.24rem;
				line-height: 0.8rem;
				color: #7386AD;
				img{
					width: 0.2rem;
				}
			}
			.equity{
				margin-bottom: 0.4rem;
				background-color: #fff;
				width: 6.5rem;
				padding: 0.3rem 0.26rem;
				.head{
					position: relative;
					text-align: center;
					.xian{
						width: 3.4rem;
						height: 1px;
						background-color: #90A2C7;
						display: inline-block;
					}
					.text{
						position: absolute;
						left: 36%;
						top: 0;
						font-size:0.36rem;
						line-height: 0.5rem;
						color: #1A2642;
						display: inline-block;
						width: 2rem;
						background-color: #fff;
					}
				}
				.coupon{
					margin-top: 0.3rem;
					p{
						font-size:0.32rem;
						color: #1A2642;
						margin-bottom: 0.2rem;
					}
					article{
						margin-bottom: 0.2rem;
						background-color: #D8DFF0;
						height: 1rem;
						line-height: 1rem;
						padding-right: 0.4rem;
						.discount{
							width: 1.44rem;
							text-align: center;
							color: #1A2642;
							font-size: 0.42rem;
							span{
								font-size: 0.24rem;
							}
						}
						.quan{
							margin-top: 0.24rem;
							height: 0.52rem;
							line-height: 0.52rem;
							border-left: 1px dashed #1A2642;
							padding: 0 0.24rem;
							font-size:0.28rem;
							color: #1A2642;
						}
						.fr{
							color: #7386AD;
							font-size: 0.22rem;
						}
					}
					.account{
						font-size: 0.8rem;
						color: #1A2642;
						span{
							font-size: 0.24rem;
						}
					}
				}
			}
		}
	}
</style>