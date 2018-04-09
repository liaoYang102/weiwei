<template>
    <div>
        <div class="header">
            <div class="logo">
              <img src="../../assets/images/user/logo.png" alt="">
            </div> 
            <p class="tit">用户登录</p> 
            <div class="xian">
                <img src="../../assets/images/user/xian.png" alt="">
            </div>
        </div>

        <div class="content">
            <div class="inputwrap">
                <group>
                    <x-input title="必须输入2333" placeholder="输入手机号">
                        <i class="iconfont icon-shouji"></i>
                    </x-input>
                    <x-input title="必须输入2333" placeholder="输入密码">
                        <i class="iconfont icon-suo"></i>
                        <span class="iconfont icon-yanjing"></span>
                    </x-input>
                </group>
                <p class="fogotpass">
                    <a href="./index.php?i=7&amp;c=entry&amp;m=mx_shop&amp;do=mobile&amp;r=user.change" style="color: rgb(106, 150, 243);">忘记密码</a>
                </p>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 4.12rem;
        color: #f00;
        background: url('../../assets/images/user/h_bg.png');
        background-size: 100% 100%;
        overflow: hidden;
        .logo {
            width: 1.54rem;
            margin: 0.48rem auto 0;
        }
        .tit {
            font-size: 0.3rem;
            color: #fff;
            text-align: center;
            margin-top: .1rem;
        }
        .xian {
            width: 100%;
            height: 2.4rem;
        }
    }
    .content {
        width: 76%;
        margin: .5rem auto;
        .inputwrap {
            position: relative;
             i {
                position: absolute;
                top: 0.16rem;
                left: 12px;
                color: #497be5;
                font-size: 0.35rem;
            }
            .icon-yanjing {
                position: absolute;
                top: 0.16rem;
                right: 12px;
                color: #497be5;
                font-size: 0.4rem;
            }
            .fogotpass {
                color: #6a96f3;
                font-size: 0.28rem;
                text-align: right;
                position: relative;
                top: -0.2rem;
            }
        }
    }
</style>
