<template lang="pug">
//-  style="background-color:rgba(255,255,255, 0.05);"
div(class="container mx-auto grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16")
  div(class="lg:col-start-3 lg:col-span-8 mt-36 mb-10")
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
      UikitTfButton(href="/") Главная
      UikitTfButton(href="#best") Лучшее
      UikitTfButton(href="/catalog") Каталог
      UikitTfButton(href="#about") О компании
  div(class="lg:col-start-1 lg:col-span-12 my-32 flex justify-center")
    img(src="/img/arrow_down.svg")
  div(class="lg:col-start-1 lg:col-span-12")
    slot
  div(class="lg:col-start-1 lg:col-span-12")
    div
      img(src="/img/photos/diamonds.jpg" class="block w-full")
    div(class="px-14")
      div(class="py-16")
        h2 О компании
        div(class="mt-8 text-xl space-y-5")
          p MIUZ diamonds - одно из крупнейших предприятий в мире, которое обеспечивает закрытый цикл производства от добычи алмаза до изготовления ювелирного изделия.
          p Сегодня  мы сосредоточены на производстве ювелирных украшений с бриллиантами, продаже сертифицированных бриллиантов  от 0.70 ct, которые можно приобрести  по биржевой цене, а также на изготовлении украшений по индивидуальному заказу.
          p Уже более 100 лет MIUZ diamonds выступает гарантом качества и надежности собственной продукции
      div(class="pb-24 grid grid-cols-1 lg:grid-cols-3")
        div
          img(src="/img/miuz_logo.svg")
        div(class="lg:col-span-2 pt-9")
          div(class="mb-14 text-3xl") MIUZ diamonds - официальный партнер Тинькофф, #[br] один из мировых лидеров в ювелирной отрасли
          div(class="grid grid-cols-1 lg:grid-cols-3")
            div
              UikitTfButton Каталог
</template>
<script setup></script>
