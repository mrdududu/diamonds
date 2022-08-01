<template lang="pug">
div(class="")
  div.mb-8
    h2 Каталог
  div(class="grid grid-cols-2 md:grid-cols-4 gap-12")
    CatalogPreview.cursor-pointer(v-for="item in diamonds.data" :key="item.id" :item="item.attributes")
  div.my-16.flex.justify-center
    CatalogPageNavTo(:totalPages="diamonds.meta.pagination.pageCount" :pageIndex="pIndex" :indent="1" baseUrl="/catalog")
    //- CatalogPageNav(:totalPages="diamonds.meta.pagination.pageCount" :pageIndex="pIndex" :indent="1" @page-click="pageClick")
Teleport(to="#teleport-popupform")
  CatalogOrderForm
</template>
<script setup>
import { reactive } from 'vue';

const route = useRoute();
// const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const pIndex = computed(() => {
  let page = Number(route.params.page);
  page = page ? page : 1;
  return page - 1;
});

const url = () =>
  runtimeConfig.public.apiHost +
  '/api/diamonds/?' +
  new URLSearchParams({
    'pagination[page]': pIndex.value + 1,
  });

const { data: diamonds, pending, refresh, error } = await useFetch(() => url());

// const pageClick = (pageIndex) => {
//   console.log('pageClick', pageIndex);
//   const url = pageIndex ? `/catalog/${pageIndex + 1}` : '/catalog';
//   router.push(url);
// };
</script>
