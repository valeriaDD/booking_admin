<template>
  <div class="item">
    <div class="item__name flex-2">
      <avatar name="Jon Doe" :withInitials="true"/>
      <span>Jon Doe</span>
    </div>
    <div class="flex-1"><span class="item__type">External</span></div>
    <div class="flex-2"><span class="item__tag">Marketing</span></div>
    <div class="flex-2">jonDoe@gmail.com</div>
    <div class="flex-2">+373 60 471 172</div>
    <div class="item__actions">
      <el-button class="button button--edit"><i class="icon-edit" /></el-button>
      <el-button class="button button--delete"><i class="icon-trash" /></el-button>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/common/AvatarComponent.vue'

export default {
  name: 'UserItem',
  components: { Avatar }

}

</script>