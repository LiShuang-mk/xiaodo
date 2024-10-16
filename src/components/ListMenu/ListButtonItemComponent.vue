<template>
    <el-button class="lsbtn-item" type="primary" plain>
        <template #default>
            <div class="lsbtn-item-inner">
                <el-icon>
                    <Tickets />
                </el-icon>
                <span style="width: 5px;"></span>
                <slot></slot>
            </div>
        </template>
    </el-button>
</template>

<script setup>
import { Tickets } from '@element-plus/icons-vue';

</script>

<style scoped>
.lsbtn-item {
    --lsbtn-width: 180px;
    width: var(--lsbtn-width);
}

.lsbtn-item-inner {
    --lsbtn-inner-width: 160px;
    width: var(--lsbtn-inner-width);
}
</style>