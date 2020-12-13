/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-12-13 11:30:29
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
        isLogin: false,
        app: {
            platform: ''
        }
    },
    mutations: {
        SET_IS_LOGIN(state, b) {
            state.isLogin = b
        },
        SET_APP_PLATFORM(state, s) {
            state.app.platform = s
        }
    },
    actions: {
        initApp({ dispatch, commit }) {
            // #ifdef MP-WEIXIN
            commit('SET_APP_PLATFORM', 'MP-WEIXIN')
            // #endif
            token.get() && dispatch('user/getUserInfo')
        }
    }
})

export default store
