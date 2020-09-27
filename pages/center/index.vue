<!--
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 10:11:31
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\pages\center\index.vue
 * @Just do what I think it is right
--> 
<template>
    <view class="page center">
        <view class="c-header">
            <view class="h-right">
                <text class="iconfont">&#xe674;</text>
            </view>
        </view>
        <view
            class="c-account c-account-is-login"
            @tap="nav('/pages/account/index')"
            v-if="isLogin"
        >
            <view class="a-left">
                <view class="l-avatar">
                    <img :src="userInfo.avatar" alt />
                </view>
                <view class="l-name">
                    <text>{{userInfo.nickname}}</text>
                </view>
            </view>
            <view class="a-right">
                <text class="iconfont">&#xe93d;</text>
            </view>
        </view>
        <view class="c-account c-account-no-login" @tap="nav('/pages/login/index')" v-else>
            <view class="a-left">
                <view class="l-avatar">
                    <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt />
                </view>
                <view class="l-name">
                    <text>请登录</text>
                </view>
            </view>
            <view class="a-right">
                <text class="iconfont">&#xe93d;</text>
            </view>
        </view>
        <view class="c-order">
            <view class="o-header">
                <view class="h-left">
                    <text>我的订单</text>
                </view>
                <view class="h-right" @tap="nav('/pages/order/index')">
                    <text>全部订单</text>
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
            <view class="o-content border-1px-top">
                <view class="c-item">
                    <text class="iconfont">&#xe673;</text>
                    <text class="i-text">待付款</text>
                </view>
                <view class="c-item">
                    <text class="iconfont">&#xe62f;</text>
                    <text class="i-text">待收货</text>
                </view>
                <view class="c-item">
                    <text class="iconfont">&#xe672;</text>
                    <text class="i-text">待评价</text>
                </view>
                <view class="c-item">
                    <text class="iconfont">&#xe622;</text>
                    <text class="i-text">退款/售后</text>
                </view>
            </view>
        </view>
        <view class="c-service">
            <view class="s-header">
                <view class="h-left">
                    <text>我的服务</text>
                </view>
            </view>
            <view class="s-content">
                <view class="c-line border-1px-top">
                    <view class="l-item">
                        <text class="iconfont">&#xe69b;</text>
                        <text>拼团订单</text>
                    </view>
                    <view class="l-item">
                        <text class="iconfont">&#xe63c;</text>
                        <text>优惠券</text>
                    </view>
                    <view class="l-item">
                        <text class="iconfont">&#xe608;</text>
                        <text>新人邀请</text>
                        <text>立享红包</text>
                    </view>
                    <view class="l-item">
                        <text class="iconfont">&#xe616;</text>
                        <text>分享</text>
                    </view>
                </view>
                <view class="c-line border-1px-top">
                    <view class="l-item">
                        <text class="iconfont">&#xe617;</text>
                        <text>我的收藏</text>
                    </view>
                    <view class="l-item">
                        <text class="iconfont">&#xe600;</text>
                        <text>地址管理</text>
                    </view>
                    <view class="l-item">
                        <text class="iconfont">&#xe675;</text>
                        <text>意见反馈</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["isLogin"]),
        ...mapState("user", {
            userInfo: "info"
        })
    }
};
</script>

<style lang="less">
@import "./index";
</style>
