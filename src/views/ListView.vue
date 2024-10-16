<template>
    <div style="width: 100%; height: 100%;">
        <el-container class="lsv-container">
            
            <el-container>
                <el-aside width="200px" class="lsv-aside">
                    <ListMenuComponent />
                </el-aside>
                <el-main class="lsv-main">
                    <p>显示日程列表</p>
                    <p>this is body</p>
                    <p>this is body</p>
                    <p>this is body</p>
                    <p>this is body</p>
                    <p>this is body</p>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import ListMenuComponent from '@/components/ListMenu/ListMenuComponent.vue';

</script>

<style>
.lsv-container {
    width: 100%;
    height: 100%;
}

.lsv-aside {
    background-color: var(--color-aside-bg);
}

.lsv-main {
    background-color: white;
}
</style>