<script setup>

</script>

<template>
<div class="header">
  <div class="header__options">
    <ul class="list">
      <li class="list__item list__item--selected"><i class="icon-calendar"/>Calendar</li>
      <li class="list__item"><i class="icon-users" />Users</li>
      <li class="list__item"><i class="icon-database"/>Resource</li>
      <li class="list__item"><i class="icon-book-open"/>Docs</li>
    </ul>
  </div>
  <div class="header__avatar">
    <el-avatar></el-avatar>
    <i class="icon icon-more-vertical"/>
  </div>
</div>
</template>

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