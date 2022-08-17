<style scoped>
.product_card {
  background: linear-gradient(253.46deg, #313131 0%, #1e1e1e 100%);
}
</style>
<template lang="pug">
div(class="md:max-w-xl grid grid-cols-2 gap-x-5 md:gap-x-10 py-4 md:py-12 px-6 md:px-20 md:rounded-xl product_card")
  div
    div
      img(src="/img/catalog/round.png")
    CatalogHighProfit(percent="63" text="Высокая динамика доходности")    
  div(class="text-sm")
    div Бриллиант
    div.text-base.py-2 огранка Круглая
    div Вес: {{item.dia_carat}} карата
    div Граней: 57
    div Цвет: {{item.dia_color}}
    div Чистота: 8
    div Тип огранки: A
    div Цена: {{item.dia_price_tink}} руб
    div(class="mt-6")
      UikitTfButtonAccent Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});
</script>
