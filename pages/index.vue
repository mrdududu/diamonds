<template lang="pug">
div(class="px-14")
  div(class="flex")
    tfTabBtn Цвет
    tfTabBtn Чистота
    tfTabBtn Огранка
    tfTabBtn Карат
  GuideLayout
</template>
<script>
import tfTabBtn from '~/components/uikit/tfTabBtn.vue';
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
export default {
  components: {tfTabBtn, GuideLayout},
  setup() {
    
  },
}
</script>