<template lang="pug">
DiamondsguideLayout
  template(#title) Чистота
  template(#text) Степень «свободы» камня от внутренних #[br] характеристик.
  template(#default)
    DiamondsguideGrid(imgKey="clarity" :gridData="gridData")
</template>
<script setup>
import gridData from '~/components/DiamondsGuide/data/clarity.json';
</script>
