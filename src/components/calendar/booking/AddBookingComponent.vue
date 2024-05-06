<template>
  <el-dialog
    v-model="dialogVisible"
    append-to-body
    title="Add a booking"
    width="1000"
    class="dialog"
    :z-index="5000"
    @close="dialogVisible = false"
    @closed="resetForm"
  >
    <div>
      <choose-resource-component v-if="isFirstStep"></choose-resource-component>
      <el-form v-else class="form" label-position="top">
        <el-form-item
          class="form__input"
          label="Resource"
          prop="resource">
          <el-select class="input--select" placeholder="Select"></el-select>
        </el-form-item>

        <el-form-item
          class="form__input"
          label="Title"
          prop="title">
          <el-input class="input"></el-input>
        </el-form-item>

        <el-form-item
          class="form__input"
          label="Participants"
          prop="participants">
          <el-select
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="Select"
            class="input--select">
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button class="button" @click="dialogVisible = false">Cancel</el-button>
        <el-button class="button button--confirm" @click="goToNextStep">
          {{buttonText}}
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
      bookingStore: useBookingStore()
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.bookingStore.isBookingFormVisible
      },
      set(newValue) {
        this.bookingStore.setVisibility(newValue)
      }
    },
    isFirstStep() {
      return this.bookingStore.isFirstStep
    },
    buttonText() {
      if (this.isFirstStep) {
        return 'Next step'
      }

      return 'Book'
    }
  },
  methods: {
    resetForm() {
      this.bookingStore.resetForm();
    },
    goToNextStep() {
      if (this.isFirstStep) {
        this.bookingStore.form.resource_id = 1
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>