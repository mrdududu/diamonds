<template lang="pug">
div.text-sm
  template(v-if="showPrev")
    a(@click="pageClick(0)") &lt Предыдущая
    a {{0}}
    span
      | ...
  a(v-for="page in pages") {{page}}
  template(v-if="showNext")
    span
      | ...
    a {{totalPages-1}}
    a(@click="pageClick(totalPages-1)") Следующая &gt
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
