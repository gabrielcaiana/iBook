<template>
  <div class="login-card">
    <div class="login-card__header">
      <Logo />
    </div>
    <div class="login-card__content">
      <h1>Bem vindo(a) ao Dashboard</h1>
      <h2>Entre na sua conta</h2>
      <LoginForm />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.login-card {
  background: color('dark', 'darkest');
  width: 100%;
  max-width: 489px;
  height: 100%;
  padding: 2rem 4rem;

  &__header {
    width: 124px;
  }

  &__content {
    margin: 3.75rem 0;
    h1 {
      font-size: 1.375rem;
      color: color('light');
      font-weight: normal;
      margin: 0.5rem 0;
    }

    h2 {
      font-size: 1.75rem;
      color: color('light');
    }
  }
}
</style>
