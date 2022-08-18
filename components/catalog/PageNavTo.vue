<style scoped>
.nav-item {
  @apply block p-2;
}
a.nav-item {
  @apply cursor-pointer;
}
</style>
<template lang="pug">
div(v-if="show" class="text-sm flex flex-row items-center")
  template(v-if="showPrev")
    NuxtLink.nav-item(:to="getUrl(pageIndex - 1)")
      img.rotate-180(src="/img/icons/arrow_right.svg")
    NuxtLink.nav-item(:to="getUrl(pageIndex - 1)") Предыдущая
    NuxtLink.nav-item(:to="getUrl(0)") {{1}}
    .nav-item
      | ...
  template(v-for="pIndex in pages" :key="pIndex")
    span.nav-item(v-if="pIndex === pageIndex" class="text-tf-yellow") {{pIndex + 1}}
    NuxtLink.nav-item(v-else :to="getUrl(pIndex)") {{pIndex + 1}}
  template(v-if="showNext")
    .nav-item
      | ...
    NuxtLink.nav-item(:to="getUrl(totalPages-1)") {{totalPages}}
    NuxtLink.nav-item(:to="getUrl(pageIndex + 1)") Следующая
    NuxtLink.nav-item(:to="getUrl(pageIndex + 1)")
      img(src="/img/icons/arrow_right.svg")
</template>
<script setup lang="ts">
const props = defineProps<{
  totalPages: number;
  pageIndex: number;
  indent: number;
  baseUrl: string;
}>();

const show = computed(() => props.totalPages > 1);

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

  // console.log('start end', start, end);

  for (let i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
});

const getUrl = (pageIndex: number) =>
  pageIndex ? `${props.baseUrl}/${pageIndex + 1}` : props.baseUrl;
</script>
