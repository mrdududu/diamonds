<template lang="pug">
div(class="")
  div.mb-8
    h2 Каталог
  div(class="grid grid-cols-2 md:grid-cols-4 gap-12")
    CatalogPreview(v-for="item in items" :key="item")
  div.my-16.flex.justify-center
    CatalogPageNav(:totalPages="state.totalPages" :pageIndex="pIndex" :indent="1" @page-click="pageClick")
</template>
<script setup>
import { reactive } from 'vue';

const route = useRoute();
const router = useRouter();

const pIndex = computed(() => {
  let page = Number(route.params.page);
  page = page ? page : 1;
  return page - 1;
});

const state = reactive({
  totalPages: 12,
});

const items = Array.from(Array(12), (_, x) => x);
const pageClick = (pageIndex) => {
  const url = pageIndex ? `/catalog/${pageIndex + 1}` : '/catalog';
  router.push(url);
};
</script>
