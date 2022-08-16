<template lang="pug">
div(class="flex items-center")
  img(src="/img/icons/bars.svg")
  div(class="ml-2")
    div(class="text-sm leading-none text-tf-yellow") +{{percent}}%
    div(class="text-xs leading-none") {{text}}
</template>
<script setup>
const props = defineProps({
  percent: Number,
  text: String,
});
</script>
