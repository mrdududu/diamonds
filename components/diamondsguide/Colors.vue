<template lang="pug">
DiamondsguideLayout
  template(#title) Цвет
  template(#text) Главный фактор, влияющий на оценку #[br] ювелирного цветного камня.
  template(#default)
    DiamondsguideGrid(imgKey="color" :gridData="gridData")
</template>
<script setup>
import gridData from '~/data/colors.json';
</script>
