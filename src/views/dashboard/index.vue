<template>
    <h3>dashboard</h3>
    <n-button type="primary" @click="handleRoute">点击跳转</n-button>
</template>
<script setup>
// import { ref } from "vue"
import { useRouter,useRoute } from "vue-router"
const router = useRouter();
const route = useRoute();
function handleRoute() {
    // router.push(`/file/${123}`)
    // router.push({
    //     path: `/file/${234}`
    // })
    // router.push({
    //     name: 'File',
    //     params: {
    //         id: 123
    //     }
    // })
    router.push({
        path: '/file/file1',
        query: {
            id: '111'
        }
    })
}
</script>
<style lang='scss' scoped>

</style>