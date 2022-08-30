<template lang="pug">
div(class="mx-4 lg:mx-0" ref="refCatalog" id="refCatalog")
  div.mb-8
    h2 Каталог
  UikitTransitionScale(direction="left")
    div(v-if="!pending" class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 md:gap-y-20")
      CatalogPreview(v-for="item in diamonds.data" :key="item.id" :item="item.attributes" @click="showOrderForm(item.attributes)" class="cursor-pointer")
  div(v-if="!pending" class="my-16 flex justify-center")
    CatalogPageNavTo(:totalPages="diamonds.meta.pagination.pageCount" :pageIndex="pIndex" :indent="1" baseUrl="/catalog")
  ClientOnly
    Teleport(to="#teleport-popupform")
      CatalogLoader(v-if="pending")
</template>
<script setup>
const refCatalog = ref(null);
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { show: showOrderForm } = useOrderForm();

const pIndex = computed(() => {
  let page = Number(route.params.page);
  page = page ? page : 1;
  return page - 1;
});

const url = () =>
  runtimeConfig.public.apiHost +
  '/api/diamonds/?' +
  new URLSearchParams({
    populate: '*',
    'pagination[page]': pIndex.value + 1,
  });

const {
  data: diamonds,
  pending,
  refresh,
  error,
} = await useFetch(() => url(), { lazy: true });

watch(diamonds, (val) => {
  if (val && refCatalog.value)
    refCatalog.value.scrollIntoView({ behavior: 'smooth' });
});
</script>
