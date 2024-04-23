<template>
  <div class="container">
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

  .searcher {
    margin-bottom: 3rem;
  }
}
</style>