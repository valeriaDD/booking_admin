<script setup>

</script>

<template>
  <div class="login_form">
    <div class="header">
      <h3 class="header__title">Welcome back!</h3>
      <h4 class="header__subtitle">Please enter credentials to continue</h4>
    </div>

    <el-form class="form" label-position="top">
      <el-form-item>
        <el-input class="form__input" placeholder="Client id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="form__input" placeholder="Client secret"></el-input>
      </el-form-item>
      <el-button class="form__action"> Sign in</el-button>
    </el-form>


    <div class="footer">
      Dont have an account? <a class="footer__link">Sign Up</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login_form {
  height: 90%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .header {
    &__title {
      font-size: 2.5rem;
      margin-bottom: 0;
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: normal;
      opacity: 0.7;
    }
  }

  .form__action {
    margin-top: 3.5rem;
    background: $--color-primary;
    color: $--color-powder;
    font-size: 1.25rem;
    border-radius: 0.4rem;
    border: none;
    min-height: 3rem;
    width: 100%;

  }

  .footer {

    text-align: center;

    &__link {
      font-weight: bold;
    }
  }
}
</style>