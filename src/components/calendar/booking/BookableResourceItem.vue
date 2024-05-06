<script>
export default {
  name: 'BookableResourceItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<template>
<div class="bookable-item" :class="{active: active}">
  <div class="bookable-item__title"> Meeting room </div>
  <div class="bookable-item__subtitle"> Capacity: 1</div>
  <div class="bookable-item__icon"><i class="icon-arrow-right"/></div>
</div>
</template>

<style scoped lang="scss">
.bookable-item {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background: $--color-slight-blue;

  &__title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  &__subtitle {
    font-size: 0.9rem;
  }

  &__icon {
    float: right;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 250ms;

    i {
      font-size: 1.3rem;
    }
  }

  &:hover, &.active {
    background: $--color-info;
    transition: all 250ms;

    .bookable-item__icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>