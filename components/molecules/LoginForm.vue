<template>
  <form @submit.prevent="submit" class="login-form">
    <input
      v-model="login.email"
      class="login-form__input"
      type="email"
      placeholder="Email"
    />
    <input
      v-model="login.password"
      class="login-form__input"
      type="password"
      placeholder="Senha"
    />
    <div class="login-form__actions">
      <Button text="Entrar" buttonStyle="button-default" />
    </div>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    login: {
      email: '',
      password: '',
    },
  }),

  methods: {
    submit() {
      console.log(this.login)
    },
  },
})
</script>

<style lang="scss" scoped>
.login-form {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0.5rem;

  &__input:first-child {
    margin-top: 3rem;
  }

  &__input {
    padding: 1rem;
    background: none;
    border: 1px solid color('light');
    border-radius: 1.5rem;
    transition: 0.3ms;
    color: color('light');

    &:focus {
      border: 2px solid color('light');
      color: color('light');
    }
  }

  &__actions {
    margin-top: 2rem;
  }
}
</style>
