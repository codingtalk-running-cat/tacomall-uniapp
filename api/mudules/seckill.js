/*
 * @Author: 码上talk|RC
 * @Date: 2020-11-02 16:02:24
 * @LastEditTime: 2020-11-02 16:02:39
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/api/mudules/seckill.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    info: (params = {}, data = {}) => {
        return request.post('portal/seckill/info', params, data)
    }
}