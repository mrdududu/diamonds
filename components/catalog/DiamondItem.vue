<template lang="pug">
div
  div
    div(class="pt-8 px-3")
      img(:src="$getPhotoUrl(item)")
    CatalogHighProfit(v-if="item.dia_profit" class="p-3" :percent="item.dia_profit" text="Высокая динамика доходности")
  div(class="p-3 text-sm")
    div Бриллиант
    div.text-base.py-2 огранка {{item.dia_shape}}
    div Вес: {{item.dia_carat}} карата
    div Граней: {{item.dia_edges}}
    div Цвет: {{item.dia_color}}
    div Чистота: {{item.dia_clarity}}
    div Тип огранки: {{item.dia_cut_type}}
    div Цена: {{item.dia_price_tink}} руб
</template>
<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig();
const props = defineProps<{ item: any }>();

// const getPhotoUrl = (item: any) =>
//   `${runtimeConfig.public.apiHost}${item.dia_photo.data.attributes.url}`;
</script>
