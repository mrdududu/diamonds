<style scoped>
.nav-item {
  @apply block p-2;
}
a.nav-item {
  @apply cursor-pointer;
}
</style>
<template lang="pug">
div(class="text-sm flex flex-row items-center")
  template(v-if="showPrev")
    a.nav-item(@click="pageClick(pageIndex - 1)")
      img.rotate-180(src="/img/icons/arrow_right.svg")
    a.nav-item(@click="pageClick(pageIndex - 1)") Предыдущая
    a.nav-item(@click="pageClick(0)") {{1}}
    .nav-item
      | ...
  template(v-for="pIndex in pages" :key="pIndex")
    span.nav-item(v-if="pIndex === pageIndex" class="text-tf-yellow") {{pIndex + 1}}
    a.nav-item(v-else @click="pageClick(pIndex)") {{pIndex + 1}}
  template(v-if="showNext")
    .nav-item
      | ...
    a.nav-item(@click="pageClick(totalPages-1)") {{totalPages}}
    a.nav-item(@click="pageClick(pageIndex + 1)") Следующая
    a.nav-item(@click="pageClick(pageIndex + 1)")
      img(src="/img/icons/arrow_right.svg")
</template>
<script setup>
const props = defineProps({
  totalPages: Number,
  pageIndex: Number,
  indent: Number,
});

const emit = defineEmits(['pageClick']);

const showPrev = computed(() => {
  if (props.indent * 2 + 1 < props.totalPages) {
    return !(0 >= props.pageIndex - props.indent);
  }

  return false;
});

const showNext = computed(() => {
  if (props.indent * 2 + 1 < props.totalPages) {
    return !(props.totalPages - 1 <= props.pageIndex + props.indent);
  }

  return false;
});

const pages = computed(() => {
  const res = [];

  let start = 0;
  let end = props.totalPages - 1;

  if (props.indent * 2 + 1 < props.totalPages) {
    start = props.pageIndex - props.indent;
    end = props.pageIndex + props.indent;

    if (0 > start) {
      end += Math.abs(start);
      start = 0;
    }

    if (props.totalPages - 1 < end) {
      start = start - Math.abs(end - (props.totalPages - 1));
      end = props.totalPages - 1;
    }
  }

  console.log('start end', start, end);

  for (let i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
});

const pageClick = (pageIndex) => {
  emit('pageClick', pageIndex);
};
</script>
