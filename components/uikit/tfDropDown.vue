<template lang="pug">
div(class="dropdown")
  label(tabindex="0" class="btn m-1") {{props.placeholder}}
  ul(tabindex="0" ref="refDropdownContent" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52")
    li(v-for="item in props.items" :key="item.key")
      a(@click="onChange(item)") {{item.text}}
</template>
<script setup>
const props = defineProps({
  placeholder: String,
  items: Array, // {key, text, val}
});

const emit = defineEmits(['change']);

const refDropdownContent = ref(null);

const onChange = (item) => {
  refDropdownContent.value.blur();
  emit('change', item);
};
</script>
