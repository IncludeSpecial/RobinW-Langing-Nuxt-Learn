<script setup lang="ts">
defineProps<{
  PhilosophyTitle: string
  Description: string
  Link: string
  LinkText: string
  ImageSrc: string
}>();
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-16 items-center bg-gray-900 rounded-3xl p-12">
      <div class="lg:w-1/2">
        <nuxt-img
            :src="ImageSrc"
            alt="Instagram Preview"
            class="rounded-2xl shadow-2xl transform transition-all hover:scale-[1.01]"
            format="webp"
            quality="80"
        />
      </div>

      <div class="lg:w-1/2 space-y-8">
        <h2 class="text-4xl font-bold">{{ PhilosophyTitle }}</h2>
        <p class="text-gray-400 text-lg">{{ Description }}</p>
        <a
            :href="Link"
            class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <span>{{ LinkText }}</span>
          <Icon
              name="mdi:instagram"
              class="w-6 h-6 transition-transform group-hover:scale-125"
          />
        </a>
      </div>
    </div>
  </section>
</template>
