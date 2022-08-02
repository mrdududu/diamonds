<style scoped>
span > a {
  @apply text-tf-yellow;
}
span > a:hover {
  @apply underline;
}
</style>
<template lang="pug">
div(class="fixed inset-0 bg-black bg-opacity-20 overflow-y-auto h-full w-full")
  div(class="relative top-20 mx-auto p-5 max-w-screen-lg shadow-lg rounded-md bg-tf-gray-dark")
    div.flex.flex-row-reverse
      img.cursor-pointer(src="/img/icons/x.svg" @click="emit('closeClick')")
    div(class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16")
      div
        CatalogDiamondItem(:item="item")
      div(class="lg:col-span-2")
        div.mb-2
          h2 Оформите заявку на приобретение
        div.mb-10.text-sm Мы позвоним, чтобы уточнить детали. Будем сопровождать вас на всех этапах сделки.
        div.mb-10
          UikitTfTextField(name="name" placeholder="Ваше имя" v-model="state.form.name")
        div.mb-10
          UikitTfTextField(name="surname" placeholder="Ваша фамилия" v-model="state.form.surname")
        div.mb-10
          UikitTfTextField(name="phone" placeholder="* Телефон" v-model="state.form.phone")
        div.mb-10
          UikitTfTextField(name="email" placeholder="* Email" v-model="state.form.email")
        div(class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8")
          div
            UikitTfButton Оформить заявку
          div(class="text-sm lg:col-span-2 flex items-center")
            span
              | Нажимая на кнопку “Оформить заявку”, вы даете
              | согласие на обработку #[a(href="/somelink") персональных данных]
</template>
<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(['closeClick']);

const state = reactive({
  form: {
    name: '',
    surname: '',
    phone: '',
    email: '',
  },
});

// const item = ref({
//   dia_id: '65797074',
//   dia_shape: 'R57',
//   dia_color: '81',
//   dia_clarity: '02 A',
//   dia_color_int: 'K',
//   dia_clarity_int: 'IF',
//   dia_carat: '4.01',
//   dia_price_tink: ' 7,542,810',
//   createdAt: '2022-07-27T09:12:58.777Z',
//   updatedAt: '2022-07-27T09:12:58.776Z',
// });
</script>
