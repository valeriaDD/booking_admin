<script>

import { defineComponent } from 'vue'
import FullCalendarComponent from '@/components/calendar/FullCalendarComponent.vue'
import CalendarFilterComponent from '@/components/calendar/CalendarFilterComponent.vue'

export default defineComponent({
  components: { CalendarFilterComponent, FullCalendarComponent }
})
</script>
<template>
  <el-container>
    <el-header>
      <calendar-filter-component/>
    </el-header>
    <el-main>
      <full-calendar-component/>
    </el-main>
  </el-container>
</template>