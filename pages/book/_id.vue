<template>
  <BookDetailsTemplate />
</template>
<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params }) {
    await books.show({ id: Number(params.id) })
    console.log(books.$single)
  },
})
</script>
