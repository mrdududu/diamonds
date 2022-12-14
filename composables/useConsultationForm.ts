import { ref } from 'vue';

const visible = ref<boolean>(false);
export const useConsultationForm = () => {
  const show = () => {
    visible.value = true;
  };

  const hide = () => {
    visible.value = false;
  };

  return { visible, show, hide };
};
