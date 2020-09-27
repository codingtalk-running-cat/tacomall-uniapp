/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 09:42:44
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\libs\request.js
 * @Just do what I think it is right
 */ 
import { appConfig } from '../config'
import { token } from '../utils/token'

const send = (url, data = {}, method = 'POST', showLoading = true, base_url = '') => {
    uni.showLoading({
        title: '加载中'
    })
    return new Promise((resolve) => {
        uni.request({
            method: method,
            url: (base_url ? base_url : appConfig.apiUrl) + url,
            data: data,
            header: (() => {
                const tokeValue = token.get()
                let config = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                if (tokeValue) {
                    config[appConfig.tokenKey] = tokeValue
                }
                return config
            })(),
            success: (res) => {
                uni.hideLoading()
                resolve(res.data)
            }
        })
    })
}

export const request = {
    get: (url, data) => {
        return send(url, data, 'GET')
    },
    post: (url, data) => {
        return send(url, data, 'POST')
    }
}
