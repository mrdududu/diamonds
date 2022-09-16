<template lang="pug">
UikitTfDropDown(:placeholder="placeholder" :items="items" @change="onChange")
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

const placeholder = computed(() => props.filterItem.name);

const items = computed(() => filterToDropDownItems(props.filterItem.filter));

// (val) => {onChangeFilterItem(filterItem, val)}
const onChange = (item) => {
  emit('change', props.filterItem, item);
};
</script>
