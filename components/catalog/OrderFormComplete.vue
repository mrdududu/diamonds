<template lang="pug">
CatalogModalLayout(:showClose="true" @closeClick="emit('closeClick')")
  div(class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16")
    div(class="border-r border-tf-yellow")
      CatalogDiamondItem(:item="item" class="grid lg:grid-cols-2 lg:gap-x-6")
    div(class="flex flex-col justify-center")
      div.mb-2
        h2 Ваша заявка оформлена
      div.text-sm Вскоре мы свяжемся с Вами #[br] и уточним все детали.
</template>
<script setup>
const item = ref({
  dia_id: '65797074',
  dia_shape: 'R57',
  dia_color: '81',
  dia_clarity: '02 A',
  dia_color_int: 'K',
  dia_clarity_int: 'IF',
  dia_carat: '4.01',
  dia_price_tink: ' 7,542,810',
  createdAt: '2022-07-27T09:12:58.777Z',
  updatedAt: '2022-07-27T09:12:58.776Z',
});
</script>
