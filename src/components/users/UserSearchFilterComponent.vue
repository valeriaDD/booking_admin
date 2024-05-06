<template>
  <div class="searcher">
    <el-input placeholder="Search by keywords" type="text" class="searcher__item input flex-2">
      <template #append>
        <el-button class="button"><i class="icon-search" /></el-button>
      </template>
    </el-input>

    <el-select
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      class="searcher__item input--select flex-1"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <div class="input--radio">
      <el-radio-group size="large">
        <el-radio-button label="All" value="All" />
        <el-radio-button label="Internam" value="Internal" />
        <el-radio-button label="External" value="External" />
      </el-radio-group>
    </div>
  </div>
</template>
<script>

export default {
  name: 'UserSearchFilter',
  data() {
    return {
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
  gap: 1rem;

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

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}
</style>