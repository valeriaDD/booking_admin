<template>
  <div class="container">
    <div class="container__header">
      <h2 class="title">Users</h2>
      <div class="subtitle">Mange your company users, including external ones</div>
    </div>
    <user-search-filter class="searcher"></user-search-filter>
    <user-list-component></user-list-component>
  </div>
</template>

<script>
import UserListComponent from '@/components/users/UserListComponent.vue'
import UserSearchFilter from '@/components/users/UserSearchFilterComponent.vue'

export default {
  name: 'UsersComponent',
  components: { UserSearchFilter, UserListComponent }
}
</script>

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
    margin-bottom: 3rem;
  }
}
</style>