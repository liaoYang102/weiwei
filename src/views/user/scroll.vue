<template>

	<div class="wrapper" ref="wrapper">
		<div class="content">
			<div class="list" v-for="(item,index) in list">{{index}}</div>
		</div>
	</div>

</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				list: [1, 2, 3, 4, 5, 6, 7, 1, 8, 9, 10, 11, 12],
				show:false
			}
		},
		components: {
			
		},
		mounted() {
			// this.$nextTick(() => {
			this.InitScroll()

			// })
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
							this.show = true
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
				console.log(123)
				var _this = this
				setTimeout(function(){
					_this.show = false
					_this.list.push(1,2,3)
				},3000)
			}
		}
	}
</script>
<style>
	.wrapper {
		height: 300px;
		overflow: hidden;
		border: 1px solid #333;
	}
	
	.list {
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
</style>