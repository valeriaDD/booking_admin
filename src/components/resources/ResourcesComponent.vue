<script setup>

import ResourcesList from '@/components/resources/ResourcesListComponent.vue'
import ResourcesSearchFilter from '@/components/resources/ResourcesSearchFilterComponent.vue'
</script>

<template>
<div class="container">
  <div class="container__header">
    <h2 class="title">Resources</h2>
    <div class="subtitle">Manage bookable resources, it can be a space, a service or a bookable item</div>
  </div>
  <resources-search-filter class="searcher"/>
  <resources-list />
</div>

</template>

<style scoped lang="scss">
.container {
  padding: 2rem 4rem;

  &__header {
    color: $--color-primary;
    margin-bottom: 3rem;

    .title {
      margin: 0;
      font-size: 2rem;
    }

    .subtitle {
      font-size: 0.95rem;
      font-weight: 300;
      color: $--color-indigo;
    }
  }
  .searcher {
    margin-bottom: 3.5rem;
  }
}
</style>