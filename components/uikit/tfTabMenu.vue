<template lang="pug">
div(class="flex")
  UikitTfTabBtn(v-for="tab in tabs" @click="$emit('tabClick', tab)" :key="tab.key" :selected="tab.selected") {{tab.text}}
</template>
<script setup>
const props = defineProps({
  tabs: Object,
});
</script>
