<template>
  <el-dialog
    v-model="dialogVisible"
    append-to-body
    title="Add a booking"
    width="1000"
    class="dialog"
    :z-index="5000"
  >
    <div>
      <choose-resource-component></choose-resource-component>
<!--    <el-form class="form" label-position="top">-->
<!--      <el-form-item-->
<!--        class="form__input"-->
<!--        label="Resource"-->
<!--        prop="resource">-->
<!--        <el-select class="input&#45;&#45;select" placeholder="Select"></el-select>-->
<!--      </el-form-item>-->

<!--      <el-form-item-->
<!--        class="form__input"-->
<!--        label="Title"-->
<!--        prop="title">-->
<!--        <el-input class="input"></el-input>-->
<!--      </el-form-item>-->

<!--      <el-form-item-->
<!--        class="form__input"-->
<!--        label="Participants"-->
<!--        prop="participants">-->
<!--        <el-select-->
<!--          multiple-->
<!--          collapse-tags-->
<!--          collapse-tags-tooltip-->
<!--          placeholder="Select"-->
<!--          class="input&#45;&#45;select">-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button class="button" @click="dialogVisible = false">Cancel</el-button>
        <el-button class="button button--confirm" @click="dialogVisible = false">
          Next
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { useBookingStore } from '@/store/booking.store.js'
import ChooseResourceComponent from '@/components/calendar/booking/ChooseResourceComponent.vue'

export default {
  name: 'AddBooking',
  components: { ChooseResourceComponent },
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