<template lang="pug">
div(class="")
  div.mb-8
    h2 Каталог
  div(class="grid grid-cols-2 md:grid-cols-4 gap-12")
    CatalogPreview(v-for="item in items" :key="item")
  div.my-16
    CatalogPageNav(:totalPages="12" :pageIndex="8" :indent="2" @page-click="pageClick")
</template>
<script setup>
const items = Array.from(Array(12), (_, x) => x);
const pageClick = (pageIndex) => {
  console.log('pageClick', pageIndex);
};
</script>
