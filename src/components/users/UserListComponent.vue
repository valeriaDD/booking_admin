<template>
  <div class="list">
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

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  text-align: start;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: $--color-gray;
  border-bottom: 1px solid $--color-light-gray;

  &__item--actions {
    text-align: end;
    width: 8rem;
  }
}

.content {
  margin-top: 1rem;

  &__item {
    margin-bottom: 0.5rem;
  }
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}
</style>