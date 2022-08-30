import { reactive, toRefs } from 'vue';

const state = reactive({ selectedDiamond: null });
export const useOrderForm = () => {
  const show = (diamondItem) => {
    state.selectedDiamond = diamondItem;
  };

  const hide = () => {
    state.selectedDiamond = null;
  };

  return { ...toRefs(state), show, hide };
};
