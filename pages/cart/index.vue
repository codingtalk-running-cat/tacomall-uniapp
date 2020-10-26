<template>
    <view class="page cart">
        <view class="c-header">
            <div class="h-left"></div>
            <view class="h-right">
                <text>编辑</text>
            </view>
        </view>
        <view class="c-main">
            <view class="m-group" :key="key" v-for="(item, key) in cart">
                <view class="g-header">
                    <view class="h-left">
                        <text class="iconfont">&#xe639;</text>
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
                        v-for="(item1, key1) in item.goodsItems"
                    >
                        <view class="i-select">
                            <text class="iconfont">&#xe651;</text>
                        </view>
                        <view class="i-pic">
                            <image
                                src="http://yanxuan.nosdn.127.net/e216153c4c420a6bfaa754e6220981cd.png?imageView&quality=65&thumbnail=330x330"
                            />
                        </view>
                        <view class="i-info">
                            <view class="info-name">
                                <text>{{item.name}}</text>
                            </view>
                            <view class="i-price-num">
                                <view class="price">
                                    <text>￥215.00</text>
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
                <div class="i-left">
                    <text class="iconfont">&#xe651;</text>
                    <text>全选</text>
                </div>
                <div class="i-right">
                    <text class="r-text">合计</text>
                    <text class="r-price">￥452.00</text>
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
export default {
    components: {
        counter
    },
    data() {
        return {
            pageInfo: {
                favorite: []
            },
            cart: []
        }
    },
    methods: {
        init(params) {
            this.$api.page.info({ page: 'cart' }).then(res => {
                const { status, data } = res
                if (status) {
                    this.pageInfo.favorite = []
                }
            })
            this.getUserCart()
        },
        getUserCart() {
            this.$api.user.cart().then(res => {
                const { status, data } = res
                if (status) {
                    this.cart = data
                }
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
