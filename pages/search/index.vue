<template>
    <view class="page search">
        <view class="s-header">
            <view class="h-top">
                <view class="t-search">
                    <text class="iconfont">&#xe652;</text>
                    <input type="search" placeholder="小米超级品牌日" v-model="form.keyword">
                    <text class="iconfont clear">&#xe61a;</text>
                </view>
                <view class="t-right" @click="doSearch">
                    <text>搜索</text>
                </view>
            </view>
            <view class="h-bottom" v-if="step === 3">
                <view class="b-item b-item-active">
                    <view class="i-text">
                        <text>综合</text>
                    </view>
                    <view class="i-icon i-icon-down">
                        <text class="iconfont">&#xe734;</text>
                        <text class="iconfont">&#xe6e9;</text>
                    </view>
                </view>
                <view class="b-item">
                    <text>价格</text>
                </view>
                <view class="b-item">
                    <text>品牌</text>
                </view>
                <view class="b-item">
                    <text>分类</text>
                </view>
            </view>
        </view>
        <view class="s-main" :class="{'s-main-with-bottom': step === 3}">
            <view class="m-first" v-if="step === 1">
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>热门搜索</text>
                        </view>
                        <view class="h-right">
                        </view>
                    </view>
                    <view class="se-content">
                        <view class="f-hot">
                            <text>小米手机</text>
                            <text>Gucci</text>
                        </view>
                    </view>
                </view>
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>历史纪录</text>
                        </view>
                        <view class="h-right">
                            <text class="iconfont">&#xe6d1;</text>
                        </view>
                    </view>
                    <view class="se-content">
                        <view class="f-history">
                            <text>华为手机</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="m-second" v-else-if="step === 2">
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>热门</text>
                        </view>
                    </view>
                    <view class="se-content" style="padding:0.37333rem;">
                        <view class="s-recommend">
                            <view class="r-pic">
                                <image src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"></image>
                            </view>
                            <view class="r-info">
                                <text class="i-name">小米8</text>
                                <text class="i-price">￥2499.00</text>
                            </view>
                            <view class="r-buy">
                                <text>选购</text>
                                <text class="iconfont">&#xe6af;</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>大家都在看</text>
                        </view>
                    </view>
                    <view class="se-content" style="padding:0.37333rem;">
                        <view class="s-hot">
                            <view class="h-item" :key="key" v-for="(item, key) in 3">
                                <view class="i-left">
                                    <text>华为play</text>
                                </view>
                                <view class="i-right">
                                    <text>￥1999.00</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="m-third" v-else>
                <view class="t-item border-1px-bottom" :key="key" v-for="(item, key) in 5">
                    <view class="s-goods" @tap="nav('/pages/goods/index')">
                        <view class="g-top">
                            <view class="t-pic">
                                <image src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"></image>
                            </view>
                            <view class="t-desc">
                                <text>小米手机，更好用的大屏手机</text>
                            </view>
                        </view>
                        <view class="g-bottom">
                            <view class="b-name">
                                <text>小米8</text>
                            </view>
                            <view class="b-price">
                                <text>￥1999.00</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data () {
            return {
                step: 3,
                form: {
                    keyword: ''
                }
            }
        },
        methods: {
            doSearch () {
                this.step = 3
            }
        }
    }
</script>

<style lang="less">
    @import "./index";
</style>
