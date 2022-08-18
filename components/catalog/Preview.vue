<style scoped>
.preview {
  background: linear-gradient(
    270.42deg,
    rgba(30, 30, 30, 0) 0.41%,
    #1e1e1e 52.11%,
    rgba(30, 30, 30, 0) 99.68%
  );
}
</style>
<template lang="pug">
div(class="relative preview rounded-tl-xl rounded-tr-xl" :class="{'rounded-br-xl': !state.mouseover, 'rounded-bl-xl': !state.mouseover}" @mouseover="state.mouseover = true" @mouseleave="state.mouseover = false")
  CatalogDiamondItem(:item="item")
  UikitTransitionSlide
    div(v-if="state.mouseover" class="absolute bg-tf-gray-dark rounded-br-xl rounded-bl-xl px-6 pb-5 left-0 right-0 overflow-hidden")
      UikitTfButtonAccent Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});

const state = reactive({ mouseover: false });
</script>
