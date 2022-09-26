<template lang="pug">
div(class="mx-4 lg:mx-0" ref="refCatalog" id="refCatalog")
  div.mb-8
    h2 Каталог
  div(class="flex justify-between flex-wrap")
    CatalogFilter(:filter="filter" @change="filterChange")
    CatalogSort(:items="sort.items" :order="sort.order" :selectedKey="sort.key" @change="sortChange")
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
import sortDefault from '~/data/catalog/sorting.json';
import filters from '~/data/catalog/filters.json';

const refCatalog = ref(null);
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: filtersData } = await useFetch(
  `${runtimeConfig.public.apiHost}/api/dia-filter`
);

const filter = reactive({
  settings: filtersData.value.data.attributes.dia_filters, //filters,
  selValues: [], // {key, val}
});

const filterChange = ({ filterKey, filterSelectedItem }) => {
  console.log('[[page]].vue filterChange', { filterKey, filterSelectedItem });
  if (filterSelectedItem && filterSelectedItem.val) {
    filter.selValues = [
      ...filter.selValues.filter((item) => item.key != filterKey),
      { key: filterKey, val: filterSelectedItem.val },
    ];
  } else {
    filter.selValues = [
      ...filter.selValues.filter((item) => item.key != filterKey),
    ];
  }
};

const sort = reactive(sortDefault);

const sortChange = ({ key, order }) => {
  sort.key = key;
  sort.order = order;
};

const { show: showOrderForm } = useOrderForm();

const pIndex = computed(() => {
  let page = Number(route.params.page);
  page = page ? page : 1;
  return page - 1;
});

const getFilterType = (key) => {
  const setting = filter.settings.find((set) => set.key === key);
  if (!setting) return undefined;

  return setting.filter.type;
};

const mapFilterToApiParams = (urlParams) => {
  for (const { key, val } of filter.selValues) {
    const type = getFilterType(key);
    console.log('mapFilterToApiParams', { key, val, type });

    switch (type) {
      case 'range_array':
        urlParams.append(`filters[${key}][$gte]`, val.min);
        urlParams.append(`filters[${key}][$lte]`, val.max);
        break;
      case 'array':
        urlParams.append(`filters[${key}][$eq]`, val);
        break;
    }
  }
};

const url = () => {
  const urlParams = new URLSearchParams();
  urlParams.append('populate', '*');
  urlParams.append('pagination[page]', `${pIndex.value + 1}`);

  if (sort.key) {
    urlParams.append('sort', `${sort.key}:${sort.order}`);
  }

  mapFilterToApiParams(urlParams);

  return (
    runtimeConfig.public.apiHost +
    '/api/diamonds/?' +
    new URLSearchParams(urlParams)
  );
};

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
