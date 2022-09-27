<template lang="pug">
div
  div
    div(class="pt-8 px-3")
      img(:src="$getPhotoUrl(item)" :class="{'opacity-50': item.dia_sold}")
    CatalogHighProfit(v-if="item.dia_profit" class="p-3" :percent="item.dia_profit" text="Высокая динамика доходности")
    div(v-if="item.dia_sold" class="p-3 flex")
      img(src="/img/icons/sold.svg")
      div(class="ml-2 text-tf-pink") продано
  div(class="p-3 text-sm")
    div Бриллиант
    div.text-base.py-2 огранка {{item.dia_shape}}
    div Вес, карат: {{item.dia_carat}}
    div Граней: {{item.dia_edges}}
    div Цвет: {{item.dia_color}}
    div Чистота: {{item.dia_clarity}}
    div Тип огранки: {{item.dia_cut_type}}
    div Цена: {{item.dia_price_tink}} руб
</template>
<script setup>
const props = defineProps({ item: Object });
</script>
