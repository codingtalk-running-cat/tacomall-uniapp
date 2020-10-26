/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-26 19:04:08
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/libs/request.js
 * @Just do what I think it is right
 */
import { appConfig } from '../config'
import { token } from '../utils/token'

const buildStrParams = (params) => {
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
    return strParams
}

const send = (url, params, data, method = 'POST', showLoading = true, base_url = '') => {
    uni.showLoading({
        title: '加载中'
    })
    return new Promise((resolve) => {
        uni.request({
            method: method,
            url: (base_url ? base_url : appConfig.apiUrl) + url + buildStrParams(params),
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
                const { code, data } = res.data
                uni.hideLoading()
                if (code === 2001) {
                    token.clear()
                    uni.switchTab({
                        url: '/pages/index/index',
                        success: () => {
                            uni.redirectTo({
                                url: '/pages/login/index'
                            })
                        }
                    })
                }
                resolve(res.data)
            }
        })
    })
}

export const request = {
    post: (url, params, data) => {
        return send(url, params, data, 'POST')
    }
}
