<template>
  <div class="table-list">
    <div class="header">
      <div class="header__item flex-2">Name</div>
      <div class="header__item flex-1">Type</div>
      <div class="header__item flex-2">Tag</div>
      <div class="header__item flex-2">Email</div>
      <div class="header__item flex-2">Phone</div>
      <div class="header__item header__item--actions">Actions</div>
    </div>

    <div class="content">
      <user-item class="content__item"></user-item>
      <user-item class="content__item"></user-item>
      <user-item class="content__item"></user-item>
      <user-item class="content__item"></user-item>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/users/UserItemComponent.vue'

export default {
  name: 'UserListComponent',
  components: { UserItem }
}
</script>