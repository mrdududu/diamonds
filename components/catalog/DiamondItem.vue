<template lang="pug">
div
  div(class="bg-tf-white rounded-xl square overflow-hidden")
    img(src="/img/catalog/round.png")
  div(class="p-3 text-sm")
    div Бриллиант
    div.text-base.py-2 огранка Круглая
    div Вес: {{item.dia_carat}} карата
    div Граней: 57
    div Цвет: {{item.dia_color}}
    div Чистота: 8
    div Тип огранки: A
    div Цена: {{item.dia_price_tink}} руб
</template>
<script setup>
const props = defineProps({
  item: Object,
});
</script>
