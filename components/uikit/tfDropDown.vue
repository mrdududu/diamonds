<template lang="pug">
div(class="dropdown")
  label(tabindex="0" class="btn m-1 drop-shadow") {{props.placeholder}}
  ul(tabindex="0" ref="refDropdownContent" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 drop-shadow")
    li(v-for="item in props.items" :key="item.key")
      a(@click.stop="onChange(item)") {{item.text}}
</template>
<script setup lang="ts">
interface DropdownItem {
  key: string | number;
  text: string | number;
  val?: any;
}

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
  console.log('tfDropDown.vue onChange', item);
  refDropdownContent.value.blur();
  emit('change', item);
};
</script>
