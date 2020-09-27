<template>
    <view class="page index">
        <view class="i-header">
            <view class="h-top">
                <view class="t-logo">
                    <img src="../../static/image/navi_title_v4.png">
                </view>
                <view class="t-search" @tap="nav('/pages/search/index')">
                    <view class="s-left">
                        <text class="iconfont">&#xe652;</text>
                        <text class="l-text">搜索好品，共有16523件商品</text>
                    </view>
                </view>
            </view>
            <view class="h-bottom">
                <scroll-view>
                    <view class="b-tabs">
                        <view class="t-item t-item-active">
                            <text>服装</text>
                        </view>
                        <view class="t-item">
                            <text>首饰</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="i-banner">
            <swiper class="b-swiper" :indicator-dots="true" :autoplay="true" interval="2000" duration="3000">
                <swiper-item :key="key" v-for="(item, key) in pageInfo.activity">
                    <view class="s-item">
                        <image src="https://yanxuan.nosdn.127.net/456abfb6e481a941444e8840005c88ed.jpg?imageView&quality=75&thumbnail=750x0"></image>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="i-service">
            <view class="s-item">
                <text class="iconfont">&#xe639;</text>
                <text class="i-text">网易自营品牌</text>
            </view>
            <view class="s-item">
                <text class="iconfont">&#xe7c4;</text>
                <text class="i-text">30天无忧退换</text>
            </view>
            <view class="s-item">
                <text class="iconfont">&#xe67c;</text>
                <text class="i-text">48小时快速退款</text>
            </view>
        </view>
        <view class="i-category">
            <view class="c-item" :key="key" v-for="(item, key) in 10">
                <image src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"></image>
                <text>居家生活</text>
            </view>
        </view>
        <view class="i-flash">
            <view class="f-header">
                <div class="h-left">
                    <view class="l-text">
                        <text>限时购</text>
                    </view>
                    <view class="l-time">
                        <view class="t-item">
                            <text>02</text>
                        </view>
                        <view class="t-item">
                            <text>15</text>
                        </view>
                        <view class="t-item">
                            <text>45</text>
                        </view>
                    </view>
                </div>
                <div class="h-right">
                    <text>更多</text>
                    <text class="iconfont">&#xe93d;</text>
                </div>
            </view>
            <view class="f-content">
                <view class="c-item" :key="key" v-for="(item, key) in 6">
                    <view class="i-image">
                        <image src="http://yanxuan.nosdn.127.net/598a7792fdef09260c6c6fb0ca4fa5cc.png?imageView&thumbnail=216x216&quality=75"></image>
                    </view>
                    <view class="i-price">
                        <text>￥3.2</text>
                        <text>￥5.0</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="i-direct-supply">
            <view class="s-header">
                <div class="h-left">
                    <text>品牌制造商直供</text>
                </div>
                <div class="h-right">
                    <text>更多</text>
                    <text class="iconfont">&#xe93d;</text>
                </div>
            </view>
            <view class="s-content">
                <view class="c-item" :key="key" v-for="(item, key) in 4">
                    <view class="i-desc">
                        <text>海外制造商</text>
                        <text>24元起</text>
                    </view>
                    <image src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"></image>
                </view>
            </view>
        </view>
        <view class="i-newest">
            <view class="n-header">
                <div class="h-left">
                    <text>新品上市</text>
                </div>
                <div class="h-right">
                    <text>更多</text>
                    <text class="iconfont">&#xe93d;</text>
                </div>
            </view>
            <view class="n-content">
                <view class="c-item" :key="key" v-for="(item, key) in 6">
                    <view class="i-image">
                        <image src="http://yanxuan.nosdn.127.net/598a7792fdef09260c6c6fb0ca4fa5cc.png?imageView&thumbnail=216x216&quality=75"></image>
                    </view>
                    <view class="i-price">
                        <text>￥3.2</text>
                        <text>￥5.0</text>
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
                pageInfo: {
                    activity: []
                }
           }
       },
       methods: {
           init () {
               this.$api.page.info({page: 'index'}).then(res => {
                   const {status, data} = res
                   if (status) {
                       this.pageInfo.activity = data.activity
                   }
               })
           }
       },
       onLoad () {
           this.init()
       } 
    }
</script>

<style lang="less">
    @import "./index";
</style>
