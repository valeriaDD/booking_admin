<script setup>

</script>

<template>
  <div class="login_form">
    <div class="header">
      <h3 class="header__title">Hi,<span class="orange"> nice to meet you!</span></h3>
      <h4 class="header__subtitle">Please fill the form to get it started</h4>
    </div>

    <el-form class="form" label-position="top">
      <el-form-item>
        <el-input class="form__input" placeholder="Company name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="form__input" placeholder="Company email"></el-input>
      </el-form-item>
      <el-button class="form__action"> Sign in</el-button>
    </el-form>


    <div class="footer">
      Already have an account? <a class="footer__link" @click="$router.push({name: 'credentials-login'})">Sign In</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login_form {
  align-self: center;
  width: 70%;
  height: 90%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: auto;

  .header {
    margin-top: 10%;

    &__title {
      font-size: 2.5rem;
      margin-bottom: 0;
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: normal;
      opacity: 0.7;
    }

    .orange {
      color: $--color-warning;
    }
  }

  .form {
    margin-bottom: 10%;

    &__action {
      margin-top: 3.5rem;
      background: $--color-primary;
      color: $--color-powder;
      font-size: 1.25rem;
      border-radius: 0.4rem;
      border: none;
      min-height: 3rem;
      width: 100%;

      &:hover {
        transition: all 300ms;
        color: $--color-primary;
        background: $--color-light-green;
      }
    }
  }

  .footer {

    text-align: center;

    &__link {
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>