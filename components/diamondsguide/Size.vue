<template lang="pug">
DiamondsguideLayout
  template(#title) Карат
  template(#text) Масса камня в каратах #[br] (1 карат равен 0,2 грамма).
  template(#default)
    div(v-for="{shape, sizes} in sizesData" :key="shape.key" class="mb-16")
      div(class="mb-2 text-xs text-center") огранка
      div(class="mb-8 text-xl text-center text-tf-yellow") {{shape.name}}
      div(class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8")
        div(v-for="size in sizes" class="text-xs text-center")
          div(class="h-20 flex justify-center items-end mb-2")
            img(:src="`/img/diamonds/shape/shape_${shape.key}.svg`" :style="{width: formatWidth(size)}")
          div {{size.ct}} карат
          div {{formatSizeString(size)}}
</template>

<script setup>
import sizesData from '~/data/size.json';

const formatSizeString = (size) => {
  if (size.mm) {
    return `${size.mm} мм`;
  } else if (size.hmm && size.wmm) {
    return `${size.hmm}х${size.wmm} мм`;
  }

  return '';
};

const formatWidth = (size) => {
  const cf = 5.45;
  const wmm = size.mm ? size.mm : size.wmm;

  const wpx = Math.round(wmm * cf);

  return `${wpx}px`;
};
</script>
