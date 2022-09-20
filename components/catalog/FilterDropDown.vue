<template lang="pug">
UikitTfDropDown(:placeholder="placeholder" :items="displayedItems" @change="onChange")
</template>
<script setup>
const props = defineProps({
  filterItem: Object,
  selectedVal: Object,
});

const emit = defineEmits(['change']);

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

const placeholder = computed(() => {
  if (selectedItem.value)
    return `${props.filterItem.name}: ${selectedItem.value.text}`;

  return props.filterItem.name;
});

const items = computed(() => filterToDropDownItems(props.filterItem.filter));

const displayedItems = computed(() => {
  if (!selectedItem.value) return items.value;

  const clearItem = {
    key: undefined,
    text: `Очистить`,
    val: undefined,
  };

  return [
    ...items.value.filter((item) => item.val !== props.selectedVal),
    clearItem,
  ];
});

const selectedItem = computed(() => {
  return items.value.find(
    (item) => item.val === props.selectedVal
    // (item) => JSON.stringify(item.val) === JSON.stringify(props.selectedVal)
  );
});

const onChange = (item) => {
  console.log('FilterDropDown.vue onChange', {
    filterKey: props.filterItem.key,
    filterSelectedItem: item,
  });
  emit('change', { filterKey: props.filterItem.key, filterSelectedItem: item });
};
</script>
