<template lang="pug">
GuideLayout
  template(#title) Цвет
  template(#text) Главный фактор, влияющий на оценку #[br] ювелирного цветного камня.
  template(#default)
    GuideGrid(imgKey="color" :gridData="gridData")
</template>
<script>
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
import gridData from '~/components/diamonds_guide/data/colors.json';
import GuideGrid from '~/components/diamonds_guide/GuideGrid_2lg4.vue';
export default {
  components: {GuideLayout, GuideGrid},
  setup() {
    // console.log({colors});

    return {gridData};
  },
}
</script>