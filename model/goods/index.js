/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-13 10:00:35
 * @LastEditTime: 2020-11-20 16:38:57
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
        const { id, name, goodsItem } = goods
        this.id = id
        this.name = name
        this.goodsItem = goodsItem.map(i => new GoodsItem(i))
    }
}