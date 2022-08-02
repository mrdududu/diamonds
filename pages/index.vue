<style scoped>
p {
  @apply mb-6;
}
</style>
<template lang="pug">
div(class="grid grid-cols-1 lg:grid-cols-6")
  div(class="lg:col-start-2 lg:col-span-4")
    div(class="text-center mb-2")
      h3 ДИНАМИКА ДОХОДНОСТИ
    div(class="text-center mb-10") Сравнительная динамика цен на бриллианты с 2005 по 2021 гг
    div(class="flex justify-center mb-10")
      img(src="/img/profit.svg")
    div(class="mb-10")
      p
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
      UikitTfButton(to="/" class="px-10") Сделать заявку на эксклюзивный камень
div
  UikitTfTabMenu(:tabs="state.tabs" @tabClick="tabClick")
  DiamondsguideColors(v-if="'colors' === selectedTab")
  DiamondsguideClarity(v-if="'clarity' === selectedTab")
  DiamondsguideShape(v-if="'shape' === selectedTab")
  DiamondsguideSize(v-if="'size' === selectedTab")
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  tabs: [
    { key: 'colors', text: 'Цвет', selected: true },
    { key: 'clarity', text: 'Чистота' },
    { key: 'shape', text: 'Огранка' },
    { key: 'size', text: 'Карат' },
  ],
});

const selectedTab = computed(() => state.tabs.find((tab) => tab.selected)?.key);

const tabClick = (tab) => {
  state.tabs = state.tabs.map((item) => ({
    ...item,
    selected: item.key === tab.key,
  }));
};
</script>
