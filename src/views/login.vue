<template>
    <div class="bg">
        <div class="bg-form">
            <h3 class="title">某个后台管理系统</h3>
            <n-form ref="formRef" label-placement="left" label-width="auto" :label-width="80" :model="user"
                :rules="rules" :size="size">
                <n-form-item path="name">
                    <n-input v-model:value="user.name" placeholder="输入账号">
                        <template #prefix>
                            <img src="@/assets/icons/user.svg" alt="账户" class="input-icon" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item path="password">
                    <n-input v-model:value="user.password" type="password" show-password-on="mousedown"
                        placeholder="输入密码">
                        <template #prefix>
                            <img src="@/assets/icons/password.svg" alt="账户" class="input-icon" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item>
                    <n-button type="primary" attr-type="button" style="width: 100%;" @click="handleValidateLogin">
                        登录
                    </n-button>
                </n-form-item>
            </n-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from "vue-router"
// import { NForm, NFormItem, NButton, NInput } from 'naive-ui'
/* 
    登录逻辑
*/
const size = ref("medium");
const user = reactive({
    name: "admin",
    password: ""
})
const rules = {
    name: {
        required: true,
        message: "请输入账号",
        trigger: "blur"
    },
    password: {
        required: true,
        message: "请输入密码",
        trigger: ["input", "blur"]
    }
}
const $router = useRouter();
const formRef = ref();
function handleValidateLogin(e) {
    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            $router.push({
                path: "layout"
            });
        }
    })

}
</script>

<style lang='scss' scoped>
.bg {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/4k.png");
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;

    &-form {
        border-radius: 6px;
        background-color: #fff;
        width: 400px;
        padding: 25px 25px 5px 25px;

        .title {
            text-align: center;
            color: #707070;
            margin: 0 auto 30px auto;
        }

        .input-icon {
            margin-right: 5px;
            margin-left: 0px;
        }
    }
}
</style>