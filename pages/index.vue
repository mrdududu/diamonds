<style scoped>
.fs36 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
<template lang="pug">
div
  div(class="md:grid md:grid-cols-6 mx-10 md:mx-0")
    div(class="md:col-start-2 md:col-span-4")
      div(class="text-center mb-2")
        h3(class="fs36") ДИНАМИКА ДОХОДНОСТИ
      div(class="text-center mb-10") Сравнительная динамика цен на бриллианты с 2005 по 2021 гг
  div(class="md:grid md:grid-cols-2 md:gap-x-20 mx-10 md:mx-0 mb-20")
    div(class="md:pl-4 flex items-start justify-center md:justify-end mb-10 md:mb-0")
      img(src="/img/profit.png" width="349")
    div(class="md:pr-4 flex flex-col justify-end")
      p.mb-6
        |#[span(class="text-tf-yellow") Бриллианты - инвестиции с высоким ростом стоимости] в долгосрочной перспективе.
        |Обеспечивают защиту сбережений от валютных и страновых рисков.
        |Рассмотрите инвестиции в бесцветные бриллианты высоких цветовых
        |и качественных характеристик, а также бриллианты фантазийных цветов,
        |которые #[span(class="text-tf-yellow") за последние 15 лет подорожали вдвое и втрое соответственно.]
      p
        |Отдельный драйвер роста цен – редкость экземпляра. Среди бесцветных
        |бриллиантов реже всего встречается сочетание высоких цветовых и качественных
        |характеристик: цветов от D до G, то есть от полностью до почти бесцветного, и качества
        |от IF до VS2 (от идеально прозрачного до содержащего незначительные включения,
        |невидимые невооруженным глазом). Камни с такими характеристиками массой
        |от 4 карат считаются наиболее пригодными для инвестиционных целей из бесцветных.
        |Они показывают самую высокую доходность за последние 15 лет.
  div(class="flex justify-center mb-20")
    UikitTfButtonAccent(@click="showConsultationForm" class="px-5 md:px-10") Сделать заявку на эксклюзивный камень
  div(class="mx-4 lg:mx-0")
    UikitTfTabMenu(:tabs="state.tabs" @tabClick="tabClick")
  div(class="mx-10 lg:mx-0")
    DiamondsguideColors(v-if="'colors' === selectedTab")
    DiamondsguideClarity(v-if="'clarity' === selectedTab")
    DiamondsguideShape(v-if="'shape' === selectedTab")
    DiamondsguideSize(v-if="'size' === selectedTab")
</template>
<script setup lang="ts">
const { show: showConsultationForm } = useConsultationForm();

const state = reactive<{ tabs: UikitTypeITabMenuItem[] }>({
  tabs: [
    { key: 'colors', text: 'Цвет', selected: true },
    { key: 'clarity', text: 'Чистота' },
    { key: 'shape', text: 'Огранка' },
    { key: 'size', text: 'Карат' },
  ],
});

const selectedTab = computed<string>(
  () => state.tabs.find((tab) => tab.selected)?.key
);

const tabClick = (tab: UikitTypeITabMenuItem) => {
  state.tabs = state.tabs.map((item) => ({
    ...item,
    selected: item.key === tab.key,
  }));
};
</script>
