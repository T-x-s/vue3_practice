<template>
    <n-layout has-sider>
        <n-layout-sider bordered>
            <Menu></Menu>
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered >
                <Header></Header>
            </n-layout-header>
            <n-layout-content bordered>
                <Content></Content>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import Menu from "./Menu/index.vue"
import Header from "./Header/index.vue"
import Content from "./Content/index.vue"
</script>
<style lang='scss' scoped>
</style>