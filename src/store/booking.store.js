import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    isBookingFormVisible: true,
  }),
  actions: {
    setVisibility(isVisible) {
      this.isBookingFormVisible = !!isVisible
    }
  }
})
