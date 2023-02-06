<template>
    <div class="menu">
        <div class="menu-logo">
            <img src="@/assets/icons/vue.svg" alt="logo" class="icon">
            <span v-show="!isCollapse">Naive-Admin</span>
        </div>
        <div class="menu-content">
            <n-menu :options="menuOptions" :collapsed="isCollapse" :collapsed-width="48" :collapsed-icon-size="24"
                @update:value="handleUpdateValue" />
        </div>
    </div>
</template>
<script setup>
import { h, ref } from "vue";
import { NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
    HomeOutline as HomeIcon
} from "@vicons/ionicons5";

const props = defineProps({
    isCollapse: Boolean
})

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
    {
        label: "logo",
        key: "go-back-home",
        icon: renderIcon(HomeIcon)
    },
    {
        label: () => h(
            "a",
            {
                href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
                target: "_blank",
                rel: "noopenner noreferrer"
            },
            "且听风吟"
        ),
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
    },
    {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        children: [
            {
                label: "鼠",
                key: "rat"
            }
        ]
    },
    {
        label: "寻羊冒险记",
        key: "a-wild-sheep-chase",
        icon: renderIcon(BookIcon),
    },
    {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
            {
                type: "group",
                label: "人物",
                key: "people",
                children: [
                    {
                        label: "叙事者",
                        key: "narrator",
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: "羊男",
                        key: "sheep-man",
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: "饮品",
                key: "beverage",
                // icon: renderIcon(WineIcon),
                children: [
                    {
                        label: "威士忌",
                        key: "whisky"
                    }
                ]
            },
            {
                label: "食物",
                key: "food",
                children: [
                    {
                        label: "三明治",
                        key: "sandwich"
                    }
                ]
            },
            {
                label: "过去增多，未来减少",
                key: "the-past-increases-the-future-recedes"
            }
        ]
    }
];

function handleUpdateValue(key, item) {
    window.$message.info("[onUpdate:value]: " + JSON.stringify(key));
    window.$message.info("[onUpdate:value]: " + JSON.stringify(item));
}

let collapsed = ref(false)
</script>
<style lang='scss' scoped>
.menu {
    height: 100vh;

    &-logo {
        height: 50px;
        border-bottom: solid 1px var(--n-border-color);
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
            width: 36px;
            height: 36px;
        }

        span {
            font-weight: 700;
            font-size: 18px;
            opacity: 1;
            overflow: hidden;
            white-space: nowrap;
            margin-left: 10px;
        }
    }
}
</style>