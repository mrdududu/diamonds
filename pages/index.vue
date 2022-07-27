<template lang="pug">
div(class="px-14")
  tfTabMenu(:tabs="state.tabs" @tabClick="tabClick")
  //- div(class="flex")
  //-   tfTabBtn Цвет
  //-   tfTabBtn Чистота
  //-   tfTabBtn Огранка
  //-   tfTabBtn Карат
  //- GuideColors
  //- GuideClarity
  //- GuideShape
  GuideSize
</template>
<script>
import { reactive } from 'vue';
import tfTabMenu from '~/components/uikit/tfTabMenu.vue';
import tfTabBtn from '~/components/uikit/tfTabBtn.vue';
import GuideColors from '~/components/diamonds_guide/GuideColors.vue';
import GuideClarity from '~/components/diamonds_guide/GuideClarity.vue';
import GuideShape from '~/components/diamonds_guide/GuideShape.vue';
import GuideSize from '~/components/diamonds_guide/GuideSize.vue';

const tabs = [
  { key: 'colors', text: 'Цвет', selected: true },
  { key: 'clarity', text: 'Чистота' },
  { key: 'shape', text: 'Огранка' },
  { key: 'size', text: 'Карат' },
];

export default {
  components: {
    tfTabMenu,
    tfTabBtn,
    GuideColors,
    GuideClarity,
    GuideShape,
    GuideSize,
  },
  setup() {
    const state = reactive({ tabs });
    return {
      state,
      tabClick(tab) {
        // console.log('tabclick', { tab });
        state.tabs = tabs.map((item) => ({
          ...item,
          selected: item.key === tab.key,
        }));
      },
    };
  },
};
</script>
