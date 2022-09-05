<style scoped>
.product_card {
  background: url(/img/bg_best_card.svg) center right no-repeat,
    linear-gradient(253.46deg, #313131 0%, #1e1e1e 100%);
  background-size: auto 100%;
}

@media (min-width: 640px) {
  .product_card {
    filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.5));
  }
}
</style>
<template lang="pug">
div(class="md:max-w-xl grid grid-cols-2 gap-x-5 md:gap-x-10 py-4 md:py-12 px-6 md:px-20 rounded-xl product_card")
  div
    div(class="mb-3")
      img(:src="$getPhotoUrl(item)")
    CatalogHighProfit(v-if="item.dia_profit" :percent="item.dia_profit" text="Высокая динамика доходности")
  div(class="text-sm")
    div Бриллиант
    div.text-base.py-2 огранка {{item.dia_shape}}
    div Вес: {{item.dia_carat}} карата
    div Граней: {{item.dia_edges}}
    div Цвет: {{item.dia_color}}
    div Чистота: {{item.dia_clarity}}
    div Тип огранки: {{item.dia_cut_type}}
    div Цена: {{item.dia_price_tink}} руб
    div(class="mt-6")
      UikitTfButtonAccent(@click="showOrderForm(item)") Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});

const { show: showOrderForm } = useOrderForm();
</script>
