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
        UikitTfTextField(name="name" placeholder="Ваше имя" v-model="state.form.name" :error="$getError(v$.form.name)" @blur="v$.form.name.$touch")
      div.mb-10
        UikitTfTextField(name="surname" placeholder="Ваша фамилия" v-model="state.form.surname" :error="$getError(v$.form.surname)" @blur="v$.form.surname.$touch")
      div.mb-10
        UikitTfTextField(name="phone" placeholder="Телефон" v-model="state.form.phone" maska="+7 (###) ###-##-##" :error="$getError(v$.form.phone)" @blur="v$.form.phone.$touch")
      div.mb-10
        UikitTfTextField(name="email" placeholder="Email" v-model="state.form.email" :error="$getError(v$.form.email)" @blur="v$.form.email.$touch")
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
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

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

const rules = {
  form: {
    name: { required },
    surname: { required },
    phone: { required },
    email: { required, email },
  },
};

const v$ = useVuelidate(rules, state);

const sendRequestClick = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;

  const body = {
    type: 'order',
    data: { ...state.form, item: props.item },
  };

  const { data } = await useFetch('/api/sendform', { method: 'POST', body });

  console.log('sendRequestClick');
  state.complete = true;
};
</script>
