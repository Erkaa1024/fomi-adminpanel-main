<template>
  <n-pagination
    v-model:page-size="pageSize"
    :page-count="10">
    <template #prev>
      &laquo;
    </template>
    <template #next>
      &raquo;
    </template>
  </n-pagination>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      pageSize: ref(15)
    };
  }
});
</script>

<style lang="scss">
  .n-pagination-item--active{
    color: #038FDE !important;
    border-color: #038FDE !important;
  }
  .n-pagination-item:hover{
    color: #038FDE !important;
  }
</style>