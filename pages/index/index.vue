<template>
    <view class="page index">
        <view class="i-header">
            <view class="h-top">
                <view class="t-logo">
                    <image src="../../static/image/navi_title_v4.png" />
                </view>
                <view class="t-search" @tap="nav('/pages/search/index')">
                    <view class="s-left">
                        <text class="iconfont">&#xe652;</text>
                        <text class="l-text">搜索好品，共有16523件商品</text>
                    </view>
                </view>
            </view>
            <view class="h-bottom">
                <scroll-view>
                    <view class="b-tabs">
                        <view class="t-item">
                            <text>推荐</text>
                        </view>
                        <view class="t-item" :key="key" v-for="(item, key) in floorLinks">
                            <text>{{item.name}}</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="i-banner">
            <swiper
                class="b-swiper"
                :indicator-dots="true"
                :autoplay="true"
                interval="2000"
                duration="3000"
            >
                <swiper-item :key="key" v-for="(item, key) in pageInfo.activity">
                    <view class="s-item">
                        <image :src="item.cover" />
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="i-service">
            <view class="s-item">
                <text class="iconfont">&#xe639;</text>
                <text class="i-text">网易自营品牌</text>
            </view>
            <view class="s-item">
                <text class="iconfont">&#xe7c4;</text>
                <text class="i-text">30天无忧退换</text>
            </view>
            <view class="s-item">
                <text class="iconfont">&#xe67c;</text>
                <text class="i-text">48小时快速退款</text>
            </view>
        </view>
        <view class="i-category">
            <view class="c-item" :key="key" v-for="(item, key) in pageInfo.category">
                <image src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" />
                <text>{{item.name}}</text>
            </view>
        </view>
        <view class="i-flash">
            <view class="f-header">
                <div class="h-left">
                    <view class="l-text">
                        <text>限时购</text>
                    </view>
                    <view class="l-time">
                        <view class="t-item">
                            <text>{{seckill.h}}</text>
                        </view>
                        <view class="t-item">
                            <text>{{seckill.m}}</text>
                        </view>
                        <view class="t-item">
                            <text>{{seckill.s}}</text>
                        </view>
                    </view>
                </div>
                <div class="h-right">
                    <text>更多</text>
                    <text class="iconfont">&#xe93d;</text>
                </div>
            </view>
            <view class="f-content">
                <view
                    class="c-item"
                    :key="key"
                    @tap="nav(`/pages/goods/index?id=${item.goodsItem.goodsId}&sku=${item.goodsItem.id}&ac=seckill`)"
                    v-for="(item, key) in pageInfo.seckill.list"
                >
                    <view class="i-image">
                        <image
                            src="http://yanxuan.nosdn.127.net/598a7792fdef09260c6c6fb0ca4fa5cc.png?imageView&thumbnail=216x216&quality=75"
                        />
                    </view>
                    <view class="i-price">
                        <text>￥{{item.goodsItem.amount}}</text>
                        <text>￥5.0</text>
                    </view>
                </view>
            </view>
        </view>
        <template v-for="(item, key) in pageInfo.floor">
            <view class="i-direct-supply" :key="key" v-if="item.id == 5">
                <view class="s-header">
                    <div class="h-left">
                        <text>{{item.name}}</text>
                    </div>
                    <div class="h-right">
                        <text>更多</text>
                        <text class="iconfont">&#xe93d;</text>
                    </div>
                </view>
                <view class="s-content">
                    <view class="c-item" :key="key" v-for="(item, key) in item.goods">
                        <view class="i-desc">
                            <text>海外制造商</text>
                            <text>24元起</text>
                        </view>
                        <image
                            src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"
                        />
                    </view>
                </view>
            </view>
            <view class="i-newest" :key="key" v-if="item.id == 7">
                <view class="n-header">
                    <div class="h-left">
                        <text>{{item.name}}</text>
                    </div>
                    <div class="h-right">
                        <text>更多</text>
                        <text class="iconfont">&#xe93d;</text>
                    </div>
                </view>
                <view class="n-content">
                    <view class="c-item" :key="key" v-for="(item, key) in item.goods">
                        <view class="i-image">
                            <image
                                src="http://yanxuan.nosdn.127.net/598a7792fdef09260c6c6fb0ca4fa5cc.png?imageView&thumbnail=216x216&quality=75"
                            />
                        </view>
                        <view class="i-price">
                            <text>￥3.2</text>
                            <text>￥5.0</text>
                        </view>
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
import dayjs from 'dayjs'

const addZero = (t) => {
    return t < 10 ? '0' + t : t + '';
}

export default {
    data() {
        return {
            pageInfo: {
                floor: [],
                activity: [],
                category: [],
                seckill: {
                    queryTime: '',
                    endTime: '',
                    startTime: '',
                    list: []
                }
            },
            seckill: {
                timer: null,
                d: 0,
                h: 0,
                m: 0,
                s: 0
            }
        }
    },
    computed: {
        floorLinks() {
            return this.pageInfo.floor.map(i => {
                return {
                    id: i.id,
                    name: i.name
                }
            })
        }
    },
    methods: {
        init() {
            this.$api.page.info({ page: 'index' }).then(res => {
                const { status, data } = res
                if (status) {
                    this.pageInfo.floor = data.floor
                    this.pageInfo.activity = data.activity
                    this.pageInfo.category = data.category
                    this.getSeckill()
                }
            })
        },
        getSeckill() {
            this.$api.seckill.info({}, {}).then(res => {
                const { status, data } = res
                if (status) {
                    const { queryTime, startTime, endTime, list } = data
                    this.pageInfo['seckill']['queryTime'] = queryTime
                    this.pageInfo['seckill']['startTime'] = startTime
                    this.pageInfo['seckill']['endTime'] = endTime
                    this.pageInfo['seckill']['list'] = list
                    this.seckillCountdown()
                }
            })
        },
        seckillCountdown() {
            this.seckill.timer = setInterval(() => {
                const leftTimestamp = dayjs(this.pageInfo['seckill']['endTime']).diff(dayjs())
                if (!leftTimestamp && this.seckill['timer']) {
                    clearInterval(this.seckill['timer'])
                    this.seckill['timer'] = null
                    this.getSeckill()
                    return
                }
                const d = parseInt(leftTimestamp / (1000 * 24 * 60 * 60))
                const h = parseInt(leftTimestamp / (1000 * 60 * 60) % 24)
                const m = parseInt(leftTimestamp / (1000 * 60) % 60)
                const s = parseInt(leftTimestamp / 1000 % 60)
                this.seckill['d'] = addZero(d)
                this.seckill['h'] = addZero(h)
                this.seckill['m'] = addZero(m)
                this.seckill['s'] = addZero(s)
            }, 1000)
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
