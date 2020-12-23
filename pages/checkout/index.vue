<template>
    <view class="page checkout">
        <view class="c-address">
            <view class="a-left">
                <view class="l-top">
                    <text class="t-name">张三</text>
                    <text class="t-phone">136******30</text>
                </view>
                <view class="l-bottom">
                    <text>中国 广东 白云区 xx xxxxx（528300）</text>
                </view>
            </view>
            <view class="a-right">
                <text class="iconfont">&#xe93d;</text>
            </view>
        </view>
        <view class="c-pay">
            <view class="p-item">
                <view class="i-left">
                    <text class="iconfont" style="color: #00c800;">&#xe7e5;</text>
                    <text class="l-name">微信支付</text>
                    <text class="l-tag">推荐</text>
                </view>
                <view class="i-right">
                    <text class="iconfont" style="color:#845d32;">&#xe640;</text>
                </view>
            </view>
            <view class="p-item border-1px-top" v-if="app.platform !== 'MP-WEIXIN'">
                <view class="i-left">
                    <text class="iconfont" style="color: #00aaef;">&#xe64b;</text>
                    <text class="l-name">支付宝支付</text>
                </view>
                <view class="i-right">
                    <text class="iconfont">&#xe651;</text>
                </view>
            </view>
        </view>
        <view class="c-goods">
            <view class="g-header">
                <text>商品详情</text>
            </view>
            <view class="g-content border-1px-top border-1px-bottom">
                <view class="c-item" :key="key" v-for="(item, key) in pageInfo.buys">
                    <view class="i-pic">
                        <image
                            src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240"
                        />
                    </view>
                    <view class="i-info">
                        <view class="i-name">
                            <text>{{item.goodsItem.name}}</text>
                        </view>
                    </view>
                    <view class="i-price-num">
                        <text class="single-price">￥{{item.goodsItem.amount | amount}}</text>
                        <text class="num">x{{item.quantity}}</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="c-others">
            <view class="o-cell">
                <view class="c-left">
                    <text>优惠券/优惠码</text>
                </view>
                <view class="c-right">
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
            <view class="o-cell">
                <view class="c-left">
                    <text>配送方式</text>
                </view>
                <view class="c-right">
                    <text>快递配送</text>
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
            <view class="o-cell">
                <view class="c-left">
                    <text>送货时间</text>
                </view>
                <view class="c-right">
                    <text>不限时间</text>
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
        </view>
        <view class="c-footer">
            <view class="f-info">
                <text class="i-text">合计</text>
                <text class="i-price">￥{{pageInfo.amount.total | amount}}</text>
            </view>
            <view class="f-action" @tap="addOrder">
                <text>去支付</text>
            </view>
        </view>
    </view>
</template>

<script>
import event from '../../event'
import { eventTopic } from '../../event/topic'
import { mapState } from 'vuex'
import { Order } from '../../model/order'
export default {
    data() {
        return {
            params: null,
            pageInfo: {
                cart: [],
                amount: {
                    totalAmount: 0
                }
            }
        }
    },
    computed: {
        ...mapState(['app'])
    },
    methods: {
        init(params) {
            this.params = params
            let reqBody = {}
            reqBody['fromType'] = this.params['fromType']
            if (this.params['fromType'] === 'CART') {
                reqBody['ids'] = this.params['ids']
            }
            if (this.params['fromType'] === 'GOODS_ITEM') {
                reqBody['id'] = this.params['id']
                reqBody['quantity'] = this.params['quantity']
            }
            if (this.params['fromType'] === 'SECKILL') {
                reqBody['id'] = this.params['id']
            }
            this.$api.page.info({ page: 'pageCheckout' }, reqBody).then(res => {
                const { status, data } = res
                if (status) {
                    this.pageInfo['buys'] = data['buys']
                    this.pageInfo['amount'] = data['amount']
                }
            })
        },
        addOrder() {
            const fromType2key = {
                'CART': 'orderCart',
                'GOODS_ITEM': 'orderGoodsItem',
                'SECKILL': 'orderSeckill',
            }
            let reqBody = {}
            if (this.params['fromType'] === 'CART') {
                reqBody['ids'] = this.params['ids']
            }
            if (this.params['fromType'] === 'GOODS_ITEM' || this.params['fromType'] === 'SECKILL') {
                reqBody['id'] = this.params['id']
                reqBody['quantity'] = this.params['quantity']
            }
            this.$api.user.addOrder({ fromType: fromType2key[this.params['fromType']] }, reqBody).then(res => {
                const { status, data } = res
                if (status) {
                    const { orders } = data.map(i => new Order(i))
                    if (this.params['fromType'] === 'CART') {
                        event.trigger(eventTopic['CART_UPDATE'])
                    }
                    this.doPay().then(() => {
                        this.red(`/pages/transaction/index?ids=${orders.map(i => i['id']).join(',')}`)
                    })
                }
            })
        },
        doPay() {
            return new Promise((resolve) => {
                resolve()
            })
        }
    },
    onLoad(params) {
        this.init(params)
    }
}
</script>

<style lang="less">
@import "./index";
</style>
