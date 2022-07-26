<template lang="pug">
GuideLayout
  template(#title) Цвет
  template(#text) Главный фактор, влияющий на оценку #[br] ювелирного цветного камня.
  template(#default)
    div(class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20")
      div(v-for="color in colors", :key="color.key" class="flex flex-col items-center text-center text-xs")
        div
          img(:src="`/img/diamonds/color/color_${color.key}.svg`")
        div(class="mt-4") {{color.key}}
        div(v-html="color.title")
</template>
<script>
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
import colors from '~/components/diamonds_guide/data/colors.json';
export default {
  components: {GuideLayout},
  setup() {
    // console.log({colors});

    return {colors};
  },
}
</script>