/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-09-27 21:50:39
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-uniapp/store/index.js
 * @Just do what I think it is right
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

import { token } from '../utils/token'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
        isLogin: false
    },
    mutations: {
        SET_IS_LOGIN(state, b) {
            state.isLogin = b
        }
    },
    actions: {
        initApp({ dispatch, commit }) {
            token.get() && dispatch('user/getUserInfo')
        }
    }
})

export default store
