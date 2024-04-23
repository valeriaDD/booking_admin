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
      <h4>Fast booking API solution for your project</h4>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.container {
  background: $--color-powder;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 100vh;
  gap: 5vh;

  &__card, &__form {
    padding: 1.5rem;
    flex: 1;
    height: 90vh;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem 2rem 2rem 7rem;
    margin-right: 5vh;
    background: $--color-light-green;

    .image {
      margin: auto;
      width: 50%;
    }

    .info {
      color: $--color-primary;

      h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0;
      }

      h4 {
        text-align: center;
      }
    }
  }
}
</style>