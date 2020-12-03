<template></template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('blogs/tailwind-demo').fetch()

    return {
      page,
    }
  },
})
</script>
