<template>
    <view class="page goods">
        <view class="g-header">
            <view class="h-left"></view>
            <view class="h-middle">
                <view class="m-item m-item-active">
                    <text>商品</text>
                </view>
                <view class="m-item">
                    <text>详情</text>
                </view>
                <view class="m-item" @tap="nav('/pages/evaluate/index')">
                    <text>评价</text>
                </view>
            </view>
            <view class="h-right">
                <text class="iconfont">&#xe62a;</text>
                <text class="iconfont">&#xe616;</text>
            </view>
        </view>
        <view class="g-banner">
            <swiper :indicator-dots="true" :autoplay="true" interval="2000" duration="3000">
                <swiper-item>
                    <view class="b-image">
                        <image
                            src="http://yanxuan.nosdn.127.net/4593d6fa1259e061e02b9c54a2ddb460.jpg?imageView&quality=75&thumbnail=750x0"
                        />
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="b-image">
                        <image
                            src="http://yanxuan.nosdn.127.net/6cb81bcc1e3292014adabf65bc3fe5ff.jpg?imageView&quality=75&thumbnail=750x0"
                        />
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="g-seckill" v-if="isSeckillModel">
            <view class="s-left">
                <view class="l-amount">
                    <view class="a-now">
                        <text>￥</text>
                        <text>1799</text>
                    </view>
                    <view class="a-before">
                        <text>￥{{activeGoodsItem.amount | amount}}</text>
                    </view>
                </view>
            </view>
            <view class="s-right">
                <view class="r-countdown">
                    <view class="c-title">
                        <text>距结束还剩</text>
                    </view>
                    <view class="c-time">
                        <view class="t-item">
                            <text>12</text>
                        </view>
                        <view class="t-item">
                            <text>23</text>
                        </view>
                        <view class="t-item">
                            <text>08</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="g-info">
            <view class="i-name">
                <text>{{pageInfo.goods.name}}</text>
            </view>
            <view class="i-desc">
                <text>骁龙710处理器 / AI 超感光双摄 / 5.88" 全面屏 / 前置2000万柔光自拍 / 三星 AMOLED 屏幕 / 3120mAh 长续航</text>
            </view>
            <view class="i-price">
                <view class="price-pay">
                    <text>￥</text>
                    <text>{{activeGoodsItem.amount | amount}}</text>
                </view>
            </view>
        </view>
        <view class="g-count">
            <view class="g-cell" @tap="openPopup('popupCounter')">
                <view class="c-left">
                    <text>数量：</text>
                </view>
                <view class="c-mid">
                    <text>1</text>
                </view>
                <view class="c-right">
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
        </view>
        <view class="g-attr">
            <view class="g-cell" @tap="openPopup('popupSpec')">
                <view class="c-left">
                    <text>规格：</text>
                </view>
                <view class="c-mid">
                    <text>{{activeAttr | spec2str}}</text>
                    <text class="no-stock" v-if="!activeGoodsItem.id">该规格商品不存在</text>
                </view>
                <view class="c-right">
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
        </view>
        <view class="g-instruction">
            <view class="g-cell">
                <view class="c-left">
                    <text>说明：</text>
                </view>
                <view class="c-mid">
                    <view class="instruction">
                        <view class="i-item">
                            <text class="iconfont">&#xe705;</text>
                            <text class="text">小米有品甄选精品</text>
                        </view>
                        <view class="i-item">
                            <text class="iconfont">&#xe705;</text>
                            <text class="text">由 小米 发货并提供售后</text>
                        </view>
                        <view class="i-item">
                            <text class="iconfont">&#xe705;</text>
                            <text class="text">支持7天无理由退货（请参考商品详情-常见问题）</text>
                        </view>
                    </view>
                </view>
                <view class="c-right">
                    <text class="iconfont">&#xe733;</text>
                </view>
            </view>
        </view>
        <view class="g-evaluate">
            <view class="e-header">
                <view class="h-left">
                    <text>用户评价（1763）</text>
                </view>
                <view class="h-right">
                    <text>98%满意</text>
                    <text class="iconfont">&#xe93d;</text>
                </view>
            </view>
            <view class="e-content">
                <scroll-view :scroll-x="true">
                    <view class="c-wrap">
                        <view class="w-item">
                            <view class="e-card">
                                <view class="c-user">
                                    <view class="u-avatar">
                                        <image
                                            src="https://s1.mi-image.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg"
                                        />
                                    </view>
                                    <view class="u-name">
                                        <text>T*****rstruck</text>
                                    </view>
                                    <view class="u-star">
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                    </view>
                                </view>
                                <view class="c-text">
                                    <text>手机性价比很高。优点有很多，缺点也很多，总体OK。</text>
                                </view>
                            </view>
                        </view>
                        <view class="w-item">
                            <view class="e-card">
                                <view class="c-user">
                                    <view class="u-avatar">
                                        <image
                                            src="https://s1.mi-image.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg"
                                        />
                                    </view>
                                    <view class="u-name">
                                        <text>T*****rstruck</text>
                                    </view>
                                    <view class="u-star">
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                        <image
                                            src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"
                                        />
                                    </view>
                                </view>
                                <view class="c-text">
                                    <text>手机性价比很高。优点有很多，缺点也很多，总体OK。</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="e-footer">
                <text>查看更多</text>
                <text class="iconfont">&#xe93d;</text>
            </view>
        </view>
        <view class="g-details">
            <view class="d-tab">
                <view class="t-item t-item-active">
                    <text>功能详情</text>
                </view>
                <view class="t-item">
                    <text>常见问题</text>
                </view>
            </view>
            <view class="d-content">
                <view class="c-item">
                    <image src="http://yanxuan.nosdn.127.net/64181a4409dc4c4a116f0e0b6c6d8fb4.jpg" />
                </view>
                <view class="c-item">
                    <image src="http://yanxuan.nosdn.127.net/fc5f3104ec3f8493c636d8552e3ce9bf.jpg" />
                </view>
            </view>
        </view>
        <view class="g-footer">
            <view class="f-left">
                <view class="l-item">
                    <text class="iconfont">&#xe648;</text>
                    <text class="i-text">客服</text>
                </view>
                <view class="l-item">
                    <text class="iconfont">&#xe617;</text>
                    <text class="i-text">收藏</text>
                </view>
                <view class="l-item" @tap="swi('/pages/cart/index')">
                    <text class="iconfont">&#xe6af;</text>
                    <text class="i-text">购物车</text>
                </view>
            </view>
            <view class="f-right" v-if="isSeckillModel">
                <view class="r-item r-item-seckill" @tap="seckillBuy">
                    <text>立即抢购</text>
                </view>
            </view>
            <view class="f-right" v-else>
                <view class="r-item r-item-buy" @tap="directBuy">
                    <text>立即购买</text>
                </view>
                <view class="r-item r-item-cart" @tap="addCart">
                    <text>加入购物车</text>
                </view>
            </view>
        </view>
        <popup ref="popupCounter">
            <view class="g-count-panel">
                <view class="p-goods">
                    <view class="g-image">
                        <image
                            src="https://shop.io.mi-img.com/app/shop/img?id=shop_5f926ad08c9604219568908eafc90a8e.jpeg"
                            alt
                        />
                    </view>
                    <view class="g-info">
                        <view class="i-name">
                            <text>路易丝漫男式纯羊毛抗皱三防西装套装</text>
                        </view>
                        <view class="i-price">
                            <text>￥199.00</text>
                        </view>
                    </view>
                </view>
                <view class="p-section">
                    <view class="s-title">
                        <text>数量</text>
                    </view>
                    <view class="s-content">
                        <counter></counter>
                    </view>
                </view>
            </view>
        </popup>
        <popup ref="popupSpec">
            <view class="g-attr-panel">
                <view class="p-goods">
                    <view class="g-img">
                        <iamge
                            src="https://shop.io.mi-img.com/app/shop/img?id=shop_5f926ad08c9604219568908eafc90a8e.jpeg"
                            alt
                        />
                    </view>
                    <view class="g-info">
                        <view class="i-name">
                            <text>路易丝漫男式纯羊毛抗皱三防西装套装</text>
                        </view>
                        <view class="i-price">
                            <text>￥199.00</text>
                        </view>
                    </view>
                </view>
                <view class="p-section" :key="key" v-for="(item, key) in attr">
                    <view class="s-title">
                        <text>{{item.title}}</text>
                    </view>
                    <view class="s-content">
                        <text
                            :class="{'active': activeAttr.map(i => i.valueId).includes(item1.valueId)}"
                            :key="key1"
                            @tap="changeSpec(item1, item.list)"
                            v-for="(item1, key1) in item.list"
                        >{{item1.value}}</text>
                    </view>
                </view>
            </view>
        </popup>
        <van-notify id="van-notify" />
    </view>
</template>

<script>
import popup from '../../components/popup'
import counter from '../../components/counter'
import { Goods } from '../../model/goods'
import { GoodsItem } from '../../model/goods/goodsItem'
import Notify from '../../wxcomponents/vant/notify/notify'
import event from '../../event'
import { eventTopic } from '../../event/topic'
var _ = require('lodash')
export default {
    components: {
        popup,
        counter
    },
    data() {
        return {
            params: {},
            pageInfo: {
                goods: new Goods()
            },
            attr: [],
            activeAttr: [],
            quantity: 1,
            activeGoodsItem: new GoodsItem()
        }
    },
    computed: {
        attrJson() {
            let attrJson = []
            this.pageInfo['goods']['goodsItem'].forEach(i => {
                attrJson.push({
                    attr: i['attrJson'],
                    goodsItemId: i['id']
                })
            })
            return attrJson
        },
        isSeckillModel() {
            let isSeckillModel = false
            if (this.activeGoodsItem && this.params['ac'] === 'seckill' && Number(this.params['sku']) === this.activeGoodsItem['id']) {
                isSeckillModel = true
            }
            return isSeckillModel
        }
    },
    watch: {
        'attrJson': function (val) {
            for (let i = 0; i < val.length; i++) {
                if (val[i]['goodsItemId'] === this.activeGoodsItem.id) {
                    this.activeAttr = val[i]['attr'].map(j => {
                        return {
                            value: j['value'], valueId: j['value_id']
                        }
                    })
                }
                for (let j = 0; j < val[i]['attr'].length; j++) {
                    const index = this.attr.map(k => k['title']).indexOf(val[i]['attr'][j]['key'])
                    const lItem = {
                        value: val[i]['attr'][j]['value'],
                        valueId: val[i]['attr'][j]['value_id'],
                    }
                    if (index > -1) {
                        if (!this.attr[index]['list'].map(l => l['value']).includes(val[i]['attr'][j]['value'])) {
                            this.attr[index]['list'].push(lItem)
                        }
                        continue
                    }
                    this.attr.push({
                        title: val[i]['attr'][j]['key'],
                        list: [lItem]
                    })
                }
            }
        }
    },
    filters: {
        spec2str(attr) {
            if (!attr.length) {
                return ''
            }
            return attr.map(i => i.value).join(' ')
        }
    },
    methods: {
        init(params) {
            this.params = params
            this.$api.page.info({ page: 'goods' }, { goodsId: Number(this.params.id) }).then(res => {
                const { status, data } = res
                if (status) {
                    let agi = null
                    this.pageInfo.goods = new Goods(data.goods)
                    for (let i = 0; i < data.goods.goodsItem.length; i++) {
                        if (data.goods.goodsItem[i]['id'] === Number(this.params.sku)) {
                            agi = data.goods.goodsItem[i]
                            break
                        }
                    }
                    this.activeGoodsItem = new GoodsItem(agi)
                }
            })
        },
        openPopup(s) {
            this.$refs[s].open()
        },
        changeSpec(attr, list) {
            let goodsItem = null
            list.forEach(i => {
                const index = this.activeAttr.map(i => i['valueId']).indexOf(i['valueId'])
                if (index > -1) {
                    this.activeAttr.splice(index, 1)
                }
            })
            this.activeAttr.push(attr)
            for (let j = 0; j < this.attrJson.length; j++) {
                if (!_.difference(this.attrJson[j]['attr'].map(k => k.value_id), this.activeAttr.map(i => i['valueId'])).length) {
                    for (let k = 0; k < this.pageInfo.goods.goodsItem.length; k++) {
                        if (this.pageInfo.goods.goodsItem[k]['id'] === this.attrJson[j]['goodsItemId']) {
                            goodsItem = this.pageInfo.goods.goodsItem[k]
                            break
                        }
                    }
                    break
                }
            }
            this.activeGoodsItem = goodsItem || new GoodsItem()
        },
        verifyGoogdItemStock() {
            let isVerifySuccess = false
            if (!this.activeGoodsItem['id']) {
                Notify({
                    message: '商品规格不存在',
                    color: '#fff',
                    background: ' #845d32',
                })
                return isVerifySuccess
            }
            isVerifySuccess = true
            return isVerifySuccess
        },
        directBuy() {
            if (!this.verifyGoogdItemStock()) {
                return
            }
            this.nav(`/pages/checkout/index?id=${this.activeGoodsItem['id']}&fromType=GOODS_ITEM&quantity=${this.quantity}`)
        },
        seckillBuy() {
            if (!this.verifyGoogdItemStock()) {
                return
            }
            this.nav(`/pages/checkout/index?id=${this.activeGoodsItem['id']}&fromType=SECKILL&quantity=1`)
        },
        addCart() {
            if (!this.verifyGoogdItemStock()) {
                return
            }
            const params = {
                quantity: 1,
                goodsItemId: this.activeGoodsItem['id']
            }
            this.$api.user.addCart(params).then(res => {
                const { status, data } = res
                if (status) {
                    event.trigger(eventTopic['CART_UPDATE'])
                    Notify({
                        message: '添加成功',
                        color: '#fff',
                        background: ' #845d32',
                    })
                }
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
