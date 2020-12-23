/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-12-13 17:58:35
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/config.js
 * @Just do what I think it is right
 */
export const appConfig = {
    wx: {
        appid: 'wx564dd23bb47073b1'
    },
    tokenKey: 'user-access-token',
    historySearchKey: 'local-history-search',
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : 'https://apitc.codingtalk.cn/'
}
