<template>
    <view class="page cart">
        <view class="c-header" v-if="merchants.length">
            <view class="h-left"></view>
            <view class="h-right" @click="isEdit = !isEdit">
                <text v-if="isEdit">完成</text>
                <text v-else>编辑</text>
            </view>
        </view>
        <view class="c-main">
            <template v-if="merchants.length">
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
                                <text
                                    class="iconfont"
                                    v-if="activeCartIds.includes(item1.id)"
                                >&#xe640;</text>
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
            </template>
            <template v-else>
                <view class="m-blank">
                    <view class="no-data">
                        <image src="../../static/image/blank-cart.png" />
                    </view>
                    <view class="to-buy" v-if="isLogin">
                        <text>购物车空空如也，去</text>
                        <text class="btn" @tap="swi('/pages/index/index')">购买</text>
                        <text>几件吧</text>
                    </view>
                    <view class="to-login" v-else>
                        <text>您尚未登录</text>
                        <text class="btn" @tap="nav('/pages/login/index')">去登陆</text>
                    </view>
                </view>
            </template>
        </view>
        <view class="c-footer" v-if="merchants.length">
            <view class="f-left" @tap="selectAll(activeCartIds.length === cart.length)">
                <text class="iconfont" v-if="activeCartIds.length === cart.length">&#xe640;</text>
                <text class="iconfont" v-else>&#xe651;</text>
                <text>全选</text>
            </view>
            <view class="f-right" v-if="isEdit">
                <view class="r-info">
                    <text>已选：</text>
                    <text>{{activeCart.length}}件</text>
                </view>
                <view class="r-action" @tap="doDelete">
                    <text>删除</text>
                </view>
            </view>
            <view class="f-right" v-else>
                <view class="r-info">
                    <text class="i-text">合计：</text>
                    <text class="i-price">￥{{totalAmount | amount}}</text>
                </view>
                <view class="r-action" @tap="doCheck">
                    <text>去结算({{activeCart.length}})</text>
                </view>
            </view>
        </view>
        <van-dialog id="van-dialog" confirm-button-color="#b4946d" />
        <van-notify id="van-notify" />
    </view>
</template>

<script>
import counter from '../../components/counter'
import { goodsItem } from '../../model/goods/goodsItem'
import Dialog from '../../wxcomponents/vant/dialog/dialog'
import Notify from '../../wxcomponents/vant/notify/notify'
import { mapState } from 'vuex'
var _ = require('lodash')
export default {
    components: {
        counter
    },
    data() {
        return {
            isEdit: false,
            pageInfo: {
                favorite: []
            },
            cart: [],
            activeCart: []
        }
    },
    computed: {
        ...mapState(['isLogin']),
        merchants() {
            let merchants = []
            this.cart.forEach(i => {
                const index = merchants.map(j => j['merchant']['id']).indexOf(i['merchant']['id'])
                if (index > -1) {
                    merchants[index]['list'].push(i)
                    return
                }
                merchants.push({
                    merchant: i['merchant'],
                    list: [i]
                })
            })
            return merchants
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
        resetUserCart() {
            this.merchants = []
            this.activeCart = []
            this.getUserCart()
        },
        getUserCart() {
            this.$api.user.cart().then(res => {
                const { status, data } = res
                if (status) {
                    this.cart = data
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
        },
        doCheck() {
            if (!this.activeCart.length) {
                Notify({
                    message: '请选择至少一件商品',
                    color: '#fff',
                    background: ' #845d32',
                })
                return
            }
            this.nav(`/pages/checkout/index?ids=${this.activeCartIds.join(',')}`)
        },
        doDelete() {
            Dialog.confirm({
                title: '删除提示',
                message: `删除当前选中${this.activeCart.length}件商品？`,
            })
                .then(() => {
                    this.$api.user.deleteCart({ cartIds: this.activeCartIds.join(',') }).then(res => {
                        const { status, data } = res
                        if (status) {
                            Notify({
                                message: '删除成功',
                                color: '#fff',
                                background: ' #845d32',
                            })
                            this.resetUserCart()
                        }
                    })
                })
                .catch(() => { })
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
