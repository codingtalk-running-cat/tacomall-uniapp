/*
 * @Author: 码上talk|RC
 * @Date: 2020-10-24 15:02:14
 * @LastEditTime: 2020-12-09 19:22:55
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/model/goods/goodsItem.js
 * @微信:  13680065830
 * @邮箱:  3189482282@qq.com
 * @oops: Just do what I think it is right
 */
export class GoodsItem {
    constructor(goodsItem = {}) {
        const { id, attrJson, name, amount } = goodsItem || {}
        this.id = id
        this.attrJson = attrJson ? JSON.parse(attrJson) : []
        this.name = name
        this.amount = amount
    }
}