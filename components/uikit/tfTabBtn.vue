<template lang="pug">
div(class="block text-xl mr-10 border-b-2 border-transparent pb-1.5 cursor-pointer" :class="{'border-tf-yellow': selected}")
  slot
</template>
<script setup>
const props = defineProps({
  selected: Boolean,
});
</script>
