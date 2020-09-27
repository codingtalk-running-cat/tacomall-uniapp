<!--
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 09:58:06
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\App.vue
 * @Just do what I think it is right
--> 
<script>
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["initApp"])
    },
    onLaunch: function() {
        console.log("App Launch");
    },
    onShow: function() {
        this.initApp();
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    }
};
</script>

<style lang="less">
@import "./common/less/base";
@import "./common/less/iconfont";
@import "./common/less/border-1px";
</style>
