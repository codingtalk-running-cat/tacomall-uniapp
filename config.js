/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-12-29 19:57:18
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
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://192.168.0.104:4000/' : 'https://apitc.codingtalk.cn/',
    ossUrl: process.env.NODE_ENV === 'development' ? '//codingtalk-imgtest.oss-cn-shenzhen.aliyuncs.com/' : '//img.codingtalk.cn/'
}
