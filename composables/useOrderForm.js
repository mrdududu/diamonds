import { reactive } from 'vue';

const state = reactive({ selectedDiamond: null });
export const useOrderForm = () => {
  const show = (diamondItem) => {
    state.selectedDiamond = diamondItem;
  };

  const hide = () => {
    state.selectedDiamond = null;
  };

  return { state, show, hide };
};
