<template>
    <view class="page account">
        <cell-group title="基础资料">
            <cell title="头像" :is-link="true">
                <div class="a-avatar">
                    <image src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p013qAccs3i9/WT2sfu9guuY496.jpg"></image>
                </div>
            </cell>
            <cell title="账号" value="16607574271"></cell>
            <cell title="昵称" value="tacomall" :is-link="true"></cell>
        </cell-group>
        <cell-group title="保密资料">
            <cell title="手机号" value="16607574271" :is-link="true"></cell>
            <cell title="密码" :is-link="true"></cell>
        </cell-group>
    </view>
</template>

<script>
    import cell from '../../components/cell'
    import cellGroup from '../../components/cell-group'
    export default {
        components: {
            cell,
            cellGroup
        }
    }
</script>

<style lang="less" scoped>
    .account{
        .a-avatar {
            display: inline-block;
            height: 104rpx;
            width: 104rpx;
            margin-right: 54rpx;
            image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
</style>
