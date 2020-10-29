<template>
    <view class="page cart">
        <view class="c-header">
            <div class="h-left"></div>
            <view class="h-right">
                <text>编辑</text>
            </view>
        </view>
        <view class="c-main">
            <view class="m-group" :key="key" v-for="(item, key) in merchants">
                <view class="g-header">
                    <view class="h-left" @tap="selectMerchant(isMechantActive(item), item)">
                        <text class="iconfont" v-if="isMechantActive(item)">&#xe640;</text>
                        <text class="iconfont" v-else>&#xe651;</text>
                        <text class="l-text">严选自营</text>
                    </view>
                    <view class="h-right">
                        <text class="iconfont">&#xe619;</text>
                        <text>满150.00免运费</text>
                    </view>
                </view>
                <view class="g-content">
                    <view
                        class="c-item border-1px-top"
                        :key="key1"
                        v-for="(item1, key1) in item.list"
                    >
                        <view class="i-select" @tap="selectCart(item1)">
                            <text class="iconfont" v-if="activeCartIds.includes(item1.id)">&#xe640;</text>
                            <text class="iconfont" v-else>&#xe651;</text>
                        </view>
                        <view class="i-pic">
                            <image
                                src="http://yanxuan.nosdn.127.net/e216153c4c420a6bfaa754e6220981cd.png?imageView&quality=65&thumbnail=330x330"
                            />
                        </view>
                        <view class="i-info">
                            <view class="info-name">
                                <text>{{item1.goodsItem.name}}</text>
                            </view>
                            <view class="i-price-num">
                                <view class="price">
                                    <text>￥{{item1.goodsItem.amount * item1.quantity | amount}}</text>
                                </view>
                                <view class="num">
                                    <counter></counter>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <div class="c-footer">
            <div class="f-info">
                <div class="i-left" @tap="selectAll(activeCartIds.length === cart.length)">
                    <text class="iconfont" v-if="activeCartIds.length === cart.length">&#xe640;</text>
                    <text class="iconfont" v-else>&#xe651;</text>
                    <text>全选</text>
                </div>
                <div class="i-right">
                    <text class="r-text">合计</text>
                    <text class="r-price">￥{{totalAmount | amount}}</text>
                </div>
            </div>
            <div class="f-action" @tap="nav('/pages/checkout/index')">
                <text>去结算(2)</text>
            </div>
        </div>
    </view>
</template>

<script>
import counter from '../../components/counter'
import { goodsItem } from '../../model/goods/goodsItem'
var _ = require('lodash')
export default {
    components: {
        counter
    },
    data() {
        return {
            pageInfo: {
                favorite: []
            },
            merchants: [],
            activeCart: []
        }
    },
    computed: {
        cart() {
            let cart = []
            for (let i = 0; i < this.merchants.length; i++) {
                for (let j = 0; j < this.merchants[i]['list'].length; j++) {
                    cart.push(this.merchants[i]['list'][j])
                }
            }
            return cart
        },
        activeCartIds() {
            return this.activeCart.map(i => i.id)
        },
        totalAmount() {
            let amount = 0
            this.activeCart.forEach(i => {
                amount = amount + i['goodsItem']['amount'] * i['quantity']
            })
            return amount
        }
    },
    methods: {
        init(params) {
            this.$api.page.info({ page: 'cart' }).then(res => {
                const { status, data } = res
                if (status) {
                    this['pageInfo']['favorite'] = []
                }
            })
            this.getUserCart()
        },
        getUserCart() {
            this.$api.user.cart().then(res => {
                const { status, data } = res
                if (status) {
                    this.merchants = data
                }
            })
        },
        isMechantActive(o) {
            const { list } = o
            const listIds = list.map(i => i.id)
            if (_.intersection(listIds, this.activeCartIds).length === listIds.length) {
                return true
            }
            return false
        },
        selectCart(o) {
            const index = this.activeCart.map(i => i['id']).indexOf(o['id'])
            if (index > -1) {
                this.activeCart.splice(index, 1)
                return
            }
            this.activeCart.push(o)
        },
        selectMerchant(isActive, o) {
            const { list } = o
            for (let i = 0; i < list.length; i++) {
                const index = this.activeCart.map(j => j.id).indexOf(list[i]['id'])
                if (index > -1) {
                    this.activeCart.splice(index, 1)
                }
            }
            if (isActive) {
                return
            }
            list.forEach(k => {
                this.activeCart.push(k)
            })
        },
        selectAll(isActive) {
            console.log(isActive)
            this.activeCart = []
            if (isActive) {
                return
            }
            this.cart.forEach(i => {
                this.activeCart.push(i)
            })
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
