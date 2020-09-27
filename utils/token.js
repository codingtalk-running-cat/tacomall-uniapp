import {appConfig} from '../config'

export const token = {
    set: (s) => {
        uni.setStorageSync(appConfig.tokenKey, s)
    },
    get: () => {
        return uni.getStorageSync(appConfig.tokenKey)
    },
    clear: () => {
        uni.removeStorageSync(appConfig.tokenKey)
    }
}
