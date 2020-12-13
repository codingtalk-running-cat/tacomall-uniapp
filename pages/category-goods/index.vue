<!--
 * @Author: 码上talk|RC
 * @Date: 2020-10-25 12:40:26
 * @LastEditTime: 2020-12-13 16:17:22
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/pages/category-goods/index.vue
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
-->
<template>
    <view class="page category-goods">
        <view class="g-tab">
            <scroll-view scroll-x="true" style="width: 100%;">
                <view class="t-wrap">
                    <view
                        class="w-item"
                        :class="{'w-item-active': activeTabIndex === key}"
                        :key="key"
                        v-for="(item, key) in pageInfo.tabs"
                    >
                        <text>{{item.name}}</text>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="g-content">
            <view
                class="c-item border-1px-bottom"
                :key="key"
                v-for="(item, key) in  pageInfo.result"
            >
                <goods-card :goods="item"></goods-card>
            </view>
        </view>
    </view>
</template>

<script>
import goodsCard from '../../components/goods-card'
export default {
    components: {
        goodsCard
    },
    data() {
        return {
            activeTabIndex: 0,
            pageInfo: {
                tabs: [
                    {
                        name: '推荐'
                    },
                    {
                        name: '夏季防晒'
                    }
                ],
                result: []
            },
            form: {
                pageIndex: 1,
                pageSize: 10
            }
        }
    },
    methods: {
        init() {
            this.$api.goods.page({
                pageIndex: this.form.pageIndex,
                pageSize: this.form.pageSize
            }, {
                query: { keyword: '' },
                order: {}
            }).then(res => {
                const { status, data } = res
                if (status) {
                    data.forEach(i => {
                        this.pageInfo.result.push(i)
                    })
                    this.form.pageIndex++
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

