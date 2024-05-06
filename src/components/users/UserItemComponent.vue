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


<style scoped lang="scss">
.item {
  transition: all 250ms;
  padding: 0.5rem;
  border-radius: 0.4rem;
  color: $--color-gray;
  background: $--color-slight-blue;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 250ms;
    background: $--color-info;
  }

  &__name {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__type, &__tag {
    transition: all 250ms;
    font-size: 0.85rem;
    cursor: default;
    user-select: none;
    border-radius: 0.4rem;
    padding: 0.25rem 0.5rem;
    opacity: 0.8;

    &:hover {
      transition: all 250ms;
      opacity: 1;
    }
  }

  &__type {
    background: $--color-light-blue;
  }

  &__tag {
    background: $--color-light-green;
    color: $--color-input-field;
  }

  &__actions {
    text-align: end;
    width: 8rem;

    .button {
      display: inline;
      transition: all 250ms;
      padding: 0.5rem;
      border: none;
      border-radius: 0.4rem;
      background: transparent;
      font-size: 1.125rem;

      &--delete {
        color: $--color-danger;
        background: $--color-light-danger;

        &:hover {
          transition: all 250ms;
          background: $--color-danger;
          color: $--color-light-danger;
        }
      }

      &--edit {
        color: $--color-indigo;
        background: $--color-light-blue-gray;

        &:hover {
          transition: all 250ms;
          background: $--color-indigo;;
          color: $--color-light-blue-gray;
        }
      }
    }
  }
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}
</style>