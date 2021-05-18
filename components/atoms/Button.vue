<template>
  <button class="button" :class="buttonStyle" :type="type">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: { type: String, required: true },
    buttonStyle: { type: String, required: false },
    type: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.05);
  }
}

.button-default {
  background: color('light');
  color: color('dark', 'darkset');
  cursor: pointer;
  padding: 0.7rem 1rem;
  border-radius: 1.5rem;
  font-weight: 500;
}
</style>
