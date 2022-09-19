<template lang="pug">
div(class="dropdown")
  label(tabindex="0" class="btn m-1") {{props.placeholder}}
  ul(tabindex="0" ref="refDropdownContent" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52")
    li(v-for="item in props.items" :key="item.key")
      a(@click="onChange(item)") {{item.text}}
</template>
<script setup lang="ts">
import DropdownItem from './type/DropdownItem.d';
interface Props {
  placeholder: string;
  items: DropdownItem[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'change', item: DropdownItem): void;
}>();

const refDropdownContent = ref(null);

const onChange = (item: DropdownItem) => {
  refDropdownContent.value.blur();
  emit('change', item);
};
</script>
