<template lang="pug">
GuideLayout
  template(#title) Чистота
  template(#text) Степень «свободы» камня от внутренних #[br] характеристик.
  template(#default)
    div(class="grid grid-cols-1 lg:grid-cols-2")
      div(v-for="groupData in gridData" :key="JSON.stringify(groupData)" class="grid grid-cols-2 text-xs")
        div(v-for="item in groupData.group" :key="item.key" class="flex flex-col items-center")
          img(:src="`/img/diamonds/clarity/clarity_${item.key}.svg`")
          div(class="mt-4") {{item.key}}
          div(v-if="item.title" v-html="item.title")
        div(v-if="groupData.title" class="col-span-2 flex flex-col items-center")
          div(class="w-2/4 h-3 border-x border-b border-tf-white")
          div(v-html="groupData.title" class="text-center")
</template>
<script>
import GuideLayout from '~/components/diamonds_guide/GuideLayout.vue';
import gridData from '~/components/diamonds_guide/data/clarity.json';
export default {
  components: {GuideLayout},
  setup() {
    console.log({gridData});

    return {gridData};
  },
}
</script>