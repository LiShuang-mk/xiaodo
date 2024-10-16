<template>
    <el-collapse class="lsv-clp-menu" v-model="activeNames">
        <el-collapse-item class="lsv-clp-item" title="清单列表" name="clp-list">
            <ListButtonItemComponent class="clp-list-btn">清单1</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">清单2</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">清单3</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">清单4</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">清单5</ListButtonItemComponent>
        </el-collapse-item>
        <el-collapse-item class="lsv-clp-item" title="标签列表" name="clp-tag">
            <ListButtonItemComponent class="clp-list-btn">标签1</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">标签2</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">标签3</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">标签4</ListButtonItemComponent>
            <ListButtonItemComponent class="clp-list-btn">标签5</ListButtonItemComponent>
        </el-collapse-item>
        <el-collapse-item class="lsv-clp-item" title="？？？" name="clp-other">
            ？？？
        </el-collapse-item>
    </el-collapse>
</template>

<script setup>
import { ref } from 'vue';
import { List, Tickets } from '@element-plus/icons-vue';
import ListButtonItemComponent from './ListButtonItemComponent.vue';

const activeNames = ref(['clp-list']);

</script>

<style scoped>
.clp-list-btn {
    margin: 5px !important;
    color: black;
    width: 90%;
    background-color: var(--color-aside-bg);
    border-color: transparent !important;
    text-align: left !important;
}

/* .clp-list-btn * {
    --lsbtn-inner-width: .clp-list-btn.width !important;
} */

.clp-list-btn span {
    margin: 10px !important;
}

.clp-list-btn:hover {
    background-color: var(--color-aside-soft-bg);
}

.lsv-clp-menu {
    --el-collapse-border-color: transparent !important;
}

.lsv-clp-item {
    --el-collapse-header-bg-color: var(--color-aside-bg) !important;
    --el-collapse-content-bg-color: var(--color-aside-bg) !important;
}
</style>