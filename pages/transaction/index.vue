<!--
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-31 11:03:04
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/pages/transaction/index.vue
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
-->
<template>
    <view class="page transaction">
        <view class="t-result">
            <text class="iconfont">&#xe62b;</text>
            <text class="text">交易成功</text>
        </view>
        <view class="t-info">
            <view class="i-item">
                <view class="item-title">
                    <text>订单金额</text>
                </view>
                <view class="item-text">
                    <text>￥{{pageInfo.order.totalAmount | amount}}元</text>
                </view>
            </view>
            <view class="i-item">
                <view class="item-title">
                    <text>订单编号</text>
                </view>
                <view class="item-text">
                    <text>201803121213242100</text>
                </view>
            </view>
            <view class="i-item">
                <view class="item-title">
                    <text>收货地址</text>
                </view>
                <view class="item-text">
                    <text>中国 广东 佛山 顺德 北滘镇莘村中学（528300） 邓海标 13680065830</text>
                </view>
            </view>
            <view class="i-item">
                <view class="item-title">
                    <text>送货时间</text>
                </view>
                <view class="item-text">
                    <text>不限送货时间</text>
                </view>
            </view>
            <view class="i-item">
                <view class="item-title">
                    <text>支付方式</text>
                </view>
                <view class="item-text">
                    <text>微信支付</text>
                </view>
            </view>
        </view>
        <view class="t-footer">
            <view class="f-info">
                <text class="i-text">合计</text>
                <text class="i-price">￥1236.00</text>
            </view>
            <view class="f-check" @tap="red('/pages/order/index')">
                <text>查看订单</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            params: {},
            pageInfo: {
                order: {}
            }
        }
    },
    methods: {
        init(params) {
            this.params = params
            this.$api.page.info({ page: 'transaction' }, { id: this.params['id'] }).then(res => {
                const { status, data } = res
                if (status) {
                    this.pageInfo['order'] = data['order']
                }
            })
        },
    },
    onLoad(params) {
        this.init(params)
    }
}
</script>

<style lang="less">
@import "./index";
</style>
