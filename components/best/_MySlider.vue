<style scoped>
.my-slider {
  position: relative;
  height: 352px;
  display: flex;
  justify-content: center;
}

.my-slide-wrapper {
  position: relative;
  width: 100%;
  height: 352px;
}

.my-slide {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  /* border: 1px solid #fff; */
  transition: all 0.5s 100ms;
  transform: scale(0.2) translateX(0);
  filter: brightness(70%);
}

.my-slide-active {
  z-index: 4;
  transform: scale(1) translateX(0);
  filter: brightness(100%);
}

.prev-btn {
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(90deg);
  cursor: pointer;
}
.next-btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: rotate(-90deg);
  cursor: pointer;
}
@media (min-width: 768px) {
  .my-slide-wrapper {
    position: relative;
    width: 512px;
    height: 352px;
  }
  .my-slide {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* border: 1px solid #fff; */
    transition: all 0.5s 100ms;
    transform: scale(0.2) translateX(0);
    filter: brightness(70%);
  }
  .my-slide-prev-1 {
    transform: scale(0.9) translateX(-90px);
    filter: brightness(90%);
    z-index: 3;
  }
  .my-slide-prev-2 {
    transform: scale(0.8) translateX(-180px);
    filter: brightness(80%);
    z-index: 2;
  }
  .my-slide-prev-3 {
    transform: scale(0.7) translateX(-280px);
    z-index: 1;
  }
  .my-slide-next-1 {
    transform: scale(0.9) translateX(90px);
    filter: brightness(90%);
    z-index: 3;
  }
  .my-slide-next-2 {
    transform: scale(0.8) translateX(180px);
    filter: brightness(80%);
    z-index: 2;
  }
  .my-slide-next-3 {
    transform: scale(0.7) translateX(280px);
    z-index: 1;
  }

  .my-slide-active {
    z-index: 4;
    transform: scale(1) translateX(0);
    filter: brightness(100%);
  }

  .prev-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: rotate(90deg);
    cursor: pointer;
  }
  .next-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(-90deg);
    cursor: pointer;
  }
}
</style>
<template lang="pug">
.my-slider
  .my-slide-wrapper(ref="refSlideWrapper")
    .my-slide(v-for="(item, index) in items" :key="dia_id" :class="{'my-slide-prev-3': (index == activeItemIndex-3), 'my-slide-prev-2': (index == activeItemIndex-2), 'my-slide-prev-1': (index == activeItemIndex-1), 'my-slide-next-3': (index == activeItemIndex+3), 'my-slide-next-2': (index == activeItemIndex+2), 'my-slide-next-1': (index == activeItemIndex+1), 'my-slide-active': (index == activeItemIndex)}")
      BestProductCard(:item="item")
  a.prev-btn(v-if="activeItemIndex > 0" @click="clickPrev")
    img(src="/img/arrow_down.svg")
  a.next-btn(v-if="activeItemIndex < items.length-1" @click="clickNext")
    img(src="/img/arrow_down.svg")
</template>
<script setup>
const props = defineProps({
  items: Array,
});

const refSlideWrapper = ref(null);
const { direction, isSwiping, lengthX, lengthY } = useSwipe(refSlideWrapper, {
  onSwipeEnd(e, direction) {
    console.log('onSwipeEnd', e, direction);

    if ('LEFT' == direction) {
      clickNext();
    } else if ('RIGHT' == direction) {
      clickPrev();
    }
  },
});

const activeItemIndex = ref(0);

const clickPrev = () => {
  console.log('Click Prev');
  if (0 == activeItemIndex.value) return;
  activeItemIndex.value -= 1;
};

const clickNext = () => {
  console.log('Click Next');
  if (props.items.length - 1 == activeItemIndex.value) return;
  activeItemIndex.value += 1;
};
</script>
