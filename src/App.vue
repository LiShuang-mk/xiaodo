<template>
    <div class="base-layout">

        <el-container class="base-container">
            <el-aside :width="asideWidth" class="base-aside">
                <!-- 左侧菜单栏 -->
                <el-menu default-active="1" class="el-menu-vertical" :collapse="isCollapse">
                    <!-- 菜单项：清单视图 -->
                    <RouterLink to="/">
                        <el-menu-item index="1">
                            <el-icon>
                                <Memo />
                            </el-icon>
                            <template #title>清单</template>
                        </el-menu-item>
                    </RouterLink>
                    <!-- 菜单项：日历视图 -->
                    <RouterLink to="/calendar">
                        <el-menu-item index="2">
                            <el-icon>
                                <Calendar />
                            </el-icon>
                            <template #title>日历</template>
                        </el-menu-item>
                    </RouterLink>
                    <!-- 菜单项：番茄钟视图 -->
                    <RouterLink to="/clock">
                        <el-menu-item index="3">
                            <el-icon>
                                <AlarmClock />
                            </el-icon>
                            <template #title>番茄钟</template>
                        </el-menu-item>
                    </RouterLink>
                    <!-- 菜单项：？？？视图 -->
                    <el-menu-item index="4" disabled>
                        <el-icon>
                            <Loading />
                        </el-icon>
                        <template #title>？？？</template>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header class="base-header">
                    <h3>顶部导航栏</h3>
                </el-header>
                <el-main class="base-main">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script setup>

import { ref } from "vue";
import {
    AlarmClock,
    Calendar,
    Memo,
    Loading,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const asideWidth = ref('64px')


</script>

<style>
.base-layout {
    width: 100%;
    height: 100%;
}

.base-header {
    --el-header-height: 40px !important;
    background-color: lightsteelblue;
}

.base-main {
    --el-main-padding: 0px !important;
    width: 100%;
    height: 100%;
}

.base-container {
    width: 100%;
    height: 100%;
}

.base-aside {
    background-color: var(--color-heading);
}


.el-menu-vertical {
    --el-menu-bg-color: var(--color-heading);
    --el-menu-border-color: var(--color-heading);
    --el-menu-text-color: var(--color-background-soft);
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu-item:hover {
    background-color: var(--color-heading-hover) !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>