<template lang="pug">
div(class="flex items-center")
  div Сортировать:
  div(class="dropdown ml-2")
    label(tabindex="0" class="btn m-1") {{labelText}}
    ul(tabindex="0" ref="refDropdownContent" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52")
      li(v-for="item in items" :key="item.key")
        a(@click="onChange({key: item.key, order: props.order})") {{item.text}}
  button(class="btn btn-square" @click="emit('change', {key: props.selectedKey, order: props.order == 'desc' ? 'asc' : 'desc'})")
    | <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'rotate-180': props.order == 'asc' }" height="24" width="24" fill="currentColor"><path d="M10 18v-2h4v2Zm-4-5v-2h12v2ZM3 8V6h18v2Z"/></svg>
</template>
<script setup>
const refDropdownContent = ref(null);
const defItem = { key: null, text: 'По умолчанию' };
const props = defineProps({
  items: Array,
  order: String,
  selectedKey: String,
});

const emit = defineEmits(['change']);

const labelText = computed(() => {
  if (props.selectedKey) {
    return props.items.find((item) => item.key === props.selectedKey).text;
  }

  return defItem.text;
});

const items = computed(() => {
  if (props.selectedKey) {
    return [
      defItem,
      ...props.items.filter((item) => item.key !== props.selectedKey),
    ];
  }
  return [...props.items];
});

const onChange = (sortItem) => {
  refDropdownContent.value.blur();
  emit('change', sortItem);
};
</script>
