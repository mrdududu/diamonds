<template lang="pug">
div(class="fixed inset-0 bg-black bg-opacity-20 overflow-y-auto h-full w-full")
  div(class="relative top-20 mx-auto p-5 max-w-screen-lg shadow-lg rounded-md bg-tf-gray-dark" :class="class")
    div.flex.flex-row-reverse(v-if="showClose")
      img.cursor-pointer(src="/img/icons/x.svg" @click="emit('closeClick')")
    slot
</template>
<script setup>
const props = defineProps({
  showClose: Boolean,
  class: Object,
});

const emit = defineEmits(['closeClick']);
</script>
