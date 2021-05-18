<template>
  <button class="button button-default">{{ text }}</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: { type: String, required: true },
    type: { type: String, required: false }
  },
})
</script>

<style lang="scss" scoped>
.button {
    width: 100%;
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
