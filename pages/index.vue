<template lang="pug">
div(class="px-14")
  UikitTfTabMenu(:tabs="state.tabs" @tabClick="tabClick")
  DiamondsguideSize
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  tabs: [
    { key: 'colors', text: 'Цвет', selected: true },
    { key: 'clarity', text: 'Чистота' },
    { key: 'shape', text: 'Огранка' },
    { key: 'size', text: 'Карат' },
  ],
});

const tabClick = (tab) => {
  state.tabs = state.tabs.map((item) => ({
    ...item,
    selected: item.key === tab.key,
  }));
};
</script>
