<template>
  <div class="mt-6 pb-6 border-b-2 border-gray-200">
    <p class="text-sm leading-5 text-gray-500">
      <time :datetime="updatedAt">{{ updatedAt }}</time>
      <span v-if="readingTime" class="mx-1"> &middot; </span>
      <span v-if="readingTime"> {{ readingTime }} </span>
      <span v-if="blog.badges" class="mx-1"> &middot; </span>
      <span v-if="blog.badges"> {{ blog.badges }} </span>
    </p>
    <a href="#" class="block">
      <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
        {{ blog.title }}
      </h3>
      <p class="mt-3 text-base leading-6 text-gray-500">
        {{ blog.description }}
      </p>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DateTime } from 'luxon'
DateTime.local()
const readingTime = require('reading-time')

export default Vue.extend({
  props: { blog: Object },
  computed: {
    readingTime() {
      return readingTime(this.blog.text).text
    },
    updatedAt() {
      return DateTime.fromISO(this.blog.updatedAt).toLocaleString(
        DateTime.DATE_MED
      )
    },
  },
  // data() {
  //   return {
  //     blog: this.blog,
  //   }
  // },
})
</script>
