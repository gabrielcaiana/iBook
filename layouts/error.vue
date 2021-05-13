<template>
  <div class="page-error">
    <div v-if="error.statusCode === 404" class="page-error__container">
      <img src="@/assets/img/404.svg" alt="404" />
      <h1 class="page-error__title">Oooops! Pàgina não encontrada.</h1>
      <p class="page-error__description">
        A página que você está procurando não existe ou foi removida
      </p>
      <NuxtLink to="/">
        <button class="page-404__button">Voltar para Home</button>
      </NuxtLink>
    </div>
    <div v-else class="page-error__container">
      <h1 class="page-error__title">Ocorreu um erro inesperado.</h1>
      <NuxtLink to="/">
        <button class="page-404__button">Voltar para Home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['error'],
})
</script>

<style lang="scss" scoped>
.page-error {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: color(dark, darkest);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: color(light);
    padding: 1rem 0 0 0;
    font-size: 1.5rem;
  }

  &__description {
    color: color(dark);
    text-align: center;
    max-width: 300px;
  }

  &__button {
    background-color: color(light);
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
    transition: 0.3ms;

    &:hover {
      background: color(dark);
      color: color(light);
    }
  }
}
</style>
