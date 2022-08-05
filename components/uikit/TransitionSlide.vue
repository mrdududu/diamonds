<style scoped>
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
Transition(name="slide")
  slot
</template>
