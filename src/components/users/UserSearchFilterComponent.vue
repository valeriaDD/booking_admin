<template>
  <div>
    <el-input></el-input>
    <div>
      <el-radio-group size="large">
        <el-radio-button label="All" value="All" />
        <el-radio-button label="Internam" value="Internal" />
        <el-radio-button label="External" value="External" />
      </el-radio-group>
    </div>
    <el-select
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
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

</style>