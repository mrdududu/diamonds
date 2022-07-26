<template lang="pug">
div(class="px-14")
  div(class="flex")
    tfTabBtn Цвет
    tfTabBtn Чистота
    tfTabBtn Огранка
    tfTabBtn Карат
  //- GuideColors
  GuideClarity
</template>
<script>
import tfTabBtn from '~/components/uikit/tfTabBtn.vue';
import GuideColors from '~/components/diamonds_guide/GuideColors.vue';
import GuideClarity from '~/components/diamonds_guide/GuideClarity.vue';
export default {
  components: {tfTabBtn, GuideColors, GuideClarity},
  setup() {
    
  },
}
</script>