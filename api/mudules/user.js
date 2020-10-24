/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-10-24 14:03:24
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/api/mudules/user.js
 * @Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    wxMaLogin: (params, data) => {
        return request.post('portal/member/wxMaLogin', params, data)
    },
    info: (params) => {
        return request.post('portal/member/info', params)
    }
}
