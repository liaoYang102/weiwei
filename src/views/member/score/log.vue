<template>
    <div>
        <scoreheader :title="title"></scoreheader>
        <div class="top">
            <div class="rules">
                <img src="../../../assets/images/member/rules.png" alt="">
                <span>积分规则</span>  
            </div>
            <div class="score">
                <span class="score-text">15526</span>
                <img src="../../../assets/images/member/Group3.png" alt=""><br>
                <span>信用积分</span>
            </div>
        </div>


        <scroller lock-x  height='-160' @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" style="background-color:#fff">
	      <div class="box">
	        <div class="log-box" v-for="(item, index) in logList">
                <div class="log-wrap">
                    <p class="contentOne">
                        <span>{{ item.content}}</span>
                        <span class="right" v-if=" item.score<0 ">{{ item.score }}</span>
                        <span class="right red" v-if=" item.score>0 ">{{ item.score }}</span>
                    </p>
                    <p class="contentTwo">
                        <span>{{ item.date }}</span>
                    </p>
                </div>   
	        </div>
        
	        <load-more tip="loading" id='loading'></load-more>
	      </div>
	    </scroller>
    </div>
</template>

<script>
import scoreheader from '../../../components/setting_header'
export default {
    components: {
        scoreheader
    },
    data() {
        return {
            title: '积分记录',
            logList: [
                { content: '年终积分清零', score: '-720', date: '2018-01-01 00:00:00' },
                { content: '购物赠送', score: '+100', date: '2017-12-07 12:02:45' },
                { content: '购买商城商品', score: '-100', date: '2017-12-07 12:02:45' }
            ]
        }
    },
    methods: {
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
	    }
    }
}
</script>


<style lang="less" scoped>
.top{
    width: 100%;
    height: 2.3rem;
    position: relative;
    background:#fff;
    background: -webkit-linear-gradient(left,  #5EC3FF, #106FE3); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left,  #0CF, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left,  #0CF, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
    .rules{
        position: relative;
        width: 2rem;
        left: 72%;
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #FFFFFF;
        letter-spacing: 0;
        padding-top: 0.3rem;
        img{
            position: absolute;
            width: 16%;
            top: 0.35rem;
        }
        span{
            display: inline-block;
            margin-left: 0.48rem;
        }
    }
    .score{
        font-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        margin-top: -0.2rem;
        .score-text{
            display: inline-block;
            font-size: 0.62rem;
        }
        img{
            width: 5%;
        }
    }
}
.log-box{
    width: 100%;
    height: 1.2rem;
    background: #ffffff;
    position: relative;
    .log-wrap{
        margin-left:0.4rem;
        border-bottom: 1px solid #D8DFF0;
        height: 1.2rem;
        margin-top:0.2rem;
        font-size: 0.35rem;
        .contentOne{
            position: relative;
            color: #1A2642;
            .right{
                position: absolute;
                right: 0.2rem;
            }
            .red{
                color: #F23030;
            }
        }
        .contentTwo{
            margin-top: 0.1rem;
            font-size: 0.3rem;
            color: #90A2C7;
        }
        
    }
}

</style>

