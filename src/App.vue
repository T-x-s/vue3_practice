<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import { NMessageProvider, NConfigProvider } from "naive-ui";
// import { zhCN, dateZhCN } from "naive-ui";
import TheGlobal from "@/components/TheGlobal.vue";
</script>

<template>
    <n-message-provider container-style="z-index: 99999;">
        <TheGlobal />
    </n-message-provider>
</template>

<style scoped>

</style>
