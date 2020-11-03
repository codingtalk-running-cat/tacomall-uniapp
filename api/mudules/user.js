/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-11-03 09:00:58
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/api/mudules/user.js
 * @Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    wxMaLogin: (params = {}, data = {}) => {
        return request.post('portal/member/wxMaLogin', params, data)
    },
    info: (params = {}, data = {}) => {
        return request.post('portal/member/info', params, data)
    },
    cart: (params = {}, data = {}) => {
        return request.post('portal/member/getCart', params, data)
    },
    addCart: (params = {}, data = {}) => {
        return request.post('portal/member/addCart', params, data)
    },
    deleteCart: (params = {}, data = {}) => {
        return request.post('portal/member/deleteCart', params, data)
    },
    addOrder: (params = {}, data = {}) => {
        return request.post('portal/member/addOrder', params, data)
    },
    getOrderPage: (params = {}, data = {}) => {
        return request.post('portal/member/getOrderPage', params, data)
    }
}
