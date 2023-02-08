<script setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider, NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import TheGlobal from "@/components/TheGlobal.vue";
</script>

<template>
    <!-- <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme"> -->
        <n-dialog-provider>
            <n-notification-provider>
                <n-message-provider container-style="z-index: 99999;">
                    <TheGlobal />
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    <!-- </n-config-provider> -->
</template>

<style scoped>

</style>
