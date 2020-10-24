/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-24 15:07:04
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
    }
})
