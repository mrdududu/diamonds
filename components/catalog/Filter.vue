<template lang="pug">
div(class="flex items-center")
  div Фильтровать:
  div(v-for="filterItem in props.filter.settings" class="flex items-center ml-6")
    CatalogFilterDropDown(:filterItem="filterItem" :selectedVal="getSelectedVal(filterItem.key)" @change="onChangeFilterDropDown")
</template>
<script setup>
const refDropdownContent = ref(null);
const defItem = { key: null, text: 'По умолчанию' };

const props = defineProps({ filter: Object });

const emit = defineEmits(['change']);

// filter: {
//       type: 'range_array',
//       items: [
//         { min: 1, max: 2 },
//         { min: 3, max: 4 },
//         { min: 5, max: 9 },
//       ],
//     }
// const filterToDropDownItems = (filter: Filter) => {
//   switch (filter.type) {
//     case 'range_array':
//       return filter.items.map((item) => ({
//         key: JSON.stringify(item),
//         text: `от ${item.min} до ${item.max}`,
//         val: item,
//       }));
//     case 'array':
//       return filter.items.map((item) => ({
//         key: item,
//         text: `${item}`,
//         val: item,
//       }));
//   }
// };

const getSelectedVal = (filterItemKey) => {
  const selValue = props.filter.selValues.find(
    (item) => item.key === filterItemKey
  );
  // console.log('Filter getSelectedVal', { filterItemKey, selValue });
  return selValue ? selValue.val : selValue;
};

const onChangeFilterDropDown = (dropDownVal) => {
  console.log('Filter.vue onChangeFilterItem', dropDownVal);
  emit('change', dropDownVal);
};
</script>
