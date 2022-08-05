<template lang="pug">
div(class="relative bg-tf-gray-dark rounded-tl-xl rounded-tr-xl" :class="{'rounded-br-xl': !state.mouseover, 'rounded-bl-xl': !state.mouseover}" @mouseover="state.mouseover = true" @mouseleave="state.mouseover = false")
  CatalogDiamondItem(:item="item")
  div(v-show="state.mouseover" class="absolute bg-tf-gray-dark rounded-br-xl rounded-bl-xl px-6 pb-5 left-0 right-0")
    UikitTfButtonAccent Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});

const state = reactive({ mouseover: false });
</script>
