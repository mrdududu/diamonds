<template lang="pug">
CatalogDiamondItem(class="bg-tf-gray-dark rounded-xl" :item="item")
</template>
<script setup>
const props = defineProps({
  item: Object,
});
</script>
