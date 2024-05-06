<template>
<div class="searcher">
  <el-select
    v-model="resources"
    collapse-tags
    collapse-tags-tooltip
    multiple
    clearable
    filterable
    placeholder="Search by resources"
    class="searcher__item input--select"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>

  <el-select
    v-model="users"
    collapse-tags
    collapse-tags-tooltip
    multiple
    clearable
    filterable
    placeholder="Search by users"
    class="searcher__item input--select"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</div>
</template>

<script>
export default {
  name: 'CalendarFilter',
  data() {
    return {
      users: [],
      resources: [],
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.searcher {
  display: flex;
  gap: 1.5rem;

  &__item {
    max-width: 35rem;
  }
}
</style>