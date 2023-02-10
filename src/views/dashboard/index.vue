<template>
    <h3>dashboard</h3>
    <h3>{{ a }}</h3>
    <n-button type="primary" @clcik="changeRoute(),a++">点击跳转</n-button>
</template>
<script>
export default {
    data() {
        return {
            a: 1
        }
    },
    methods: {
        changeRoute() {
            console.log(this);
            console.log(111);
            // this.$router.push('/file')
        }
    }
}
</script>
<style lang='scss' scoped>

</style>