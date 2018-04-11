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
            title: '积分记录'
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
        left: 70%;
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
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
            margin-left: 0.5rem;
        }
    }
    .score{
        font-family: PingFangSC-Regular;
        font-size: 0.33rem;
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
</style>

