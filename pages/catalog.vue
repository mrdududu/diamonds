<template lang="pug">
div(class="")
  div.mb-8
    h2 Каталог
  div(class="grid grid-cols-2 md:grid-cols-4 gap-12")
    CatalogPreview(v-for="item in items" :key="item")
  div.my-16.flex.justify-center
    CatalogPageNav(:totalPages="state.totalPages" :pageIndex="state.pageIndex" :indent="1" @page-click="pageClick")
</template>
<script setup>
import { reactive } from 'vue';

const state = reactive({
  totalPages: 12,
  pageIndex: 0,
});

const items = Array.from(Array(12), (_, x) => x);
const pageClick = (pageIndex) => {
  console.log('pageClick', pageIndex);
  state.pageIndex = pageIndex;
};
</script>
