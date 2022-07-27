<template lang="pug">
div(class="flex")
  tfTabBtn(v-for="tab in tabs" @click="$emit('tabClick', tab)" :key="tab.key" :selected="tab.selected") {{tab.text}}
</template>
<script>
import tfTabBtn from '~/components/uikit/tfTabBtn.vue';
export default {
  props: ['tabs'],
  components: { tfTabBtn },
  setup() {},
};
</script>
