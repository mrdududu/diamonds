<template lang="pug">
div(class="flex justify-between md:justify-start")
  UikitTfTabBtn(v-for="tab in tabs" @click="$emit('tabClick', tab)" :key="tab.key" :selected="tab.selected") {{tab.text}}
</template>
<script setup lang="ts">
const props = defineProps<{ tabs: UikitTypeITabMenuItem[] }>();
</script>
