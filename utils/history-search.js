/*
 * @Author: 码上talk|RC
 * @Date: 2020-10-24 12:08:37
 * @LastEditTime: 2020-10-24 12:27:50
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/utils/history-search.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
import { appConfig } from '../config'

const MAX_STORAGE_SIZE = 8

export const historySearch = {
    add: (s) => {
        let arrHis = uni.getStorageSync(appConfig.historySearchKey) ? JSON.parse(uni.getStorageSync(appConfig.historySearchKey)) : []
        if (arrHis.includes(s)) {
            arrHis.splice(arrHis.indexOf(s), 1)
        }
        if (arrHis.length >= MAX_STORAGE_SIZE) {
            arrHis.splice(arrHis.length - 1, 1)
        }
        arrHis.push(s)
        uni.setStorageSync(appConfig.historySearchKey, JSON.stringify(arrHis))
    },
    // 从本地缓存中同步获取历史搜索记录
    get: () => {
        return uni.getStorageSync(appConfig.historySearchKey) ? JSON.parse(uni.getStorageSync(appConfig.historySearchKey)) : []
    },
    clear: () => {
        uni.removeStorageSync(appConfig.historySearchKey)
    }
}