<template>
    <el-button class="lsbtn-item" type="primary" plain>
        <template v-if="isFirst" #default>
            <el-input v-model="input" style="width: 120px" placeholder="新建清单" />
            <span style="width: 10px;"></span>
            <el-button type="primary" :icon="Check" circle @click="$emit('commitCreateList', input)" />
            <el-button type="danger" :icon="Delete" circle />
        </template>
        <template v-else #default>
            <div class="lsbtn-item-inner">
                <slot name="icon">
                    <el-icon>
                        <Tickets />
                    </el-icon>
                </slot>
                <span style="width: 5px;"></span>
                <slot name="title"></slot>
            </div>
        </template>
    </el-button>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { Tickets, Check, Delete } from '@element-plus/icons-vue';

const { isFirst } = defineProps({
    isFirst: Boolean,
});

const input = ref('');

</script>

<style scoped>
.lsbtn-item {
    --lsbtn-width: 250px;
    width: var(--lsbtn-width);
}

.lsbtn-item-inner {
    --lsbtn-inner-width: 210px;
    width: var(--lsbtn-inner-width);
}
</style>