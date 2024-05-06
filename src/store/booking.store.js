import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    isBookingFormVisible: true,
    form: {
      resource_id: undefined,
    }
  }),
  getters: {
    isFirstStep() {
      return !this.form.resource_id;
    }
  },
  actions: {
    setVisibility(isVisible) {
      this.isBookingFormVisible = !!isVisible
    },
    resetForm() {
      this.form.resource_id = undefined;
    }
  }
})
