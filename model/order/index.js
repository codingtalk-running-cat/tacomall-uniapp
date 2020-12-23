/*
 * @Author: 码上talk|RC
 * @Date: 2020-11-03 09:06:03
 * @LastEditTime: 2020-12-23 17:57:11
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/model/order/index.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
export class Order {
    constructor(order = {}) {
        const { id, totalAmount } = order
        this.id = id
        this.totalAmount = totalAmount
    }
}