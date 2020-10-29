/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-13 10:00:35
 * @LastEditTime: 2020-10-28 19:44:36
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/model/goods/index.js
 * @Just do what I think it is right
 */
import { GoodsItem } from './goodsItem'
export class Goods {
    constructor(goods = {
        goodsItem: []
    }) {
        const { id, name, attrJson, goodsItem } = goods
        this.id = id
        this.name = name
        this.attrJson = attrJson ? JSON.parse(attrJson) : []
        this.goodsItem = goodsItem.map(i => new GoodsItem(i))
    }
}