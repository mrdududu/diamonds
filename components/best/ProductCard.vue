<template lang="pug">
div.flex
  div(class="flex justify-around items-start rounded-xl px-20 py-12" style="background-color: #444444;")
    div
      div(class="mr-8" style="width: 186px;")
        img(src="/img/catalog/round.png")
      CatalogHighProfit(percent="63" text="Высокая динамика доходности")    
    div(class="ml-8 text-sm")
      div Бриллиант
      div.text-base.py-2 огранка Круглая
      div Вес: {{item.dia_carat}} карата
      div Граней: 57
      div Цвет: {{item.dia_color}}
      div Чистота: 8
      div Тип огранки: A
      div Цена: {{item.dia_price_tink}} руб
      div(class="mt-6" style="width: 180px;")
        UikitTfButtonAccent Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});
</script>
