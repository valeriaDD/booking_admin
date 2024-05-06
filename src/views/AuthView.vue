<script setup>

</script>

<template>
<div class="container">
  <div class="container__form">
    <router-view></router-view>
  </div>
  <div class="container__card">
    <img src="@/assets/images/girl.png" alt="image" class="image"/>
    <div class="info">
      <h3>Mange bookings efficiently!</h3>
      <h4>Fast Booking API solution for your project</h4>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.container {
  background: $--color-info;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 100vh;
  gap: 5vh;

  &__card, &__form {
    padding: 1.5rem;
    flex: 1;
    height: 85vh;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem 0.4rem 0.4rem 8rem;
    margin-right: 5vh;
    background: $--color-indigo;

    .image {
      margin: auto;
      width: 60%;
    }

    .info {
      color: $--color-white;

      h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0;
      }

      h4 {
        margin-top: 0.5rem;
        text-align: center;
      }
    }
  }
}
</style>