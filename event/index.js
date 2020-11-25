/*
 * @Author: 码上talk|RC
 * @Date: 2020-11-25 14:30:05
 * @LastEditTime: 2020-11-25 14:37:06
 * @LastEditors: 码上talk|RC
 * @Description:
 * @FilePath: /tacomall-uniapp/event/index.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
import Vue from 'vue'

const vueInstance = new Vue({})
export default {
    trigger: (t, params) => {
        vueInstance.$emit(t, params)
    },
    listener: (t, callback) => {
        vueInstance.$on(t, (params) => {
            callback && callback(params)
        })
    }
}