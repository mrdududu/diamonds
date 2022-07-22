<template lang="pug">
div(class="container mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16" style="background-color:rgba(255,255,255, 0.05);")
  div(class="lg:col-start-3 lg:col-span-8 mt-36 mb-10" style="background-color:rgba(255,255,255, 0.05);")
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
  div(class="lg:col-start-3 lg:col-span-8")
    div(class="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-16")
      tfButton Главная
      tfButton Лучшее
      tfButton Каталог
      tfButton О компании
  div(class="lg:col-start-1 lg:col-span-12 my-32 flex justify-center")
    img(src="/img/arrow_down.svg")
  div(class="lg:col-start-1 lg:col-span-12 px-14")
    div(class="flex")
      tfTabBtn Цвет
      tfTabBtn Чистота
      tfTabBtn Огранка
      tfTabBtn Карат
    div(class="py-10")
      h2 Цвет
      p(class="mt-8 text-xl") Главный фактор, влияющий на оценку #[br] ювелирного цветного камня.
  slot
</template>
<script>
import tfButton from '~/components/uikit/tfButton.vue';
import tfTabBtn from '~/components/uikit/tfTabBtn.vue';
export default {
  components: {tfButton, tfTabBtn},
  setup() {
    
  },
}
</script>