<style scoped>
.top-enter-active,
.top-leave-active {
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
}

.top-enter-from,
.top-leave-to {
  transform: scaleY(0);
}

.left-enter-active,
.left-leave-active {
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
}

.left-enter-from,
.left-leave-to {
  transform: scaleX(0);
}
</style>
<template lang="pug">
Transition(:name="direction")
  slot
</template>
<script setup>
const props = defineProps({
  direction: { type: String, default: 'top' },
});
</script>
