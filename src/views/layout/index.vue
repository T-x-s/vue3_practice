<template>
    <n-layout has-sider	>
        <n-layout-sider class="sider" bordered :inverted="false" :collapsed="false" :width="200">
            <Menu></Menu>
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered >
                <Header></Header>
            </n-layout-header>
            <n-layout-content class="content" bordered :native-scrollbar="false">
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
.content,.sider {
    height: 100vh;
}

</style>