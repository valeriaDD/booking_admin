<template>
  <div class="sidebar">
    <add-booking></add-booking>
    <el-menu
      class="sidebar__menu"
      :router="true"
      :default-active="defaultRouteName"
    >
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="../assets/images/logo.png" height="32px" width="180px" />
        </router-link>
      </div>

      <el-button class="button book-button" @click="openAddBookingForm">
        <i class="icon-plus-circle"/> <span>Add booking </span>
      </el-button>

      <ul class="list">
        <li v-for="menuItem in menuItems"
            :key="menuItem.name"
            class="list__item"
            :class="{'list__item--selected': menuItem.routeName === defaultRouteName}"
        >
          <router-link  :to="{ name: menuItem.routeName }">
            <i :class="menuItem.iconClass" /> {{ menuItem.name }}
          </router-link>
        </li>
      </ul>

      <hr class="separator"/>

      <div class="list__item" :class="{'list__item--selected': 'docs' === defaultRouteName}">
        <router-link :to="{ name: 'docs' }">
          <i class="icon-book-open" /> Docs
        </router-link>
      </div>
    </el-menu>

    <div class="avatar-menu">
      <router-link :to="{ name: 'home' }" class="avatar-menu__link">
        <avatar :size="40" />
        <div class="avatar-menu__text">
          <h3>Alice Wong</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/common/AvatarComponent.vue'
import { useBookingStore } from '@/store/booking.store.js'
import AddBooking from '@/components/calendar/AddBookingComponent.vue'

export default {
  components: { AddBooking, Avatar },
  data() {
    return {
      bookingStore: useBookingStore(),
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
      ]
    }
  },
  computed: {
    defaultRouteName() {
      return this.$route.name
    }
  },
  methods: {
    openAddBookingForm() {
      this.bookingStore.setVisibility(true);
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  overflow: auto;
  position: fixed;
  width: 240px;
  height: calc(100vh - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: $--color-info;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }

  &__menu {
    background-color: transparent;
    border: none;
    padding: 1em 1em 0;
    color: $--color-input-field;

    .logo {
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 2.5rem;

      a {
        color: $--color-indigo;
      }
    }

    .button {
      height: 2.5rem;
      width: 100%;
      font-weight: bold;
      margin-bottom: 2.5rem;
      background: $--color-warning;
      color: $--color-white;
      padding: 0.8rem;
      transition: all 0.3s ease-in-out;

      i {
        margin-right: 0.8rem;
        font-size: 1.3rem;
      }

      span {
        margin-top: 0.2rem;
      }

      &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
      }
    }

    .list {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;


      &__item {
        display: block;
        transition: all 250ms ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;

        a {
          color: $--color-indigo;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 500;

          i {
            font-size: 1.2rem;
          }
        }

        &:hover, &--selected {
          transition: all 250ms ease-in-out;
          background: $--color-white;
        }
      }
    }

    .separator {
      opacity: 0.6;
      margin: 1.2rem 0;
    }
  }

  .avatar-menu {
    display: flex;
    align-items: center;

    .avatar-menu__link {
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease-out;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-decoration: none;
      gap: 0.5rem;

      .router-link-active,
      &:hover {
        background-color: $--color-white;
        left: 0;
        transform: scaleX(1);
      }
    }

    .avatar-menu__text {
      color: $--color-input-field;
      word-break: break-all;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }

    p {
      font-size: 12px;
      color: $--color-gray;
      font-weight: 400;
      margin: 0;
    }
  }
}
</style>
