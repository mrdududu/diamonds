<template lang="pug">
div(class="mx-4 lg:mx-0" ref="refCatalog")
  div.mb-8
    h2 Каталог
  div(v-if="diamonds?.data" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 md:gap-y-20")
    CatalogPreview(v-for="item in diamonds.data" :key="item.id" :item="item.attributes" @click="itemClick(item.attributes)" class="cursor-pointer")
  div(v-if="diamonds?.data" class="my-16 flex justify-center")
    CatalogPageNavTo(:totalPages="diamonds.meta.pagination.pageCount" :pageIndex="pIndex" :indent="1" baseUrl="/catalog")
    //- CatalogPageNav(:totalPages="diamonds.meta.pagination.pageCount" :pageIndex="pIndex" :indent="1" @page-click="pageClick")
  ClientOnly
    Teleport(to="#teleport-popupform")
      CatalogOrderForm(v-if="state.selectedDiamond" :item="state.selectedDiamond" @closeClick="closeClick")
  ClientOnly
    Teleport(to="#teleport-popupform")
      CatalogLoader(v-if="pending")
</template>
<script setup>
const refCatalog = ref(null);
const route = useRoute();
// const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const state = reactive({
  selectedDiamond: null,
});

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

const {
  data: diamonds,
  pending,
  refresh,
  error,
} = await useFetch(() => url(), { lazy: true });
// const { data: diamonds, pending, refresh, error } = await useFetch(url());
// const { data: diamonds, pending, refresh, error } = useLazyFetch(() => url());
// if (refCatalog.value) refCatalog.value.scrollIntoView({ behavior: 'smooth' });

console.log({ diamonds, pending, refresh, error });

watch(diamonds, (val) => {
  if (val && refCatalog.value)
    refCatalog.value.scrollIntoView({ behavior: 'smooth' });
});

const itemClick = (item) => {
  state.selectedDiamond = item;
};

const closeClick = () => {
  state.selectedDiamond = null;
};

// const pageClick = (pageIndex) => {
//   console.log('pageClick', pageIndex);
//   const url = pageIndex ? `/catalog/${pageIndex + 1}` : '/catalog';
//   router.push(url);
// };
</script>
