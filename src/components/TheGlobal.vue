<template>
    <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { useMessage } from "naive-ui";
window.$message = useMessage();
</script>
