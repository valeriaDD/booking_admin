<template>
  <el-dialog
    v-model="dialogVisible"
    append-to-body
    title="Add a booking"
    width="800"
    class="dialog"
    :z-index="5000"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button class="button" @click="dialogVisible = false">Cancel</el-button>
        <el-button class="button button--confirm" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { useBookingStore } from '@/store/booking.store.js'

export default {
  name: 'AddBooking',
  data() {
    return {
      bookingStore: useBookingStore(),
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.bookingStore.isBookingFormVisible;
      },
      set(newValue) {
        this.bookingStore.setVisibility(newValue);
      }
    },
  },
}
</script>

<style scoped lang="scss">

</style>