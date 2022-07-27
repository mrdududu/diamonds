<template lang="pug">
GuideLayout
  template(#title) Карат
  template(#text) Масса камня в каратах #[br] (1 карат равен 0,2 грамма).
  template(#default)
    div(v-for="{shape, sizes} in sizesData" :key="shape.key" class="mb-16")
      div(class="mb-2 text-xs text-center") огранка
      div(class="mb-8 text-xl text-center text-tf-yellow") {{shape.name}}
      div(class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8")
        div(v-for="size in sizes" class="text-xs text-center")
          div(class="h-20 flex justify-center items-end")
            img(:src="`/img/diamonds/shape/shape_${shape.key}.svg`" style="width: 46px")
          div {{size.ct}} карат
          div {{formatSizeString(size)}}
</template>
<script>
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
import sizesData from '~/components/diamonds_guide/data/size.json';
export default {
  components: {GuideLayout},
  setup() {
    // console.log({sizesData});

    return {
      sizesData,
      formatSizeString(size){
        if (size.mm){
          return `${size.mm} мм`
        }
        else if (size.hmm && size.wmm) {
          return `${size.hmm}х${size.wmm} мм`
        }

        return '';
      }
    };
  },
}
</script>