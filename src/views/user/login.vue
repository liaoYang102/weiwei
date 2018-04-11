<template>
    <div>
        <Top :title="title"></Top>

        <div class="content">
            <div class="inputwrap">
                <div class="input-row">
                    <i class="iconfont icon-shouji"></i> 
                    <input type="text" placeholder="输入手机号" v-model="user.phone">
                </div>
                <div class="input-row">
                    <i class="iconfont icon-suo"></i> 
                    <input type="password" placeholder="输入密码" v-model="user.password"> 
                    <span class="iconfont icon-yanjing"></span>
                </div>
                <p class="fogotpass">
                    <router-link to="/user/change">忘记密码</router-link> 
                </p>
            </div>

            <div class="login" @click="login();">登录</div>
            
            <div class="res">
                <router-link to="/user/reg">新用户注册</router-link>
            </div>
            
        </div>

        <toast v-model="toastShow" @on-hide="onHide">
            {{ message }}
        </toast>

        
  </div>
</template>

<script>
import Top from '../../components/user_header'
export default {
    data () {
        return {
            title: '用户登录',
            user: {
                phone: '',
                password: null
            },
            toastShow: false,
            message: '登录成功'
        }
    },
    components: {
        Top
    },
    methods: {
        onHide () {
            console.log('on hide')
        },
        login: function() {
            // 登录校验
			let  par = JSON.parse(JSON.stringify(this.user)) ;
            console.log("--", par) 	
            this.toastShow = true;
        }
    }
}
</script>

<style lang="less" scoped>
.weui-toast {
    background: #fff;
    color: #256fff;
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
