<style scoped>
.container {
  background: url(/img/bg_miuz_header.svg) top right no-repeat;
}
.best-items {
  background: url(/img/bg_best_slider.svg) center center no-repeat;
}
</style>
<template lang="pug">
div
  .container(class="mx-auto max-w-screen-lg container")
    div(class="md:grid md:grid-cols-6 mt-10 md:mt-36 md:mb-10 flex md:block flex-col items-center")
      NuxtLink(to="/" class="block md:col-start-2 md:col-span-2")
        img(src="/img/miuz_logo.svg")
      div(class="md:col-span-2 mt-20 md:mt-0")
        img(src="/img/tf_logo.svg" class="md:mt-6")
    div(class="md:grid md:grid-cols-6 mt-36 mb-10 mx-10 md:mx-0")
      div(class="md:col-start-2 md:col-span-4")
        div(class="mb-10")
          h1
            | Лучшие инвестиции #[br]
            | в бриллианты
        div(class="mb-10") Выгодные предложения от MIUZ diamonds для клиентов Tinkoff.
        div(class="mb-3")
          h3 3 главные причины инвестировать в бриллианты:
        div(class="pl-5 mb-10")
          ul.list-disc
            li Защита от денежной инфляции и валютных рисков
            li Удобная форма передачи благосостояния
            li Мобильность
    div(class="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-10 px-10 lg:px-0")
      UikitTfButton(to="/") Главная
      UikitTfButton(@click="scrollToBest") Лучшее
      UikitTfButton(to="/catalog") Каталог
      UikitTfButton(@click="scrollToAbout") О компании
      UikitTfButtonAccent(@click="showConsultationForm") Консультация
    div.flex.justify-center.my-16
      img(src="/img/arrow_down.svg")
    div
      slot
    ClientOnly
      div.py-16(v-if="!pendingTopItems" class="best-items")
        div(class="px-4 md:px-0" ref="refBest")
          h2 Лучшее
        div(class="mt-8")
          BestSwiper(:items="topItems")
    div
      img(src="/img/photos/about_miuz.jpg" class="block w-full")
    div(class="px-14  lg:px-0")
      div(class="py-16" ref="refAbout")
        h2 О компании
        div(class="mt-8 text-xl space-y-5")
          p MIUZ diamonds - одно из крупнейших предприятий в мире, которое обеспечивает закрытый цикл производства от добычи алмаза до изготовления ювелирного изделия.
          p Сегодня  мы сосредоточены на производстве ювелирных украшений с бриллиантами, продаже сертифицированных бриллиантов  от 0.70 ct, которые можно приобрести  по биржевой цене, а также на изготовлении украшений по индивидуальному заказу.
          p Уже более 100 лет MIUZ diamonds выступает гарантом качества и надежности собственной продукции
      div(class="md:grid md:grid-cols-3 pb-24")
        div(class="flex justify-center md:block")
          img(src="/img/miuz_logo.svg")
        div(class="md:col-span-2 pt-9")
          div(class="mb-14 text-[32px]") MIUZ diamonds - официальный партнер Тинькофф, #[br] один из мировых лидеров в ювелирной отрасли
          div(class="grid grid-cols-1 md:grid-cols-3")
            div
              UikitTfButtonAccent(to="/catalog" @click="clickCatalogBtn") Каталог
  .fixed(class="bottom-6 right-6 md:bottom-20 md:right-20")
    UikitTransitionFade
      UikitTfFABBtn(v-if="showFABBtn" @click="clickFABBtn")
        img(src="/img/icons/arrow_top.svg")
  ClientOnly
    UikitTransitionScale
      CatalogOrderForm(v-if="selectedDiamond" :item="selectedDiamond" @closeClick="hideOrderForm")
  ClientOnly
    UikitTransitionSlide
      CatalogConsultationForm(v-if="visibleConsultationForm" @closeClick="hideConsultationForm")
  div(id="teleport-popupform")
</template>
<script setup>
const refAbout = ref(null);
const refBest = ref(null);
const showFABBtn = ref(false);
const runtimeConfig = useRuntimeConfig();

const { selectedDiamond, hide: hideOrderForm } = useOrderForm();
const {
  visible: visibleConsultationForm,
  hide: hideConsultationForm,
  show: showConsultationForm,
} = useConsultationForm();

const url = () =>
  runtimeConfig.public.apiHost +
  '/api/diamonds/?' +
  new URLSearchParams({
    populate: '*',
    'filters[dia_profit][$notNull]': 'true',
  });

const { data: dataTopItems, pending: pendingTopItems } = await useFetch(
  () => url(),
  { lazy: true }
);

const topItems = computed(() =>
  dataTopItems.value.data.map((item) => item.attributes)
);

onMounted(() => {
  document.addEventListener('scroll', (e) => {
    showFABBtn.value = window.scrollY > 100;
  });
});

const scrollToAbout = () => {
  refAbout.value.scrollIntoView({ behavior: 'smooth' });
};

const scrollToBest = () => {
  refBest.value.scrollIntoView({ behavior: 'smooth' });
};

const clickCatalogBtn = () => {
  document.getElementById('refCatalog').scrollIntoView({ behavior: 'smooth' });
};

const clickFABBtn = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
