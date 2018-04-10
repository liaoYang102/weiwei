<template>
    <div id="content" class="content">
        <settingHeader :title="title"></settingHeader>
        <div class="inputwrap">
            <div class="tel">
                <div class="input-row">
                    <i class="iconfont icon-shouji"></i> 
                    <input type="number" name="phone" placeholder="输入你本人手机号">
                </div>
            </div> 
            <div class="code">
                <div class="input-row">
                    <i class="iconfont icon-buchongiconsvg02"></i> 
                    <input type="text" placeholder="输入验证码" class="yzm">
                </div> 
                <button class="send_yzm">获取验证码</button>
            </div> 
            <div class="btn">
                <button type="button">确定</button>
            </div> 
        </div>
    </div>
</template>

<script>
import settingHeader from '../../../components/setting_header'

export default {
    data(){
        return{
            title: '更换手机号'
        }
    },
    components: {
        settingHeader
    }
}
</script>


<style lang="less" scoped>
.content {
    overflow: hidden;
    height: 100%;
    background-color: #fff;
    .inputwrap {
        position: relative;
        padding-top: 0.98rem;
        input::-webkit-input-placeholder {
            color: #97bcf2 !important; // WebKit browsers 
        }
        input:-moz-placeholder {
            color: #97bcf2 !important; // Mozilla Firefox 4 to 18 
        }
        input::-moz-placeholder {
            color: #97bcf2 !important; //Mozilla Firefox 19+ /
        }
        input:-ms-input-placeholder {
            color: #97bcf2 !important; //Internet Explorer 10+ */
        }
        .tel {
            margin-left: 0.9rem;
            margin-bottom: 0.32rem;
            .input-row {
                width: 4.76rem;
                position: relative;
                i {
                    position: absolute;
                    vertical-align: middle;
                    top: 0.1rem;
                    left: .2rem;
                    color: #497be5;
                    font-size: 0.4rem;
                }
                input {
                    border: 1px solid #82b1ff;
                    border-radius: 20px;
                    padding: 0.05rem 0.05rem 0.05rem 0.8rem;
                    color: #97bcf2;
                    font-size: 0.3rem;
                    height: 0.6rem;
                    width: 98%;
                }
            }

        }
        .code{
            .input-row{
                position: relative;
                line-height: 0.36rem;
                margin-left: 0.88rem;
                width: 3.25rem;
                text-align: center;
                display: inline-block;
                i {
                    position: absolute;
                    vertical-align: middle;
                    top: 0.22rem;
                    left: .2rem;
                    color: #497be5;
                    font-size: 0.4rem;
                }
                input {
                    border: 1px solid #82b1ff;
                    border-radius: 20px;
                    padding: 0.05rem 0 0.05rem 0.8rem;
                    color: #97bcf2;
                    font-size: 0.3rem;
                    height: 0.6rem;
                    width: 2.6rem;
                }
            }
            button {
                margin-left: 0.3rem;
                border: 1px solid #82b1ff;
                border-radius: 20px;
                width: 2rem;
                background-color: #ecf4ff;
                color: #97bcf2;
                font-size: 0.28rem;
                height: 0.75rem;
            }
        }

        .btn {
            width: 100%;
            text-align: center;
            button {
                letter-spacing: 2px;
                box-shadow: 4px 4px 14px #c4d2ee;
                padding: 9px 12px!important;
                border: none;
                background-image: linear-gradient(30deg, #246bfe, #5b90fe);
                border-radius: 0.5rem!important;
                width: 5.75rem;
                margin-top: 2.15rem;
                color: #fff;
                font-size: 0.3rem;
            }
        }

    }
}
</style>

