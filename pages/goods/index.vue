<template>
    <view class="page goods">
        <view class="g-header">
            <view class="h-left">
            </view>
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
                        <image src="http://yanxuan.nosdn.127.net/4593d6fa1259e061e02b9c54a2ddb460.jpg?imageView&quality=75&thumbnail=750x0"></image>
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="b-image">
                        <image src="http://yanxuan.nosdn.127.net/6cb81bcc1e3292014adabf65bc3fe5ff.jpg?imageView&quality=75&thumbnail=750x0"></image>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="g-info">
            <view class="i-name">
                <text>小米8 SE</text>
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
            <view class="g-cell">
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
            <view class="g-cell">
                <view class="c-left">
                    <text>规格：</text>
                </view>
                <view class="c-mid">
                    <text>4G 米兰白</text>
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
                                        <image src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg"></image>
                                    </view>
                                    <view class="u-name">
                                        <text>T*****rstruck</text>
                                    </view>
                                    <view class="u-star">
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
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
                                        <image src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg"></image>
                                    </view>
                                    <view class="u-name">
                                        <text>T*****rstruck</text>
                                    </view>
                                    <view class="u-star">
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
                                        <image src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png"></image>
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
                    <image src="http://yanxuan.nosdn.127.net/64181a4409dc4c4a116f0e0b6c6d8fb4.jpg"></image>
                </view>
                <view class="c-item">
                    <image src="http://yanxuan.nosdn.127.net/fc5f3104ec3f8493c636d8552e3ce9bf.jpg"></image>
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
                <view class="r-item r-item-cart">
                    <text>加入购物车</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {}
</script>

<style lang="less">
    @import "./index";
</style>
