/*
 * @Author: 码上talk|RC
 * @Date: 2020-10-24 12:57:25
 * @LastEditTime: 2020-10-26 18:55:02
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/api/mudules/goods.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    page: (params = {}, data = {}) => {
        return request.post('portal/goods/getGoodsPage', params, data)
    }
}