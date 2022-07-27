<template lang="pug">
DiamondsguideLayout
  template(#title) Огранка
  template(#text) Учитываются форма, тип огранки, пропорции, #[br] качество обработки (симметрия, полировка и т. д.).
  template(#default)
    div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-16")
      div(v-for="item in gridData" :key="item.key")
        div(class="h-52 flex items-center")
          img(:src="`/img/diamonds/${imgKey}/${imgKey}_${item.key}.svg`")
        div(class="text-xl mb-4") {{item.name}}
        div(class="text-sm") {{item.desc}}
</template>
<script setup>
import gridData from '~/components/DiamondsGuide/data/shape.json';
const imgKey = 'shape';
</script>
