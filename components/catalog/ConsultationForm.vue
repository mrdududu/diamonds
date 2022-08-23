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
      UikitTfTextField(name="phone" placeholder="* Телефон" v-model="state.form.phone" maska="+7 (###) ###-##-##")
    div.mb-10
      UikitTfTextField(name="email" placeholder="* Email" v-model="state.form.email")
    CatalogSendRequest(class="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-6" @sendRequestClick="sendRequestClick")
  div(v-else class="flex flex-col justify-center")
    div.mb-2
      h2 Ваша заявка оформлена
    div.text-sm Вскоре мы свяжемся с Вами #[br] и уточним все детали.
</template>
<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

interface IState {
  form: {
    name: string;
    surname: string;
    budget: string;
    phone: string;
    email: string;
  };
  complete: boolean;
}

const emit = defineEmits(['closeClick']);

const state = reactive<IState>({
  form: {
    name: '',
    surname: '',
    budget: '',
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

const v$ = useVuelidate<IState>(rules, state);

const sendRequestClick = async () => {
  const body: any = {
    type: 'consultation',
    data: { ...state.form },
  };

  const { data } = await useFetch('/api/sendform', { method: 'POST', body });

  console.log('sendRequestClick');
  state.complete = true;
};
</script>
