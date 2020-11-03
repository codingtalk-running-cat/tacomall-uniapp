<template>
    <view class="page order">
        <view class="o-header border-1px-bottom">
            <view
                class="h-item"
                :class="{'h-item-active': activeTypeIndex === key}"
                :key="key"
                @tap="changeType(key)"
                v-for="(item, key) in types"
            >
                <text>{{item.name}}</text>
                <text class="i-tag" v-if="item.count">{{item.count}}</text>
            </view>
        </view>
        <view class="o-main">
            <view class="m-receive">
                <view class="r-item" :key="key" v-for="(item, key) in orders">
                    <view class="i-time-status">
                        <view class="c-time">
                            <text>2018-08-06 16:57</text>
                        </view>
                        <view class="c-status">
                            <text>已支付支付</text>
                        </view>
                    </view>
                    <view class="i-goods border-1px-top">
                        <view
                            class="g-item"
                            :key="key1"
                            v-for="(item1, key1) in item.orderMappingGoodsItem"
                        >
                            <view class="i-pic">
                                <image
                                    src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240"
                                />
                            </view>
                            <view class="i-info">
                                <view class="i-name">
                                    <text>{{item1.goodsItem.name}}</text>
                                </view>
                            </view>
                            <view class="i-price-num">
                                <text class="single-price">￥{{item1.amount | amount}}</text>
                                <text class="num">x{{item1.quantity}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="i-price">
                        <view class="p-total">
                            <text>共{{orderInfo(item).quantity}}件商品，总金额:</text>
                            <text>￥{{item.totalAmount | amount}}</text>
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

export default {
    data() {
        return {
            activeTypeIndex: 0,
            types: [
                {
                    name: '全部订单',
                    value: -1,
                    count: 0
                },
                {
                    name: '待付款',
                    value: 0,
                    count: 0
                },
                {
                    name: '待收货',
                    value: 1,
                    count: 0
                },
                {
                    name: '已收货',
                    value: 2,
                    count: 0
                },
                {
                    name: '退款订单',
                    value: 3,
                    count: 0
                }
            ],
            form: {
                pageIndex: 1,
                pageSize: 10,
            },
            orders: []
        }
    },
    methods: {
        init() {
            this.getOrderPage()
        },
        resetQuery() {
            this.form.pageIndex = 1
            this.orders = []
        },
        getOrderPage() {
            this.$api.user.getOrderPage(this.form, {
                status: this.types[this.activeTypeIndex]['value']
            }).then(res => {
                const { status, data } = res
                if (status) {
                    data.forEach(i => {
                        this.orders.push(i)
                    })
                }
            })
        },
        changeType(n) {
            this.activeTypeIndex = n
            this.resetQuery()
            this.getOrderPage()
        },
        orderInfo(order) {
            let quantity = 0
            for (let i = 0; i < order.orderMappingGoodsItem.length; i++) {
                quantity = quantity + order.orderMappingGoodsItem[i]['quantity']
            }
            return {
                quantity
            }
        }
    },
    onLoad() {
        this.init()
    }
}
</script>

<style lang="less">
@import "./index";
</style>
