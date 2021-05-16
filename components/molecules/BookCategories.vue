<template>
    <div class="book-categories">
        <Chip v-for="category in $book.categories" :key="category.id" :text="category.name" />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>