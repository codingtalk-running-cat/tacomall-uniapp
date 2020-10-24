<template>
    <view class="page search">
        <view class="s-header">
            <view class="h-top">
                <view class="t-search">
                    <text class="iconfont">&#xe652;</text>
                    <input
                        type="search"
                        placeholder="小米超级品牌日"
                        v-model="form.keyword"
                        @focus="inputFocusHandler"
                    />
                    <text class="iconfont clear">&#xe61a;</text>
                </view>
                <view class="t-right" @click="resetSearch();doSearch()">
                    <text>搜索</text>
                </view>
            </view>
            <view class="h-bottom" v-if="step === 3">
                <view class="b-item b-item-active">
                    <view class="i-text">
                        <text>综合</text>
                    </view>
                    <view class="i-icon i-icon-down">
                        <text class="iconfont">&#xe734;</text>
                        <text class="iconfont">&#xe6e9;</text>
                    </view>
                </view>
                <view class="b-item">
                    <text>价格</text>
                </view>
                <view class="b-item">
                    <text>品牌</text>
                </view>
                <view class="b-item">
                    <text>分类</text>
                </view>
            </view>
        </view>
        <view class="s-main" :class="{'s-main-with-bottom': step === 3}">
            <view class="m-first" v-if="step === 1">
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>热门搜索</text>
                        </view>
                        <view class="h-right"></view>
                    </view>
                    <view class="se-content">
                        <view class="f-hot">
                            <text
                                :key="key"
                                @tap="selectTag(item)"
                                v-for="(item, key) in pageInfo.hot"
                            >{{item}}</text>
                        </view>
                    </view>
                </view>
                <view class="s-section" v-if="pageInfo.history.length">
                    <view class="se-header">
                        <view class="h-left">
                            <text>历史纪录</text>
                        </view>
                        <view class="h-right">
                            <text class="iconfont">&#xe6d1;</text>
                        </view>
                    </view>
                    <view class="se-content">
                        <view class="f-history">
                            <text
                                :key="key"
                                @tap="selectTag(item)"
                                v-for="(item, key) in pageInfo.history"
                            >{{item}}</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="m-second" v-else-if="step === 2">
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>热门</text>
                        </view>
                    </view>
                    <view class="se-content" style="padding:0.37333rem;">
                        <view class="s-recommend">
                            <view
                                class="r-item"
                                :key="key"
                                v-for="(item, key) in pageInfo.recommend"
                            >
                                <view class="i-pic">
                                    <image
                                        src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
                                    />
                                </view>
                                <view class="i-info">
                                    <text class="i-name">{{item.name}}</text>
                                    <text class="i-price">￥2499.00</text>
                                </view>
                                <view class="i-buy">
                                    <text>选购</text>
                                    <text class="iconfont">&#xe6af;</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="s-section">
                    <view class="se-header">
                        <view class="h-left">
                            <text>大家都在看</text>
                        </view>
                    </view>
                    <view class="se-content" style="padding:0.37333rem;">
                        <view class="s-hot">
                            <view class="h-item" :key="key" v-for="(item, key) in pageInfo.most">
                                <view class="i-left">
                                    <text>{{item.name}}</text>
                                </view>
                                <view class="i-right">
                                    <text>￥1999.00</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="m-third" v-else>
                <view
                    class="t-item border-1px-bottom"
                    :key="key"
                    v-for="(item, key) in  pageInfo.searchResult"
                >
                    <view class="s-goods" @tap="navToGoodsDetail(item)">
                        <view class="g-top">
                            <view class="t-pic">
                                <image
                                    src="http://img.youpin.mi-img.com/800_pic/c3c572d31db2e1531e4ad245b33885f1.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
                                />
                            </view>
                            <view class="t-desc">
                                <text>{{item.name}}</text>
                            </view>
                        </view>
                        <view class="g-bottom">
                            <view class="b-name">
                                <text>小米8</text>
                            </view>
                            <view class="b-price">
                                <text>￥1999.00</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { historySearch } from '../../utils/history-search'
export default {
    data() {
        return {
            step: 1,
            form: {
                keyword: '',
                searchResultPageIndex: 1,
                searchResultPageSize: 10,
            },
            pageInfo: {
                history: [],
                hot: [],
                recommend: [],
                most: [],
                searchResult: []
            }
        }
    },
    methods: {
        init() {
            this.pageInfo.history = historySearch.get()
            this.$api.page.info({ page: 'search' }).then(res => {
                const { status, data } = res
                if (status) {
                    this.pageInfo.hot = data.hot
                    this.pageInfo.recommend = data.recommend
                    this.pageInfo.most = data.most
                }
            })
        },
        inputFocusHandler() {
            this.step = 2
        },
        selectTag(s) {
            this.form.keyword = s
            this.doSearch()
        },
        resetSearch() {
            this.form.searchResultPageIndex = 1
            this.pageInfo.searchResult = []
        },
        doSearch() {
            this.$api.goods.page({
                pageIndex: this.form.searchResultPageIndex,
                pageSize: this.form.searchResultPageSize
            }, {
                query: { keyword: this.form.keyword },
                order: {}
            }).then(res => {
                const { status, data } = res
                if (status) {
                    data.forEach(i => {
                        this.pageInfo.searchResult.push(i)
                    })
                    this.step = 3
                    this.form.searchResultPageIndex++
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
