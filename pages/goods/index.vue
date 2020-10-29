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
                    <text>1799</text>
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
        <view class="g-spec">
            <view class="g-cell" @tap="openPopup('popupSpec')">
                <view class="c-left">
                    <text>规格：</text>
                </view>
                <view class="c-mid">
                    <text>{{activeSpec.attr | spec2str}}</text>
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
                <view class="l-item">
                    <text class="iconfont">&#xe6af;</text>
                    <text class="i-text">购物车</text>
                </view>
            </view>
            <view class="f-right">
                <view class="r-item r-item-buy">
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
            <view class="g-spec-panel">
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
                <view class="p-section" :key="key" v-for="(item, key) in spec">
                    <view class="s-title">
                        <text>{{item.title}}</text>
                    </view>
                    <view class="s-content">
                        <text
                            :class="{'active': activeSpec.ids.includes(item1.valueId)}"
                            :key="key1"
                            @tap="changeSpec(item1.valueId, item.list)"
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
            activeGoodsItem: null
        }
    },
    computed: {
        spec() {
            const { attrJson } = this.pageInfo.goods
            let spec = []
            for (let i = 0; i < attrJson.length; i++) {
                for (let j = 0; j < attrJson[i]['attr'].length; j++) {
                    const index = spec.map(k => k['title']).indexOf(attrJson[i]['attr'][j]['key'])
                    const lItem = {
                        value: attrJson[i]['attr'][j]['value'],
                        valueId: attrJson[i]['attr'][j]['value_id'],
                    }
                    if (index > -1) {
                        if (!spec[index]['list'].map(l => l['value']).includes(attrJson[i]['attr'][j]['value'])) {
                            spec[index]['list'].push(lItem)
                        }
                        continue
                    }
                    spec.push({
                        title: attrJson[i]['attr'][j]['key'],
                        list: [lItem]
                    })
                }
            }
            return spec
        },
        activeSpec() {
            const { attrJson } = this.pageInfo.goods
            let attr = {}
            let ids = []
            for (let i = 0; i < attrJson.length; i++) {
                if (attrJson[i]['goods_item_id'] === this.activeGoodsItem.id) {
                    attr = attrJson[i]
                    ids = attrJson[i]['attr'].map(j => j['value_id'])
                }
            }
            return {
                attr,
                ids
            }
        },
    },
    filters: {
        spec2str(spec) {
            if (!spec['attr']) {
                return ''
            }
            return spec['attr'].map(i => i.value).join(' ')
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
        changeSpec(valueId, list) {
            const { attrJson } = this.pageInfo.goods
            let activeIds = _.cloneDeep(this.activeSpec['ids'])
            let goodsItem = null
            list.forEach(i => {
                const index = activeIds.indexOf(i['valueId'])
                if (index > -1) {
                    activeIds.splice(index, 1)
                }
            })
            activeIds.push(valueId)
            for (let j = 0; j < attrJson.length; j++) {
                if (!_.difference(attrJson[j]['attr'].map(k => k.value_id), activeIds).length) {
                    for (let k = 0; k < this.pageInfo.goods.goodsItem.length; k++) {
                        if (this.pageInfo.goods.goodsItem[k]['id'] === attrJson[j]['goods_item_id']) {
                            goodsItem = this.pageInfo.goods.goodsItem[k]
                            break
                        }
                    }
                    break
                }
            }
            if (goodsItem) {
                this.activeGoodsItem = goodsItem
            }
        },
        addCart() {
            const params = {
                quantity: 1,
                goodsItemId: this.activeGoodsItem.id
            }
            this.$api.user.addCart(params).then(res => {
                const { status, data } = res
                if (status) {
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
