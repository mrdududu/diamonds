<style>
.swiper {
  z-index: 0;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next {
  color: #f0f0f0;
}
.swiper-button-prev {
  color: #f0f0f0;
}
</style>
<template lang="pug">
swiper(:modules="modules" :slides-per-view="1" :centeredSlides="true" :navigation="true")
  swiper-slide(v-for="item in items" :key="dia_id")
    BestProductCard(:item="item")
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps({
  items: Array,
});

const modules = [Navigation];
</script>
