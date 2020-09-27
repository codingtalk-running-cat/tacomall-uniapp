export const provider = {
    init: () => {
        const filters = ['weixin', 'qq', 'sinaweibo']
        let providerList = []
        return new Promise((resolve) => {
            uni.getProvider({
                service: 'oauth',
                success: (res) => {
                    if (res.provider && res.provider.length) {
                        for (let i = 0; i < res.provider.length; i++) {
                            if (~filters.indexOf(res.provider[i])) {
                                providerList.push({
                                    value: res.provider[i]
                                })
                            }
                        }
                        resolve(providerList)
                    }
                },
                fail: (err) => {
                    console.error('获取服务供应商失败：' + JSON.stringify(err))
                }
            })
        })
    },
    oauth: (value) => {
        return new Promise((resolve) => {
            uni.login({
                provider: value,
                success: (res) => {
                    uni.getUserInfo({
                        provider: value,
                        success: (infoRes) => {
                            /**
                             * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                             * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                             */
                            resolve(infoRes)
                        }
                    });
                },
                fail: (err) => {
                    console.error('授权登录失败：' + JSON.stringify(err))
                }
            })
        })
    }
}