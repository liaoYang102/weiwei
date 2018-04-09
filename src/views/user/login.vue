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
                <div class="input-row">
                    <i class="iconfont icon-shouji"></i> 
                    <input type="text" placeholder="输入手机号" id="phonum">
                </div>
                <div class="input-row">
                    <i class="iconfont icon-suo"></i> 
                    <input type="password" placeholder="输入密码" id="pass"> 
                    <span class="iconfont icon-yanjing"></span>
                </div>
                <p class="fogotpass">
                    <a href="./index.php?i=7&amp;c=entry&amp;m=mx_shop&amp;do=mobile&amp;r=user.change" style="color: rgb(106, 150, 243);">忘记密码</a>
                </p>
            </div>

            <div class="login">登录</div>
            
            <div class="res">新用户注册</div>
            
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
        height: 4.8rem;
        color: #f00;
        background: url('../../assets/images/user/h_bg.png');
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
    .content {
        width: 76%;
        margin: .5rem auto;
        .inputwrap {
            position: relative;
            .input-row {
                position: relative;
                margin-bottom: .3rem;
                i {
                    position: absolute;
                    top: 0.13rem;
                    left: 0.2rem;
                    color: #497be5;
                    font-size: 0.35rem;
                }
                .icon-yanjing {
                    position: absolute;
                    top: 0.12rem;
                    right: 0.25rem;
                    color: #497be5;
                    font-size: 0.4rem;
                }
                input {
                    width: 85%;
                    border: 1px solid #82b1ff;
                    border-radius: 20px;
                    padding: 0.05rem 0 0.05rem 0.8rem;
                    color: #9cb7f2;
                    font-size: 0.28rem;
                    height: 0.66rem;
                    background: #faffbd;
                }
            }
            .fogotpass {
                color: #6a96f3;
                font-size: 0.28rem;
                text-align: right;
                position: relative;
                top: -0.2rem;
            }
        }
        .login {
            width: 100%;
            background-image:linear-gradient(30deg, #246bfe, #5b90fe);
            height: 0.76rem;
            line-height: 0.76rem;
            text-align: center;
            box-shadow: 2px 3px 5px #c3d5fd;
            color: #fff;
            font-size: 16px;
            border-radius: 20px;
            margin-top: .2rem;
        }
        .res {
            width: 100%;
            height: 0.73rem;
            line-height: 0.73rem;
            text-align: center;
            color: #fff;
            font-size: 16px;
            border-radius: 20px;
            margin-top: .2rem;
            border: 1px solid #82b1ff;
            color: #5686ed;
            margin-top: .5rem;
        }
    }
</style>
