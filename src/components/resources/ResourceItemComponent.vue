<script>
import Avatar from '@/components/common/AvatarComponent.vue'

export default {
  name: 'ResourceItem',
  components: { Avatar }
}
</script>

<template>
  <div class="item">
    <div class="flex-1">Meeting room</div>
    <div class="flex-2">Meeting room used for small conferences</div>
    <div class="flex-2">Stefan cel Mare street, 132, floor 4</div>
    <div class="flex-1">1</div>
    <div class="flex-1"><span class="item__tag">Marketing</span></div>
    <div class="item__actions">
      <el-button class="button button--edit"><i class="icon-edit" /></el-button>
      <el-button class="button button--delete"><i class="icon-trash" /></el-button>
    </div>
  </div>
</template>