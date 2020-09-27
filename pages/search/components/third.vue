<template>
    <view class="search-third" v-if="step === 3">
        <view class="t-item border-1px-bottom" :key="key" v-for="(item, key) in 5">
            <view class="s-goods" @click="nav('/pages/goods/index')">
                <view class="g-top">
                    <view class="t-pic" data-ratio="1:1">
                        <img src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF" alt="">
                    </view>
                    <view class="t-desc">
                        <p>小米手机，更好用的大屏手机</p>
                    </view>
                </view>
                <view class="g-bottom">
                    <view class="b-name">
                        <h4>小米8</h4>
                    </view>
                    <view class="b-price">
                        <text>￥1999.00</text>
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
    @import '../../../config/css/var';
    .search-third{
        display: flex;
        flex-wrap: wrap;
        padding-top: 176upx;
        .t-item{
            position: relative;
            flex-basis: 50%;
            width: 0;
            .s-goods{
                .g-top{
                    padding:0 28upx;
                    background: white;
                    .t-pic {
                        width:100%;
                        height: 319upx;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                    .t-desc{
                        p{
                            padding:14upx 0;
                            white-space: nowrap;
                            overflow-x: hidden;
                            text-overflow: ellipsis;
                            color:#845f3f;
                        }
                    }
                }
                .g-bottom{
                    padding:0 28upx;
                    background: #f7f7f7;
                    .b-name{
                        padding-top:15upx;
                        h4{
                            white-space: nowrap;
                            overflow-x: hidden;
                            text-overflow: ellipsis;
                            font-size: 32upx;
                            color:#333;
                        }
                    }
                    .b-price{
                        padding:15upx 0;
                        text{
                            color:#a21c20;
                        }
                    }
                }
            }
            &:nth-child(2n + 1) {
                &::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 0;
                    border-right: 1upx solid @border-color;
                    transform: scaleX(0.5);
                }
            }
        }
    }
</style>
