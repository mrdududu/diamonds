<template lang="pug">
.relative
  input(:value="inputValue" @input="updateInputValue" @blur="emit('blur')" type="text" :name="name" :placeholder="name" class="peer h-10 w-full border-b border-tf-white text-tf-white placeholder-transparent bg-transparent focus:outline-none focus:border-tf-yellow" v-maska="maska")
  label(:for="name" class="absolute left-0 -top-3.5 text-tf-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-tf-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-tf-yellow peer-focus:text-sm") {{placeholder}}
  div(v-if="error" class="text-xs text-red-500") {{error}}
</template>
<script setup>
const props = defineProps({
  name: String,
  placeholder: String,
  modelValue: String,
  maska: {
    type: String,
    default: '',
  },
  error: String,
});

const emit = defineEmits(['update:modelValue', 'blur']);

const inputValue = computed(() => props.modelValue);

const updateInputValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
