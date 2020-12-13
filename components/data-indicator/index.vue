<!--
 * @Author: 码上talk|RC
 * @Date: 2020-12-13 16:27:14
 * @LastEditTime: 2020-12-13 17:15:58
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/components/data-indicator/index.vue
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
-->
<template>
    <view class="data-indicator">
        <div class="di-wrap" v-if="status === 1 || status === 3">
            <slot></slot>
        </div>
        <view class="di-no-data" v-if="status === 2">
            <image src="../../static/image/blank-data.png" />
        </view>
        <view class="di-no-more-data" v-if="status === 3">
            <view class="text">
                <text>暂无更多数据~</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: ['status']
}
</script>

<style lang="less">
.data-indicator {
    width: 100%;
    .di-wrap {
        width: 100%;
    }
    .di-no-data {
        width: 500rpx;
        margin: 0 auto;
        image {
            width: 100%;
        }
    }
    .di-no-more-data {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50rpx 0;
    }
}
</style>
