<template>
    <div class="header">
        <div class="header-left">
            <div class="hamburger-container" @click="handleFold">
                <img src="@/assets/icons/hamburger2.svg" alt="折叠" class="hamburger-icon" />
            </div>
            <div class="">
                <n-breadcrumb>
                    <n-breadcrumb-item>首页</n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>
        <div class="header-right">
            <div class="search right-item">
                <img src="@//assets/icons/search.svg" alt="搜索" class="right-icon">
            </div>
            <div class="github right-item" @click="handleJump">
                <img src="@/assets/icons/github.svg" alt="github" class="right-icon">
            </div>
            <div class="zoom right-item" @click="toggle">
                <img v-show="isFullscreen" src="@/assets/icons/narrow.svg" alt="缩放" class="right-icon">
                <img v-show="!isFullscreen" src="@/assets/icons/enlarge.svg" alt="缩放" class="right-icon">
            </div>
            <div class="typeface right-item">
                <img src="@/assets/icons/typeface.svg" alt="字体" class="right-icon">
            </div>
            <div class="avatar right-item">
                <div class="avatar-wrapper">
                    <img src="@/assets/images/avatar.jpg" alt="头像" class="use-avatar">
                    <i class="icon-caret-bottom"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { useFullscreen } from '@vueuse/core';
const emits = defineEmits(['changeCollapse'])
/* github跳转 */
function handleJump() {
    window.open("https://github.com/T-x-s/vue3_practice");
}
/* 缩放 */
const { isFullscreen, toggle } = useFullscreen();

let collapsed = ref(false);

function handleFold(){
    collapsed.value = !collapsed.value;
    emits('changeCollapse',collapsed);
}
</script>
<style lang='scss' scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 49px;

    &-left {
        display: flex;
        align-items: center;
        justify-content: center;

        .hamburger-container {
            padding: 0px 15px;
            cursor: pointer;

            // transition: background .3s;
            .hamburger-icon {
                height: 20px;
                width: 20px;
            }
        }
    }

    &-right {
        display: flex;
        align-items: center;
        justify-content: center;

        .avatar {
            margin-right: 30px;

            &-wrapper {
                // margin-top: 5px;
                position: relative;

                .use-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }

                .icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 30px;
                    width: 0;
                    height: 0;
                    border: 6px solid transparent;
                    border-bottom: none;
                    border-top-color: #5a5e66;
                }
            }
        }
    }
}

.right-item {
    padding: 0 8px;
    color: #5a5e66;
    vertical-align: text-bottom;
}

.right-icon {
    height: 18px;
    width: 18px;
    cursor: pointer;
}
</style>