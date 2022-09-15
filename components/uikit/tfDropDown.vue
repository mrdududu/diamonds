<template lang="pug">
div(class="dropdown")
  label(tabindex="0" class="btn m-1") {{label}}
  ul(tabindex="0" ref="refDropdownContent" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52")
    li(v-for="item in items" :key="item.key")
      a(@click="onChange(item)") {{item.text}}
</template>
<script setup>
const props = defineProps({
  unselectedText: String,
  items: Array, // {key, text, val}
  selectedVal: Object,
});

const emit = defineEmits(['change']);

const refDropdownContent = ref(null);

const label = computed(() => {
  return props.selectedVal
    ? `${props.selectedVal.val.text}`
    : props.unselectedText;
});

const items = computed(() => {
  if (props.selectedVal) {
    return [
      { text: props.unselectedText, val: null },
      ...props.items.filter((item) => item.val !== props.selectedVal),
    ];
  }
  return [...props.items];
});

const onChange = (val) => {
  refDropdownContent.value.blur();
  emit('change', val);
};
</script>
