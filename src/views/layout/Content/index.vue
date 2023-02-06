<template>
    <div class="content">
        <div v-for="item in 100" :key="item">{{ item }}</div>
    </div>
</template>
<script setup>

</script>
<style lang='scss' scoped>
.content {
    height: 100vh;
}
</style>