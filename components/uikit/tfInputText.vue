<template lang="pug">
.relative
  input(type="text" :name="name" class="peer h-10 w-full border-b border-tf-white text-tf-white placeholder-transparent bg-transparent focus:outline-none focus:border-tf-yellow")
  label(:for="name" class="absolute left-0 -top-3.5 text-tf-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-tf-yellow peer-focus:text-sm") {{placeholder}}
</template>
<script setup>
const props = defineProps({
  name: String,
  placeholder: String,
});
</script>
