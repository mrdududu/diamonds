<style scoped>
.tfFABBtn {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.75);
}
</style>
<template lang="pug">
NuxtLink(class="flex justify-center items-center w-[60px] h-[60px] bg-[#242424] rounded-full cursor-pointer tfFABBtn")
  slot
</template>
<script setup lang="ts">
// const props = defineProps<{ selected?: boolean }>();
</script>
