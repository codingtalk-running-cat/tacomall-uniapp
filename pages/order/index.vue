<template>
    <view class="page order">
        <view class="o-header border-1px-bottom">
            <view class="h-item h-item-active">
                <text>全部订单</text>
            </view>
            <view class="h-item">
                <text>待付款</text>
            </view>
            <view class="h-item">
                <text class="i-text">待收货</text>
                <text class="i-tag">1</text>
            </view>
            <view class="h-item">
                <text>已收货</text>
            </view>
            <view class="h-item">
                <text>退款订单</text>
            </view>
        </view>
        <view class="o-main">
            <view class="m-receive">
                <view class="r-item">
                    <view class="i-time-status">
                        <view class="c-time">
                            <text>2018-08-06 16:57</text>
                        </view>
                        <view class="c-status">
                            <text>已支付支付</text>
                        </view>
                    </view>
                    <view class="i-goods border-1px-top">
                        <view class="g-item">
                            <view class="i-pic">
                                <image src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240"></image>
                            </view>
                            <view class="i-info">
                                <view class="i-name">
                                    <text>米家机器人扫地边刷</text>
                                </view>
                            </view>
                            <view class="i-price-num">
                                <text class="single-price">￥39</text>
                                <text class="num">x1</text>
                            </view>
                        </view>
                        <view class="g-item">
                            <view class="i-pic">
                                <image src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240"></image>
                            </view>
                            <view class="i-info">
                                <view class="i-name">
                                    <text>米家机器人扫地边刷</text>
                                </view>
                            </view>
                            <view class="i-price-num">
                                <text class="single-price">￥39</text>
                                <text class="num">x1</text>
                            </view>
                        </view>
                    </view>
                    <view class="i-price">
                        <view class="p-total">
                            <text>共2件商品，总金额:</text>
                            <text>￥78</text>
                        </view>
                        <view class="p-transfer">
                            <text>（含运费￥10）</text>
                        </view>
                    </view>
                    <view class="i-action border-1px-top">
                        <view class="expire-time">
                            <text>24小时候订单将关闭</text>
                        </view>
                        <view class="action-btns">
                            <text>取消</text>
                            <text>去支付</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {}
</script>

<style lang="less">
    @import "./index";
</style>
