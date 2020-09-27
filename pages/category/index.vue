<template>
    <view class="page category">
        <view class="c-header border-1px-bottom">
            <view class="header-search">
                <text class="iconfont">&#xe652;</text>
                <text class="keyword">润米超级品牌日</text>
            </view>
        </view>
        <view class="c-left">
            <scroll-view :scroll-y="true">
                <view class="l-item l-item-active">
                    <text>推荐</text>
                </view>
                <view class="l-item">
                    <text>手机</text>
                </view>
                <view class="l-item">
                    <text>家电</text>
                </view>
                <view class="l-item">
                    <text>服装</text>
                </view>
            </scroll-view>
        </view>
        <view class="c-right">
            <scroll-view :scroll-y="true">
                <view class="sub-list-wrap">
                    <view class="wrap-banner">
                        <image src="http://yanxuan.nosdn.127.net/d723607e0cbb0c4a11c9396612c71d9b.jpg?imageView&thumbnail=0x196&quality=75"></image>
                    </view>
                    <view class="wrap-type">
                        <text>推荐分类</text>
                    </view>
                    <view class="wrap-list">
                        <view class="list-item" :key="key" v-for="(item, key) in 8">
                            <view class="item-pic">
                                <image src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144"></image>
                            </view>
                            <view class="item-name">
                                <text>员工精选</text>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
    export default {}
</script>

<style lang="less">
    @import "./index";
</style>
