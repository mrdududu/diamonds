<template lang="pug">
div(class="grid grid-cols-1 lg:grid-cols-2 gap-y-16")
  div(v-for="groupData in gridData" :key="JSON.stringify(groupData)" class="grid grid-cols-2 text-xs")
    div(v-for="item in groupData.group" :key="item.key" class="flex flex-col items-center")
      img(:src="`/img/diamonds/${imgKey}/${imgKey}_${item.key}.svg`")
      div(class="mt-4") {{item.key}}
      div(v-if="item.title" v-html="item.title" class="text-center")
    div(v-if="groupData.title" class="col-span-2 flex flex-col items-center")
      div(class="w-2/4 h-3 border-x border-b border-tf-white")
      div(v-html="groupData.title" class="text-center")
</template>
<script>
export default {
  props:["imgKey", "gridData"],
  setup() {
    
  },
}
</script>