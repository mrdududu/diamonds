<template lang="pug">
UikitTfDropDown(:placeholder="placeholder" :items="items" @change="onChange")
</template>
<script setup lang="ts">
import { Filter, FilterSettingItem, SelectedValue } from '~/types/Filter.d';
import DropdownItem from '~/components/uikit/type/DropdownItem.d';

interface Props {
  filterItem: FilterSettingItem;
  selectedVal: SelectedValue;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'change', filterItem: FilterSettingItem, item: DropdownItem): void;
}>();

// const label = computed(() => {
//   return props.selectedVal
//     ? `${props.selectedVal.val.text}`
//     : props.placeholder;
// });

// const items = computed(() => {
//   if (props.selectedVal) {
//     return [
//       { text: props.placeholder, val: null },
//       ...props.items.filter((item) => item.val !== props.selectedVal),
//     ];
//   }
//   return [...props.items];
// });

const filterToDropDownItems = (filter: Filter): DropdownItem[] => {
  switch (filter.type) {
    case 'range_array':
      return filter.items.map((item) => ({
        key: JSON.stringify(item),
        text: `от ${item.min} до ${item.max}`,
        val: item,
      }));
    case 'array':
      return filter.items.map((item) => ({
        key: item,
        text: `${item}`,
        val: item,
      }));
  }
};

const placeholder = computed(() => props.filterItem.name);

const items = computed(() => filterToDropDownItems(props.filterItem.filter));

const onChange = (item: DropdownItem) => {
  emit('change', props.filterItem, item);
};
</script>
