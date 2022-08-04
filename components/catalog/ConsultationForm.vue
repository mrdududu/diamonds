<template lang="pug">
CatalogModalLayout(:showClose="true" @closeClick="emit('closeClick')" class="lg:max-w-screen-md")
  div(v-if="!state.complete")
    div.mb-2
      h2 Оформите заявку на приобретение
    div.mb-10.text-sm Мы позвоним, чтобы уточнить детали. Будем сопровождать вас на всех этапах сделки.
    div.mb-10
      UikitTfTextField(name="name" placeholder="Ваше имя" v-model="state.form.name")
    div.mb-10
      UikitTfTextField(name="surname" placeholder="Ваша фамилия" v-model="state.form.surname")
    div.mb-10
      UikitTfTextField(name="budget" placeholder="Размер бюджета для инвестиций" v-model="state.form.budget")
    div.mb-10
      UikitTfTextField(name="phone" placeholder="* Телефон" v-model="state.form.phone")
    div.mb-10
      UikitTfTextField(name="email" placeholder="* Email" v-model="state.form.email")
    CatalogSendRequest(class="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-6" @sendRequestClick="sendRequestClick")
  div(v-else class="flex flex-col justify-center")
    div.mb-2
      h2 Ваша заявка оформлена
    div.text-sm Вскоре мы свяжемся с Вами #[br] и уточним все детали.
</template>
<script setup>
const emit = defineEmits(['closeClick']);

const state = reactive({
  form: {
    name: '',
    surname: '',
    budget: '',
    phone: '',
    email: '',
  },
  complete: false,
});

const sendRequestClick = () => {
  console.log('sendRequestClick');
  state.complete = true;
};
</script>
