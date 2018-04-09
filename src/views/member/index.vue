<template>
	<header>
		<section>
			<div class="header">
				<div class="setting fl">
					<img src="../../assets/images/member/member_setting.png"> 
					<span>设置</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="avatar">
				<img alt="" src="http://www.cgc999.com/attachment/images/7/2018/02/D6G6C03wqGjOzlg6OzS0GjcOsOCL6g.jpg"> 
				<p class="nickname">yang</p> 
				<p class="status">1级会员</p>
			</div>
			<div class="account">
				<div class="universal">
					<p class="num"><span class="money">1000.49</span> <span class="circle"></span></p> 
					<p class="universalAccount">CGC通用积分</p>
				</div> 
				<div class="credit">
					<p class="num">2800.01 </p> 
					<p class="creditlAccount">信用积分</p>
				</div>
			</div>
		</section>
		<section>
			<div class="navigation">
				<ul>
					<li>
						<img src="../../assets/images/member/member_wallet.png"> 
						<span class="new"></span> 
						<p>我的钱包</p>
					</li> 
					<li>
						<img src="../../assets/images/member/member_cardpackage.png"> 
						<p>我的团队</p>
					</li> 
					<li>
						<img src="../../assets/images/member/member_account.png"> 
						<p>会员积分</p>
					</li> 
					<li>
						<img src="../../assets/images/member/member_code.png"> 
						<p>赚钱码</p>
					</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="banner">
				<img src="../../assets/images/member/member_banner.png" alt="">
			</div>
		</section>
		<section>
			<div class="list">
	            <ul>
                    <li>
                        <img src="../../assets/images/member/member_1.png" alt="">
                        <p class="listName">我的优惠券</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/member_2.png" alt="">
                        <p class="listName">我的订单</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/member_3.png" alt="">
                        <p class="listName">我的关注</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/member_4.png" alt="">
                        <p class="listName">收货地址</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/member_5.png" alt="">
                        <p class="listName">门禁系统</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/m_index17.png" alt="">
                        <p class="listName">幸运抽奖</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/m_index12.png" alt="">
                        <p class="listName">积分商城</p>
                    </li>
                    <li>
                        <img src="../../assets/images/member/m_index13.png" alt="">
                        <p class="listName">我的卡包</p>
                    </li>
	            </ul>
        	</div>
		</section>
	</header>
</template>

<script>
export default {
  data(){
  	return{

  	}
  }
}
</script>

<style	lang="less" scoped>
	header{
		padding-top: 0.561rem;
    	height: 100%;
    	.header{
	    	width: 100%;
		    padding-left: 0.34rem;
		    padding-right: 0.34rem;
		    .setting{
		    	width: 1.19rem;
			    height: 0.544rem;
			    border: 1px solid #EFEFEF;
			    border-radius: 0.85rem;
			    line-height: 0.48rem;
			    img{
			    	width: 0.21rem;
				    height: 0.21rem;
				    margin-left: 0.19rem;
				    vertical-align: middle;
			    }
			    span{
			    	font-size: 0.2rem;
			    }
		    }
    	}
    	.avatar{
    		width: 100%;
		    padding-top: 0.196rem;
		    text-align: center;
		    img{
		    	border-radius: 50%;
			    width: 1.5rem;
			    height: 1.5rem;
		    }
		    .nickname{
	    	    margin-top: 0.203rem;
			    font-size: 0.38rem;
			    color: #333333;
			    letter-spacing: 0;
		    }
		    .status{
		    	margin-top: 0.0708rem;
			    font-size: 0.26rem;
			    color: #9E9E9E;
			    letter-spacing: 0;
		    }
    	}
    	.account{
		    margin-top: 0.313rem;
		    margin-bottom: 0.186rem;
		    display: flex;
		    width: 100%;
		    .universal{
	    		flex: 1;
	    		text-align: center;
	    		.num{
				    font-size: 0.391rem;
				    color: #333333;
				    letter-spacing: 0;
				    position: relative;
				    line-height: 0.54rem;
				    .money{
				    	margin-right: 0.2rem;
				    }
				    .circle{
				    	position: absolute;
					    top: 0;
					    bottom: 0;
					    margin: auto 0;
					    display: inline-block;
					    border-radius: 50%;
					    width: 0.12rem;
					    height: 0.12rem;
					    background-color: #FF5B42;
				    }
	    		}
	    		.universalAccount{
	    			font-size: 0.204rem;
				    color: #A3A3A3;
				    letter-spacing: 0;
	    		}
			}
	    	.credit{
	    		flex: 1;
	    		text-align: center;
	    		.num{
				    font-size: 0.391rem;
				    color: #333333;
				    letter-spacing: 0;
				    position: relative;
				    line-height: 0.54rem;
	    		}
	    		.creditlAccount{
				    font-size: 0.204rem;
				    color: #A3A3A3;
				    letter-spacing: 0;
	    		}
	    	}
    	}
    	.navigation{
    		width: 100%;
    		padding-bottom:0.2rem;
		    border-top: 0.17rem solid #f5f8f9;
		    border-bottom: 0.17rem solid #f5f8f9;
		    ul{
		    	padding-left: 0.2rem;
			    padding-right: 0.2rem;
			    padding-top: 0.26rem;
			    display: flex;
			    li{
		    	    flex: 1;
				    text-align: center;
				    position: relative;
				    img{
			    	    width: 0.442rem;
						height: 0.442rem;
				    }
				    .new{
				    	position: absolute;
					    background: #FF5B42;
					    border: 1px solid #FFFFFF;
					    width: 0.2rem;
					    height: 0.2rem;
					    border-radius: 50%;
					    left: 0.84rem;
					    top: -2px;
				    }
				    p{
				    	font-size: 0.204rem;
					    color: #7D7D7D;
					    letter-spacing: 0;
				    }
			    }
		    }
    	}
    	.banner{
    		width: 100%;
    		height: 2.2rem;
    		img{
			    width: 100%;
   				height: 2.2rem;
    		}
    	}
    	.list{
    		padding-bottom: 50px;
    		ul{
			    display: flex;
			    flex-wrap: wrap;
			    padding-bottom: 0.17rem;
			    border-top: 0.17rem solid #f5f8f9;
			    border-bottom: 0.17rem solid #f5f8f9;
			    li{
			    	width: 25%;
		    	    text-align: center;
    				height: 1.5rem;
    				img{
    					margin-top: 0.3rem;
					    margin-bottom: 0.1rem;
					    width: 0.6rem;
					    height: 0.6rem;
    				}
    				.listName{
					    font-size: 0.26rem;
					    color: #464646;
					    letter-spacing: 0;
    				}
			    }
    		}
    	}
	}
</style>