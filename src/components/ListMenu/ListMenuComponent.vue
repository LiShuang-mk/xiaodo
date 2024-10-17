<template>
    <el-collapse class="lsv-clp-menu" v-model="activeNames">
        <el-collapse-item class="lsv-clp-item" title="清单列表" name="clp-list">
            <ListButtonItemComponent :is-first="item.isFirst" class="clp-list-btn" v-for="item in ListItemsVec"
                @commit-create-list="handleCommitCreateList">
                <template #title>{{ item.title }}</template>
            </ListButtonItemComponent>
            <ListButtonItemComponent :hidden="isCreatingList" :is-first=false class="clp-list-btn" @click="addList"
                @commit-create-list="handleCommitCreateList">
                <template #icon>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </template>
                <template #title>
                    新增清单
                </template>
            </ListButtonItemComponent>
        </el-collapse-item>
        <el-collapse-item class="lsv-clp-item" title="标签列表" name="clp-tag">
            <ListButtonItemComponent :is-first="item.isFirst" class="clp-list-btn" v-for="item in LabelItemsVec"
                @commit-create-list="handleCommitCreateList">
                <template #title>{{ item.title }}</template>
            </ListButtonItemComponent>
            <ListButtonItemComponent :is-first=false class="clp-list-btn" @click="addTitle"
                @commit-create-list="handleCommitCreateList">
                <template #icon>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </template>
                <template #title>
                    新增标签
                </template>
            </ListButtonItemComponent>
        </el-collapse-item>
        <el-collapse-item class="lsv-clp-item" title="？？？" name="clp-other">
            ？？？
        </el-collapse-item>
    </el-collapse>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Plus } from '@element-plus/icons-vue'
import ListButtonItemComponent from './ListButtonItemComponent.vue';

const activeNames = ref(['clp-list']);
const isCreatingList = ref(false);

const ListItemsVec = reactive([{ title: "清单1", isFirst: true }])
const LabelItemsVec = reactive([{ title: "标签1", isFirst: false }])

function addList() {
    console.log("add list");
}

function addTitle() {
    console.log("add title");
}

function handleCommitCreateList(listName) {
    console.log("commit create list", listName);
}

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