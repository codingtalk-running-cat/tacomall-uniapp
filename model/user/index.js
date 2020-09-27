/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-13 10:00:35
 * @LastEditTime: 2020-06-13 10:06:52
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\model\user\index.js
 * @Just do what I think it is right
 */
export class User {
    constructor(user = {}) {
        const { id, nickname, avatar } = user
        this.id = id
        this.nickname = nickname
        this.avatar = avatar
    }
}