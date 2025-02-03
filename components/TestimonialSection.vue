<script setup lang="ts">
defineProps<{
  items: Array<{
    Testimonial: string
    AuthorName: string
    AuthorTitle: string
    ImageSrc: string
  }>
}>();
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="p-8 rounded-2xl bg-gray-900 border border-gray-800"
      >
        <p class="text-gray-400 mb-6">"{{ item.Testimonial }}"</p>
        <div class="flex items-center gap-4">
          <nuxt-img
              :src="item.ImageSrc"
              alt="Author"
              class="w-12 h-12 rounded-full object-cover"
              width="48"
              height="48"
          />
          <div>
            <h4 class="font-semibold">{{ item.AuthorName }}</h4>
            <p class="text-sm text-gray-500">{{ item.AuthorTitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
