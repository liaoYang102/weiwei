<template>
	<section v-model="dialogConfig">
		<!-- 弹出框 -->
        <div v-transfer-dom class="vue-dialog">
          	<x-dialog v-model="showDialog" :hide-on-blur="true">
          		<div class="dia">
          			<div class="img"><img :src="imgSrc"></div>
	          		<div class="dia_top">
						<p class="title">{{ dialogConfig.headMessage}}</p>
						<span class="note">{{ dialogConfig.message}}</span>
						<div class="btnList" @click="hide">
							<div class="canel" v-if="dialogConfig.buttons.length ==2">{{ dialogConfig.buttons[1]}}</div>
							<div class="btn">{{ dialogConfig.buttons[0]}}</div>
						</div>
					</div>
          		</div>
          		
          	</x-dialog>
        </div>
	</section>
</template>

<script>
	import { XDialog} from 'vux'
	export default{
		props:{
			dialogConfig: Object
		},
		components:{
			XDialog
		},
		data(){
			return{
				showDialog: true,
				imgSrc: './static/images/prompt.png'
			}
		},
		mounted(){
			this.show()
		},
		methods:{
			show(){
				if(this.dialogConfig.type == 'warning'){
					this.imgSrc = './static/images/prompt.png'
				}else if(this.dialogConfig.type == 'success'){
					this.imgSrc = './static/images/success.png'
				}else{
					this.imgSrc = './static/images/failure.png'
				}
			},
			hide(){
				this.showDialog = false
			}
		}
	}
</script>

<style lang="less" scoped>
.dia{
	width: 100%;
	color: #1A2642;
	position: relative;
	height: 5.37rem;
	.img{
		position: absolute;
		top: -11%;
		left: 20%;
		img{
			width: 50%;
		}
	}
	.dia_top {
		width: 100%;
		height: 3.29rem;
		background-color: #fff;
		text-align: center;
		padding-top: 1.38rem;
		margin-top: 0.7rem;
		border-radius: 0.16rem;
		font-size: 0.28rem;
	  	.title {
	  	  font-size: 0.42rem;
	  	  line-height: 0.59rem;
	  	  margin-bottom: 0.12rem; 
	  	}
	  	.note{
	  		color: #90A2C7;
	  	}
	  	.btnList{
	  		margin: 0.97rem auto;
	  		width: 4.6rem;
	  		display: flex;
	  		.btn{
	  			flex: 1;
	  			background-color: #336FFF;
	  			text-align: center;
	  			line-height: 0.54rem;
	  			color: #fff;
	  			border-radius: 0.09rem;
	  			padding: 0.19rem 0;
	  		}
	  		.canel{
	  			border: 1px solid #336FFF;
	  			width:2.2rem;
	  			border-radius:0.09rem;
	  			text-align: center;
	  			color: #336FFF;
	  			padding: 0.19rem 0;
	  			margin-right: 0.2rem;
	  		}
	  	}

	}
}

</style>

<style lang="less">
	.vue-dialog{
		.weui-dialog{
			width: 71%;
			max-width: 71%;
			background-color: rgba(255,255,255,0);
		}
	}
</style>