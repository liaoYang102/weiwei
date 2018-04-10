<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/images/user/logo.png" alt="">
        </div> 
        <p class="tit">{{ title }}</p> 
        <div class="xian">
            <img src="../assets/images/user/xian.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String  //定义传值的类型<br>    }
    }
}
</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 4.8rem;
        color: #f00;
        background: url('../assets/images/user/h_bg.png');
        background-size: 100% 100%;
        overflow: hidden;
        .logo {
            width: 1.75rem;
            margin: 0.6rem auto 0;
            img{
                width: 100%;
            }
        }
        .tit {
            font-size: 0.4rem;
            color: #fff;
            text-align: center;
            margin-top: .1rem;
        }
        .xian {
            width: 100%;
            height: 2.8rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        
    }
</style>

