<style scoped>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
.slide-enter-active,
.slide-leave-active {
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
<template lang="pug">
div(class="relative bg-tf-gray-dark rounded-tl-xl rounded-tr-xl" :class="{'rounded-br-xl': !state.mouseover, 'rounded-bl-xl': !state.mouseover}" @mouseover="state.mouseover = true" @mouseleave="state.mouseover = false")
  CatalogDiamondItem(:item="item")
  Transition(name="slide")
    div(v-show="state.mouseover" class="absolute bg-tf-gray-dark rounded-br-xl rounded-bl-xl px-6 pb-5 left-0 right-0 overflow-hidden")
      UikitTfButtonAccent Оставить заявку
</template>
<script setup>
const props = defineProps({
  item: Object,
});

const state = reactive({ mouseover: false });
</script>
