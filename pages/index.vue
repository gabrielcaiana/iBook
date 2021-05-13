<template>
  <HomeTemplate />
</template>
<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  layout: 'ibook',
  async asyncData() {
    await books.index()
    await books.show({ id: 1})
  }
})
</script>
