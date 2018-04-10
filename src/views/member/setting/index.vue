<template>
    <div class="content">
        <settingHeader :title="title"></settingHeader>
        <div class="top">
            <group>
                <cell title="切换账号" is-link @click.native="ShowConfirm"></cell>
                <cell title="安全中心" is-link></cell>
                <cell title="消息设置" is-link></cell>
                <cell title="更换手机号" is-link link="/member/setting/oldphone"></cell>
            </group>
        </div>
        
        <group>
            <cell title="重置登录密码" is-link link="/user/change"></cell>
        </group>
        
        <div class="bottom">
            <group>
                <cell title="关于" is-link></cell>
            </group>
        </div>

        <div class="btn">
            <div class="exit" @click="exitlogin">退出登录</div>
        </div>

        <!-- 确认框 -->
        <div v-transfer-dom>
            <confirm v-model="show" :title="msgTitle" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
                <p style="text-align:center;">{{ message }}</p>
            </confirm>
        </div>
    </div>
</template>

<script>
import settingHeader from '../../../components/setting_header'

export default {
    data(){
        return{
            title: '设置',
            show: false,
            msgTitle: '提示',
            message: '是否切换账号？'
        }
    },
    components: {
        settingHeader
    },
    methods: {
        onCancel () {
            console.log('on cancel')
        },
        onConfirm (msg) {
            console.log('on confirm')
            let path = '/user/login'
            this.$router.push({path: path})
            if (msg) {
                alert(msg)
            }
        },
        onHide () {
            console.log('on hide')
        },
        onShow () {
            console.log('on show')
        },
        ShowConfirm() {
            this.show = true
        },
        exitlogin() {
            let path = '/'
            this.$router.push({path: path})
        }

    }
}
</script>

<style lang="less" scoped>
.content {
    overflow: hidden;
    background: #efeff4;
    height: 100%;
    .top{
        position: relative;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        background-color: #fff;
    }
    
    .bottom{
        height: 100%;
        padding-top: -0.2rem;
        background-color: #fff;
    }
    .btn {
        width: 6.4rem;
        position: fixed;
        left: 50%;
        margin-left: -3.2rem;
        bottom: 0.6rem;
        height: 0.66rem;
        .exit {
            letter-spacing: 2px;
            border-color: #276cff;
            background-image: linear-gradient(30deg, #246bfe, #5b90fe);
            border-radius: 0.5rem!important;
            width: 4.9rem;
            height: 0.66rem;
            border: none;
            font-size: .35rem;
            margin: 0 auto;
            display: block;
            color: #fff;
            text-align: center;
            line-height: 0.66rem;
        }
    }
}
</style>

