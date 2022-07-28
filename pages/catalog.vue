<template lang="pug">
div(class="")
  div
    h2 Каталог
  div(class="grid grid-cols-2 md:grid-cols-4 gap-12")
    CatalogPreview(v-for="item in items" :key="item")
</template>
<script setup>
const items = Array.from(Array(12), (_, x) => x);
</script>
