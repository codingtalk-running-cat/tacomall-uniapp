/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-21 16:59:38
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/store/user/actions.js
 * @Just do what I think it is right
 */
import api from '../../api'
import * as types from './mutation-types'
import { appConfig } from '../../config'
import { token } from '../../utils/token'

export const actions = {
    login: () => {
        return new Promise((resolve, reject) => {
            uni.login({
                provider: 'weixin',
                success: res => {
                    uni.getUserInfo({
                        provider: 'weixin',
                        withCredentials: true,
                        lang: 'zh_CN',
                        success: e => {
                            api.user
                                .wxMaLogin({
                                    appid: appConfig.wx.appid,
                                    code: res.code,
                                    iv: e.iv,
                                    rawData: e.rawData,
                                    signature: e.signature,
                                    encryptedData: e.encryptedData
                                })
                                .then(resp => {
                                    if (resp.status) {
                                        token.set(resp.data)
                                        resolve()
                                    } else {
                                        reject()
                                    }
                                })
                        }
                    })
                }
            })
        })
    },
    getUserInfo: ({ commit }) => {
        return new Promise((resolve) => {
            api.user.info().then(resp => {
                if (resp.status) {
                    commit('SET_IS_LOGIN', true, { root: true })
                    commit(types.SET_SYNOPSIS, resp.data)
                    resolve()
                }
            })
        })
    },
    logout: ({ commit }) => {
        return new Promise((resolve) => {
            token.clear()
            commit('SET_IS_LOGIN', false, { root: true })
            resolve()
        })
    }
}
