<template>
  <div class="searcher">
    <el-input
      placeholder="Search by keywords"
      v-model="keywords"
      class="searcher__item input flex-2">
      <template #append>
        <el-button class="button"><i class="icon-search" /></el-button>
      </template>
    </el-input>

    <el-select
      v-model="tags"
      collapse-tags
      collapse-tags-tooltip
      multiple
      clearable
      filterable
      placeholder="Search by tag"
      class="searcher__item input--select flex-1"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <div>
      <el-radio-group size="large" class="input--radio" v-model="isExternal">
        <el-radio-button :value="undefined">All</el-radio-button>
        <el-radio-button :value="true">Internal</el-radio-button>
        <el-radio-button :value="false">External</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>
<script>

export default {
  name: 'UserSearchFilter',
  data() {
    return {
      tags: [],
      keywords: "",
      isExternal: undefined,
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

  .button {
    i {
      font-size: 1rem;
      color: $--color-input-field;
    }
  }

  &__item {
    font-size: 1rem;
  }
}
</style>