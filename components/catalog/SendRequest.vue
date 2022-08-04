<style scoped>
span > a {
  @apply text-tf-yellow;
}
span > a:hover {
  @apply underline;
}
</style>
<template lang="pug">
div
  div
    UikitTfButtonAccent(@click="emit('sendRequestClick')") Оформить заявку
  div(class="text-sm md:col-span-2 flex items-center")
    span
      | Нажимая на кнопку “Оформить заявку”, вы даете
      | согласие на обработку #[a(href="/somelink") персональных данных]
</template>
<script setup>
const emit = defineEmits(['sendRequestClick']);
</script>
