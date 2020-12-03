<template>
  <!-- <nuxt-content
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
    :document="page"
  /> -->
  <!-- <blog-list /> -->
  <div class="relative px-10 mx-auto">
    <div>
      <h2 class="font-extrabold text-gray-900 text-4xl leading-5">
        my sandbox
      </h2>
    </div>
    <div class="grid lg:grid-cols-1">
      <blog-card v-for="blog in blogs" :key="blog.slug" :blog="blog" />
      <!-- {{ blogs }} -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const blogs = await $content('blogs', { text: true }).limit(5).fetch()

    return {
      blogs,
    }
  },
})
</script>
