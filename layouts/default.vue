<template lang="pug">
div(class="container mx-auto grid grid-cols-1 lg:grid-cols-12" style="background-color:rgba(255,255,255, 0.05);")
  div(class="lg:col-start-3 lg:col-span-6 mt-36")
    div(class="mb-16")
      img(src="/img/tf_logo.svg")
    div(class="mb-10")
      h1
        | Лучшие инвестиции #[br]
        | в бриллианты
    div(class="mb-10") Выгодные предложения от MIUZ diamonds для клиентов Tinkoff.
    div(class="mb-3")
      h3 3 главные причины инвестировать в бриллианты:
    div(class="pl-5")
      ul.list-disc
        li Защита от денежной инфляции и валютных рисков
        li Удобная форма передачи благосостояния
        li Мобильность
  //- h1(class="font-bold text-tf-white text-lg font-tinkoff") Hello, Tailwind 3 + Pug!
  //- h1(class="font-bold text-tf-white text-lg") Hello, Tailwind 3 + Pug!
  slot
</template>