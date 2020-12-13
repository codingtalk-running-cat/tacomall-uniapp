/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-12-13 15:59:55
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/plugins/mixins.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
import Vue from 'vue'
import { Goods } from '../model/goods'

Vue.mixin({
    filters: {
        amount(n) {
            if (!n) {
                return 0.00
            }
            return n.toFixed(2)
        }
    },
    methods: {
        red: (url) => {
            uni.redirectTo({
                url: url
            })
        },
        nav: (url) => {
            uni.navigateTo({
                url: url
            })
        },
        back: () => {
            uni.navigateBack({
                delta: 1
            })
        },
        swi: (url) => {
            uni.switchTab({
                url: url
            })
        },
        toast(s) {
            uni.showToast({
                title: s,
                icon: 'none',
                duration: 2000
            })
        },
        navToGoodsDetail(g) {
            const goods = new Goods(g)
            this.nav(`/pages/goods/index?id=${goods.id}&sku=${goods.goodsItem[0].id}`)
        }
    },
    onShareAppMessage(res) {
        return {
            title: '塔可开源，致力于企业级新零售解决方案',
            path: '/pages/index/index'
        }
    },
    onShareTimeline(res) {
        return {
            title: '塔可开源，致力于企业级新零售解决方案',
            path: '/pages/index/index'
        }
    }

})
