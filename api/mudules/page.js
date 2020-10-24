/*
 * @Author: 码上talk|RC
 * @Date: 2020-07-29 09:30:17
 * @LastEditTime: 2020-10-24 14:02:50
 * @LastEditors: 码上talk|RC
 * @Description:
 * @FilePath: /tacomall-uniapp/api/mudules/page.js
 * @Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    info: (params) => {
        return request.post('portal/page/info', params)
    }
}