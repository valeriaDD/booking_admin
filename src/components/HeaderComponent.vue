<template>
  <div class="header">
    <div class="header__options">
      <ul class="list">
        <li v-for="menuItem in menuItems"
            :key="menuItem.name"
            @click="redirect(menuItem.routeName)"
            class="list__item"
            :class="{'list__item--selected': menuItem.routeName === defaultRouteName}"
        >
          <i :class="menuItem.iconClass" /> {{ menuItem.name }}
        </li>
      </ul>
    </div>
    <div class="header__avatar">
      <el-avatar></el-avatar>
      <i class="icon icon-more-vertical" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          routeName: 'calendar',
          name: 'Calendar',
          iconClass: 'icon-calendar'
        },
        {
          routeName: 'users',
          name: 'Users',
          iconClass: 'icon-users'
        },
        {
          routeName: 'resources',
          name: 'Resources',
          iconClass: 'icon-database'
        },
        {
          routeName: 'docs',
          name: 'Docs',
          iconClass: 'icon-book-open'
        }
      ]
    }
  },
  computed: {
    defaultRouteName() {
      return this.$route.name
    }
  },
  methods: {
    redirect(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 55px;
  display: flex;
  align-items: center;

  &__options {
    display: flex;
    flex: 3;
    justify-content: center;

    .list {
      display: flex;
      gap: 4rem;
      list-style-type: none;

      &__item {
        transition: all 300ms;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover, &--selected {
          transition: all 250ms;
          background: $--color-light-green;
        }
      }
    }
  }

  &__avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: end;

    .icon {
      font-size: 1.3rem;
    }
  }
}
</style>