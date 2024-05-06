<script>
import UserItem from '@/components/users/UserItemComponent.vue'
import ResourceItem from '@/components/resources/ResourceItemComponent.vue'

export default {
  name: 'ResourcesList',
  components: { ResourceItem, UserItem }
}
</script>

<template>
  <div class="table-list">
    <div class="header">
      <div class="header__item flex-1">Title</div>
      <div class="header__item flex-2">Description</div>
      <div class="header__item flex-2">Address</div>
      <div class="header__item flex-1">Capacity</div>
      <div class="header__item flex-1">Tag</div>
      <div class="header__item header__item--actions">Actions</div>
    </div>

    <div class="content">
      <resource-item class="content__item"></resource-item>
      <resource-item class="content__item"></resource-item>
      <resource-item class="content__item"></resource-item>
      <resource-item class="content__item"></resource-item>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>