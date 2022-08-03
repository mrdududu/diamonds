<template lang="pug">
NuxtLink(class="block bg-tf-gray cursor-pointer hover:bg-tf-gray-hover active:bg-tf-gray-push text-tf-black text-sm py-4 text-center rounded-md transition-color duration-200")
  slot
</template>
<script setup>
// const props = defineProps({ class: Object });
// const props = defineProps({
//   color: {
//     type: String,
//     default: 'gray',
//   },
// });

// const suf = 'bg-tf-';

// const classes = computed(() => {
//   const def = suf + props.color;
//   const hover = 'hover:' + def + '-hover';
//   const active = 'active:' + def + '-active';

//   const ret = {};
//   ret[def] = true;
//   ret[hover] = true;
//   ret[active] = true;

//   return ret;
// });
</script>
