<template lang="pug">
div(class="flex mb-4 md:mb-0")
  div(class="mt-4") Фильтровать:
  div(class="flex items-center flex-wrap")
    div(v-for="filterItem in props.filter.settings" class="mx-2")
      CatalogFilterDropDown(:filterItem="filterItem" :selectedVal="getSelectedVal(filterItem.key)" @change="onChangeFilterDropDown")
</template>
<script setup>
const props = defineProps({ filter: Object });

const emit = defineEmits(['change']);

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
