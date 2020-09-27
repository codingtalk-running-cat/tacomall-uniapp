import Vue from 'vue'

Vue.mixin({
    methods: {
        red: (url) => {
            uni.redirectTo({
                url: url
            })
        },
        nav: (url) => {
            uni.navigateTo({
                url: url
            })
        },
        back: () => {
            uni.navigateBack({
                delta: 1
            })
        },
        swi: (url) => {
            uni.switchTab({
                url: url
            })
        },
        toast(s) {
            uni.showToast({
                title: s,
                icon: 'none',
                duration: 2000
            })
        }
    }
})
