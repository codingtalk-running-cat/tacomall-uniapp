/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 09:57:20
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\api\mudules\user.js
 * @Just do what I think it is right
 */
import { request } from '../../libs/request'

export default {
    wxMaLogin: (data) => {
        return request.post('portal/member/wxMaLogin', data)
    },
    info: (data) => {
        return request.post('portal/member/info', data)
    }
}
