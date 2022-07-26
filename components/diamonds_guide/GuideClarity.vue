<template lang="pug">
GuideLayout
  template(#title) Чистота
  template(#text) Степень «свободы» камня от внутренних #[br] характеристик.
  template(#default)
    GuideGrid(imgKey="clarity" :gridData="gridData")
</template>
<script>
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
import gridData from '~/components/diamonds_guide/data/clarity.json';
import GuideGrid from '~/components/diamonds_guide/GuideGrid_2lg4.vue';
export default {
  components: {GuideLayout, GuideGrid},
  setup() {
    // console.log({gridData});

    return {gridData};
  },
}
</script>