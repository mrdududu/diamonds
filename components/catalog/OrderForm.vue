<template lang="pug">
CatalogModalLayout(:showClose="true" @closeClick="emit('closeClick')")
  div(v-if="!state.complete" class="md:grid md:grid-cols-3 md:gap-x-16")
    div(class="pb-6 md:pb-0 border-b border-tf-yellow md:border-b-0")
      CatalogDiamondItem(:item="item" class="grid grid-cols-2 gap-x-6 md:block max-w-sm")
    div(class="md:col-span-2 pt-6 md:pt-0")
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
      CatalogSendRequest(class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6" @sendRequestClick="sendRequestClick")
  div(v-else class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16")
    div(class="pb-6 lg:pb-0 border-b border-tf-yellow lg:border-b-0 lg:border-r")
      CatalogDiamondItem(:item="item" class="grid grid-cols-2 gap-x-6 max-w-sm")
    div(class="pt-6 lg:pt-0 flex flex-col justify-center")
      div.mb-2
        h2 Ваша заявка оформлена
      div.text-sm Вскоре мы свяжемся с Вами #[br] и уточним все детали.
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
  complete: false,
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
const sendRequestClick = () => {
  console.log('sendRequestClick');
  state.complete = true;
};
</script>
