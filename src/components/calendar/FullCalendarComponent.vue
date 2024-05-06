<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          start: 'today prevYear,prev,next,nextYear',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,listWeek'
        },
        firstDay: 1,
        nowIndicator: true,
        allDaySlot: false,
        titleFormat: {
          day: "numeric",
          month: "long",
          year: "numeric",
        },
        height: '100%',
      }
    }
  },
  mounted() {
    this.calendarApi = this.$refs.fullCalendar.getApi();
  }
}
</script>

<template>
  <div class="booking-calendar">
    <FullCalendar :options="calendarOptions" ref="fullCalendar" />
  </div>
</template>

<style scoped>

</style>