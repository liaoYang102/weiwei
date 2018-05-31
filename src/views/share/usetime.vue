<template>
	<div class="usetime">
		<settingHeader :title="title"></settingHeader>
		<div class="lunbo">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in data" :key="index">
					<div class="sw_wrap">
						<div class="content">
							<p class="tit ellipsis">{{item.name}}<span>（多台设备时，可左右滑动切换）</span></p>
							<p class="xinghao"><span><img :src="item.logo" alt=""></span>{{item.num}}</p>
						</div>
					</div>
				</swiper-slide>
		        <!-- <swiper-slide>
		        					<div class="sw_wrap">
		        						<div class="content">
		        							<p class="tit ellipsis">设备1<span>（多台设备时，可左右滑动切换）</span></p>
		        							<p class="xinghao"><span><img :src="'../../../static/images/sb_logo.png'" alt=""></span>威伐光-60005</p>
		        						</div>
		        					</div>
		        </swiper-slide> -->
		        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
			</swiper>
		</div>

		<div class="start" v-show="startUp==false || slideStatus==false">
			<div class="cont" @click="startEquipment">
				<img src="../../assets/images/share/button0.png" alt="" class="btn0">
				<!-- <img v-if="shBtn==false" :src="lanBtn" alt="" class="btn0">
				<img v-if="shBtn==true" :src="shlanBtn" alt="" class="btn0"> -->
				<img src="../../assets/images/share/sh_btn0.png" alt="" class="sh_btn0">
				<div class="nr">
					<p class="tit">启动</p>
					<p class="text">开启后开始计时</p>
					<p class="time">{{remainTime}}</p>
				</div>
			</div>
		</div>

		<div class="suspend" v-show="startUp==true || slideStatus==true">
			<div class="cont" @click="suspendEquipment">
				<img src="../../assets/images/share/button2.png" alt="" class="btn0">
				<img src="../../assets/images/share/sh_btn2.png" alt="" class="sh_btn0">
				<div class="nr">
					<p class="tit">暂停</p>
					<p class="text">暂停后可继续开启</p>
					<p class="time">{{remainTime}}</p>
				</div>
			</div>
		</div>

		<div class="enduse" @click=endOfUse>结束使用</div>
		
		<div class="footer">
			<!-- <div class="num">设备编号：60005</div>
			<div class="address ellipsis">所在门店：广东省成高成大健康管理公司</div> -->
			<div class="num">设备编号：{{changeEquiDate.sbnum ? changeEquiDate.sbnum : data[0].sbnum}}</div>
			<div class="address ellipsis">所在门店：{{changeEquiDate.storename ? changeEquiDate.storename : data[0].storename}}</div>
		</div>

	</div>
</template>

<script>
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import settingHeader from '../../components/setting_header'


	export default {
		data() {
			var _this = this;
			return {
				title:"使用时间",
				changeEquiDate:{},
				// _this:this,
				swiperOption:{
					slidesPerView:'auto',
					centeredSlides:true,
					spaceBetween:30,
					pagination: {
				        el: '.swiper-pagination',
				        clickable: true
				    },
				    on:{
				    	slideChangeTransitionEnd:function(e){

				    		var info = _this.data[this.activeIndex];
				    		_this.changeEquiDate=info;

				    		_this.onIndex = this.activeIndex;
				    		// console.log(_this.onIndex)
				    		_this.closeIndex = this.activeIndex;//关闭的机器

				    		clearInterval(_this.clearTime);
				    		
				    		//检查设备是否已开启
				    		if(info.status == 1){

					    		//倒计时
					    		_this.countDown(info.overtime);

				    			//设备是否开启状态
				    			if(info.isopen == 1){
									_this.startUp=true;
								 	_this.slideStatus = true;
				    			}else{
								 	_this.startUp=false;
								 	_this.slideStatus = false;
					    		}

							 	
				    		}else{
							 	_this.startUp=false;
							 	_this.slideStatus = false;
				    			_this.remainTime = "";
				    		}
				    	}
				    }
				},
				startUp:false,//控制暂停或启动
				shBtn:false,
				lanBtn:'../../../static/images/button0.png',
				shlanBtn:'../../../static/images/on_btn0.png',
				//模拟数据
				data:[
					{
						name:'设备1',
						logo:'./static/images/sb_logo.png',
						num:'威伐光-60005',
						sbnum:'60005',
						status:1,	//设备已开启过
						isopen:1,	//设备是否开启 1开启 0关闭
						overtime:1000,
						storename:'随便取个名字1'
					},
					{
						name:'设备2',
						logo:'./static/images/sb_logo.png',
						num:'威伐光-60006',
						sbnum:'60006',
						status:0,	//设备未开启过
						isopen:0,	//设备是否开启 1开启 0关闭
						overtime:1200,
						storename:'随便取个名字2'
					}
				],
				clearTime : '', //定时器清除使用的
				remainTime : '', //当前设备剩余时间 01:00:00
				onIndex : 0, //当前显示设备的下标
				slideStatus:false,//当前机器状态
				closeIndex:0,//关闭的机器index


			}
				
		},
		components:{
			settingHeader,
			swiper,
			swiperSlide
		},
		/*created(){

		},*/
		mounted(){
			var data=this.data,
				_this=this;
			// console.log(data[0].overtime)

			for(var i in data){

				if(data[i].status==1){
					_this.outTime(data[i]);
					if(i==0){
					 	_this.startUp=true;
					 	_this.slideStatus = true;
						_this.countDown(data[i].overtime);
					}

				}
			}


		},
		computed:{
			
		},
		methods:{
			 startEquipment(){//开启设备

			 	this.startUp=true;
			 	this.slideStatus = true;
			 	var info = this.data[this.onIndex];
				
				//首次开启设备，定时器计时
				if(info.status == 0){
					this.outTime(info);
				}

				//开启设备
				this.data[this.onIndex].status = 1;
				this.data[this.onIndex].isopen = 1;

			 	clearInterval(this.clearTime);
				this.countDown(info.overtime);
			 	
			 },
			 suspendEquipment(){//暂停设备
			 	this.startUp=false;
			 	this.slideStatus = false;

				//暂停设备
				this.data[this.onIndex].isopen = 0;

			 },
			outTime(info){//计算所有设备的剩余时间
				setInterval(function(){
                	--info.overtime;
                },998);
			},
			countDown(overtime){//当前设备的倒计时

				var _this=this;
				_this.setTime(overtime);

				_this.clearTime = setInterval(function(){

					if(overtime==0){
						_this.useend();
						return;
					}
					--overtime;
					_this.setTime(overtime);
						
                },998);
			},
			setTime(overtime){//设置设备剩余时间
				var hour=Math.floor(overtime/60/60),
                min=Math.floor((overtime - hour*60*60)/60),
                sec=Math.floor(overtime - hour*60*60 - min*60);

                hour=hour > 9 ? hour : '0'+hour;
                min=min > 9 ? min : '0'+min;
                sec=sec > 9 ? sec : '0' + sec;

                this.remainTime = hour + ":" + min + ":" + sec;
			},
			useend(){
				clearInterval(this.clearTime);
			},
			endOfUse(){
				alert(this.closeIndex)
			}

		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.usetime{
		width: 100%;
		height: 100%;
		/*background: #fff;*/
		background:linear-gradient(180deg,rgba(241,245,249,1),rgba(216,229,245,1));
		.swiper-slide {
		    width: 70%;
		}
		.swiper-slide:nth-child(2n) {
		    width: 70%;
		}
/* 		.swiper-slide:nth-child(3n) {
    width: 20%;
} */
		.swiper-wrapper{
			margin-left: -.4rem;
		}
		.lunbo{
			padding-top: .2rem;
		}
		.sw_wrap{
			background: #fff;
			padding: 2px;
			border-radius: .7rem;
			height: 1.56rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.content{
				background: #E6EEF7;
				border-radius: .7rem;
				height: 1.5rem;
				width: 100%;
				/*padding: .3rem 0;*/
				.tit{
					font-size: .22rem;
					color: #141C33;
					text-align: center;
					margin-top: .3rem;
					span{
						color: #7F8FBD;
						display: inline-block;
					}
				}
				.xinghao{
					/*padding-left: .2rem;*/
					text-align: center;
					margin-top: .2rem;
					img{
						width: .3rem;
						height: .3rem;
						margin-right: .1rem;
						position: relative;
						top: .05rem;
					}
				}
			}
		}
		.start,.suspend{
			width: 100%;
			overflow: hidden;
			height: 7.6rem;
			/*.border;*/
			/*margin-top: .2rem;*/
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			.cont{
				width: 4.8rem;
				height: 4.8rem;
				position: relative;
				/*.border;*/
				.btn0{
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					z-index: 2;
				}
				.sh_btn0{
					width: 7.6rem;
				    height: 7rem;
				    position: absolute;
				    top: -1rem;
				    left: -1.4rem;
				    z-index: 1;
				    animation:heartbeat 3s linear infinite;
				}
				.nr{
					/*.border;*/
					position: relative;
					text-align: center;
					z-index: 3;
					padding-top: 1.5rem;
					color: #fff;
					.tit{
						font-size: .56rem;
						font-weight: bold;
					}
					.text{
						font-size: .28rem;
						margin-top: .2rem;
					}
					.time{
						font-size: .36rem;
						margin-top: .48rem;
					}
				}
			}
		}
		.enduse{
			color: #7386AD;
			font-size: .28rem;
			text-align: center;
			/*margin-top: .2rem;*/
			margin:-.2rem auto 0;
			width: 3rem;
			height: .6rem;
			line-height: .6rem;
			/*.border;*/
		}
		.footer{
			width: 100%;
			height: 1.4rem;
			background: url('../../assets/images/share/sharefoot.png');
			background-size: 100% 100%;
			position: fixed;
			bottom: 0;
			padding-left: .54rem;
			.num{
				font-size: .32rem;
				color: #1A2642;
				font-weight: bold;
				margin-top: .4rem;
			}
			.address{
				font-size: .24rem;
				color: #1A2642;
				margin-top: .1rem;
				width: 6.5rem;
			}
		}
	}

	@keyframes heartbeat{
		/* 0%{transform: scale(0.8,0.8);}
		    	25%{transform: scale(1,1);}
		    	100%{transform: scale(0.8,0.8);} */
		0%{transform: scale(1,1);}
		25%{transform: scale(1.2,1.2);}
		100%{transform: scale(1,1);} 
		/*  0% {
		   transform: scale(1);
		 }
		 20% {
		   transform: scale(1.2);
		 }
		 40% {
		   transform: scale(1);
		 }
		 60% {
		   transform: scale(1.2);
		 }
		 80% {
		   transform: scale(1);
		 }
		 100% {
		   transform: scale(1);
		 } */
	}
</style>
<style>
	.usetime .header{
		background: transparent !important;
	}
</style>