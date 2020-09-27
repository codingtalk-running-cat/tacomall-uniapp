/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 10:10:14
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\store\user\mutations.js
 * @Just do what I think it is right
 */ 
import * as types from './mutation-types'
import { User } from '../../model/user'

export const mutations = {
    [types.SET_SYNOPSIS](state, o) {
        state.info = new User(o)
    }
}
