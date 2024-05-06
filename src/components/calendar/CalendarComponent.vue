<script>

import { defineComponent } from 'vue'
import FullCalendarComponent from '@/components/calendar/FullCalendarComponent.vue'
import CalendarFilterComponent from '@/components/calendar/CalendarFilterComponent.vue'

export default defineComponent({
  components: { CalendarFilterComponent, FullCalendarComponent }
})
</script>
<template>
  <el-container class="container">
    <el-header class="header">
      <calendar-filter-component class="flex-1"/>
    </el-header>
    <el-main>
      <full-calendar-component/>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  padding: 2rem 2rem 0;

  .header {
    width: 100%;
    display: flex;
  }
}
</style>