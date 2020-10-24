/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-24 14:08:29
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/libs/request.js
 * @Just do what I think it is right
 */
import { appConfig } from '../config'
import { token } from '../utils/token'

const send = (url, params, data, method = 'POST', showLoading = true, base_url = '') => {
    uni.showLoading({
        title: '加载中'
    })
    return new Promise((resolve) => {
        let strParams = ''
        let i = 0
        for (let k in params) {
            let q = ''
            if (i === 0) {
                q = '?'
            } else {
                q = '&'
            }
            strParams = strParams + q + k + '=' + params[k]
            i++
        }
        uni.request({
            method: method,
            url: (base_url ? base_url : appConfig.apiUrl) + url + strParams,
            data: data,
            header: (() => {
                const tokeValue = token.get()
                let config = {
                    'Content-Type': 'application/json'
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
    post: (url, params, data = {}) => {
        return send(url, params, data, 'POST')
    }
}
