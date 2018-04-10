<template>
    <div class="content">
        <settingHeader :title="title"></settingHeader>
        <div class="top">
            <group>
                <cell-box is-link>切换账号</cell-box>
                <cell-box is-link>安全中心</cell-box>
                <cell-box is-link>消息设置</cell-box>
                <cell-box is-link>更换手机号</cell-box>
            </group>
        </div>
        
        
        <group>
            <cell-box is-link>重置登录密码</cell-box>
        </group>
        

        <div class="bottom">
            <group>
                <cell-box is-link>关于</cell-box>
            </group>
        </div>

        <div class="btn">
            <div class="exit">退出登录</div>
        </div>
    </div>
</template>

<script>
import settingHeader from '../../../components/setting_header'

export default {
    data(){
        return{
            title: '设置'
        }
    },
    components: {
        settingHeader
    },
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

