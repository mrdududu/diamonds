<template lang="pug">
div(class="flex items-center")
  div Фильтровать:
  div(v-for="filterItem in props.filter.settings" class="flex items-center ml-6")
    UikitTfDropDown(:unselectedText="filterItem.name" :items="filterToDropDownItems(filterItem.filter)" :selectedVal="getSelectedVal(filterItem.key)" @change="(val) => {onChangeFilterItem(filterItem, val)}")
</template>
<script setup>
const refDropdownContent = ref(null);
const defItem = { key: null, text: 'По умолчанию' };
const props = defineProps({
  filter: Object,
});

const emit = defineEmits(['change']);

// filter: {
//       type: 'range_array',
//       items: [
//         { min: 1, max: 2 },
//         { min: 3, max: 4 },
//         { min: 5, max: 9 },
//       ],
//     }
const filterToDropDownItems = (filter) => {
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

const getSelectedVal = (filterItemKey) => {
  console.log('getSelectedVal', { filterItemKey });
  return props.filter.selValues.find((item) => item.key === filterItemKey);
};

const onChangeFilterItem = (filterItem, val) => {
  // console.log('onChangeFilterItem', { filterItem, val });
  emit('change', { key: filterItem.key, val });
};
</script>
