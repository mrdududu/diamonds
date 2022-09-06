<template lang="pug">
div(class="fixed inset-0 bg-tf-gray-dark md:bg-black md:bg-opacity-20 overflow-y-auto h-full w-full z-10" @click.self="emit('closeClick')")
  div(class="relative md:top-20 md:mx-auto p-8 md:p-16 md:max-w-screen-md lg:max-w-screen-lg md:shadow-lg md:rounded-md bg-tf-gray-dark" :class="class")
    div(v-if="showClose" class="flex flex-row-reverse mb-8 md:mb-0")
      img.cursor-pointer(src="/img/icons/x.svg" @click="emit('closeClick')")
    slot
</template>
<script setup lang="ts">
const props = defineProps<{ showClose: boolean; class: any }>();

const emit = defineEmits<{
  (e: 'closeClick'): void;
}>();
</script>
