<template>
  <LoginTemplate />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'login',
  middleware: 'guest'
})
</script>