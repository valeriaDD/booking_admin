<script>
export default {
  name: 'BookableResourceDetailsComponent'
}
</script>

<template>
<div class="details">
  <h3> Meeting room </h3>
  <div class="tag"> Marketing </div>
  <div class="item">
  <div class="item__label">Capacity</div>
  <div class="item__content">12</div>
  </div>
  <div class="item">
    <div class="item__label">Description</div>
    <div class="item__content">Meeting room used for small conferences</div>
  </div>
  <div class="item">
    <div class="item__label">Address</div>
    <div class="item__content">Chisinau, Stefan cel Mare Str, 145, floor 4</div>
  </div>
</div>
</template>

<style scoped lang="scss">
.details {
  display: flex;
  flex-direction: column;
  gap: 1em;

  h3 {
    color: $--color-indigo;
    font-size: 1.5rem;
    margin: 0;
  }

  .tag {
    background: $--color-light-green;
    width: fit-content;
    padding: 0.25rem 0.8rem;
    border-radius: 0.3rem;
    color: $--color-input-field;
    margin-bottom: 1rem;
  }

  .item {
    font-size: 1rem;
    color: $--color-input-field;

    &__label {
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 0.25rem;
    }
  }
}
</style>