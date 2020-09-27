<template>
    <view class="search-first" v-if="step === 1">
        <view class="s-section">
            <view class="s-header">
                <view class="h-left">
                    <text>热门搜索</text>
                </view>
                <view class="h-right">
                </view>
            </view>
            <view class="s-content">
                <view class="f-hot">
                    <text>小米手机</text>
                    <text>Gucci</text>
                </view>
            </view>
        </view>
        <view class="s-section">
            <view class="s-header">
                <view class="h-left">
                    <text>历史纪录</text>
                </view>
                <view class="h-right">
                    <i class="eosfont">&#xe631;</i>
                </view>
            </view>
            <view class="s-content">
                <view class="f-history">
                    <text>华为手机</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['step']
    }
</script>

<style lang="less" scoped>
    @import '../../../config/css/var';
    .search-first{
        padding-top: 88upx;
        .s-section{
            background: #f4f4f4;
            .s-header{
                display: flex;
                justify-content: space-between;
                height: 75upx;
                padding:0 28upx;
                .h-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    text{
                        padding-bottom:20upx;
                        color:#666;
                    }
                }
                .h-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    i{
                        padding-bottom:20upx;
                        color:#666;
                    }
                }
            }
            .s-content{
                padding:34upx 28upx 52upx 28upx;
                background: white;
                .f-hot {
                    display: flex;
                    flex-wrap: wrap;

                    text {
                        flex-grow: 0;
                        height: 50upx;
                        line-height: 50upx;
                        padding: 0 22upx;
                        margin: 0 20upx 20upx 0;
                        border-radius: 5upx;
                        background: @bg-color;
                        color: #666;
                    }
                }

                .f-history {
                    display: flex;
                    flex-wrap: wrap;

                    text {
                        flex-grow: 0;
                        height: 50upx;
                        line-height: 50upx;
                        padding: 0 22upx;
                        margin: 0 20upx 20upx 0;
                        box-sizing: border-box;
                        border-radius: 5upx;
                        border: 1px solid @border-color;
                        color: #666;
                    }
                }
            }
        }
    }
</style>
