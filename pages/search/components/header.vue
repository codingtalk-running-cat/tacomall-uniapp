<template>
    <view class="search-header">
        <view class="h-top">
            <view class="t-left" @click="back">
                <i class="eosfont">&#xe61f;</i>
            </view>
            <view class="t-search">
                <i class="eosfont">&#xe60c;</i>
                <input type="search" placeholder="小米超级品牌日" v-model="keyword">
                <i class="eosfont clear">&#xe600;</i>
            </view>
            <view class="t-right" @click="search">
                <text>搜索</text>
            </view>
        </view>
        <view class="h-bottom" v-if="step === 3">
            <view class="b-item b-item-active">
                <view class="i-text">
                    <text>综合</text>
                </view>
                <view class="i-icon i-icon-down">
                    <text class="eosfont">&#xe606;</text>
                    <text class="eosfont">&#xe60b;</text>
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
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                keyword: ''
            }
        },
        props: ['step'],
        methods: {
            search(){
                this.$emit('do-search', this.keyword)
            }
        },
        watch:{
            'keyword': function (e) {
                this.$emit('keyword-change', e)
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-header {
        position: fixed;
        top:0;
        left:0;
        width:100%;
        box-sizing: border-box;
        padding: 0 28upx;
        background: white;
        z-index: 10;
        .h-top {
            display: flex;
            align-items: center;
            height: 88upx;

            .t-left {
                flex-basis: 50upx;
            }

            .t-search {
                display: flex;
                align-items: center;
                flex: 1;
                height: 60upx;
                border-radius: 8upx;
                background: #f4f4f4;

                text {
                    flex-basis: 65upx;
                    text-align: center;
                    line-height: 60upx;
                    color: #999;
                }

                input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: #f4f4f4;

                    &::-webkit-search-cancel-button {
                        display: none;
                    }
                }

                .clear {
                    flex-basis: 65upx;
                    text-align: center;
                    line-height: 60upx;
                    color: #999;
                }
            }

            .t-right {
                display: flex;
                justify-content: flex-end;
                flex-basis: 85upx;

                text {
                    color: #666;
                }
            }
        }

        .h-bottom {
            display: flex;
            align-items: center;
            height: 88upx;

            .b-item {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                color: #666;
                .i-icon{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-left: 10upx;
                    text{
                        font-size: 20upx;
                    }
                    &-down{
                        text{
                            &:last-child{
                                color:#b4282d;
                            }
                        }
                    }
                }
                &-active {
                    .i-text{
                        text {
                            color: #9e0000;
                        }
                    }
                }
            }
        }
    }
</style>
