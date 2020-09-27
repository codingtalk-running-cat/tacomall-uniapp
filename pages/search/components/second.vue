<template>
    <view class="search-second" v-if="step === 2">
        <view class="s-section">
            <view class="s-header">
                <view class="h-left">
                    <view>大家都在看</view>
                </view>
                <view class="h-right">
                </view>
            </view>
            <view class="s-content" style="padding:0.37333rem;">
                <view class="s-recommend">
                    <view class="r-pic">
                        <img
                             src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
                             alt="">
                    </view>
                    <view class="r-info">
                        <h4>小米8</h4>
                        <view>￥2499.00</view>
                    </view>
                    <view class="r-buy">
                        <view>选购</view>
                        <i class="eosfont">&#xe733;</i>
                    </view>
                </view>
            </view>
        </view>
        <view class="s-section">
            <view class="s-header">
                <view class="h-left">
                    <view>大家都在看</view>
                </view>
                <view class="h-right">
                </view>
            </view>
            <view class="s-content" style="padding:0.37333rem;">
                <view class="s-hot">
                    <view class="h-item border-1px-bottom">
                        <view class="i-left">
                            <view>华为play</view>
                        </view>
                        <view class="i-right">
                            <view>￥1999.00</view>
                        </view>
                    </view>
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
    .search-second{
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
                    view{
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
                .s-recommend {
                    display: flex;
                    height: 110upx;

                    .r-pic {
                        flex-basis: 110upx;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .r-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        flex: 1;

                        h4 {
                            color: #333;
                        }

                        view {
                            padding-top: 10upx;
                            color: #666;
                        }
                    }

                    .r-buy {
                        display: flex;
                        align-items: center;
                        flex-grow: 0;
                        color: #b4282d;
                    }
                }

                .s-hot {
                    .h-item {
                        display: flex;
                        justify-content: space-between;
                        height: 88upx;

                        .i-left {
                            display: flex;
                            align-items: center;

                            view {
                                color: #333;
                            }
                        }

                        .i-right {
                            display: flex;
                            align-items: center;

                            view {
                                color: #666;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
