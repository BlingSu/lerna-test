<template>
    <div class="mobile"
        id="toTop"
        @click="toTop"
        v-show="btnFlag"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'mobile-header',
    props: ['visibilityHeight', 'type', 'container'],
    data () {
        return {
            btnFlag: true,
            time: null
        }
    },
    methods: {
    //     // 返回头部的方法，计时器是为了过渡顺滑
        toTop () {
          console.log(1)
        }
    }
}
</script>
<style lang="css" scoped>
.mobile {
    width: 20px;
    height: 44px;
}
</style>
