<template>
<div class="container">
  <div class="filter">
    <el-input class="input" placeholder="Search resource">
      <template #append>
        <el-button class="button"><i class="icon-search" /></el-button>
      </template>
    </el-input>
    <div class="list">
      <bookable-resource-item :active="true"/>
      <bookable-resource-item />
      <bookable-resource-item />
      <bookable-resource-item />
      <bookable-resource-item />
      <bookable-resource-item />
      <bookable-resource-item />
      <bookable-resource-item />
    </div>
  </div>

  <bookable-resource-details-component class="details"/>
</div>
</template>

<script>
import BookableResourceItem from '@/components/calendar/booking/BookableResourceItem.vue'
import BookableResourceDetailsComponent from '@/components/calendar/booking/BookableResourceDetailsComponent.vue'

export default {
  name: 'ChooseResourceComponent',
  components: { BookableResourceDetailsComponent, BookableResourceItem }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 2rem;

  .filter {
    width: 22rem;

    .input {
      margin-bottom: 1rem;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-height: 26rem;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .button {
      padding: 0;
      width: 1rem;

      i {
        color: $--color-indigo;
      }
    }
  }

  .details {
    flex: 1;
  }
}

</style>