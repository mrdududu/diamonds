<template lang="pug">
div(class="py-10")
  h2 
    slot(name="title")
  p(class="mt-8 text-xl")
    slot(name="text")
  div(class="my-14")
    slot
</template>
