/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-13 10:00:35
 * @LastEditTime: 2020-10-21 15:43:43
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/model/user/index.js
 * @Just do what I think it is right
 */
export class User {
    constructor(user = {
        memberStatisticsInfo: {}
    }) {
        const { id, nickname, avatar, memberStatisticsInfo } = user
        this.id = id
        this.nickname = nickname
        this.avatar = avatar
        this.consumeAmount = memberStatisticsInfo.consumeAmount
        this.orderNonPaymentCount = memberStatisticsInfo.orderNonPaymentCount
        this.orderPaidCount = memberStatisticsInfo.orderPaidCount
        this.orderDoneCount = memberStatisticsInfo.orderDoneCount
        this.orderReturnCount = memberStatisticsInfo.orderReturnCount
        this.integralCount = memberStatisticsInfo.integralCount
        this.growthCount = memberStatisticsInfo.growthCount
    }
}