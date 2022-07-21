<template lang="pug">
div(class="container mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16" style="background-color:rgba(255,255,255, 0.05);")
  div(class="lg:col-start-3 lg:col-span-6 mt-36 mb-10")
    div(class="mb-16")
      img(src="/img/tf_logo.svg")
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
  tfButton(class="lg:col-start-3 lg:col-span-2") Главная
  tfButton(class="lg:col-span-2") Лучшее
  tfButton(class="lg:col-span-2") Каталог
  tfButton(class="lg:col-span-2") О компании
  div(class="lg:col-start-1 lg:col-span-12 my-32 flex justify-center")
    img(src="/img/arrow_down.svg")
  slot
</template>
<script>
import tfButton from '~/components/uikit/tfButton.vue';
export default {
  components: {tfButton},
  setup() {
    
  },
}
</script>