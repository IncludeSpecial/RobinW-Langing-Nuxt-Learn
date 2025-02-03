<script setup lang="ts">
defineProps<{
  PhilosophyTitle: string
  Description: string
  ImageSrc: string
  ImageAltText: string
}>();
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/2">
        <nuxt-img
            :src="ImageSrc"
            :alt="ImageAltText"
            class="rounded-3xl"
            format="webp"
            quality="80"
        />
      </div>

      <div class="lg:w-1/2 space-y-8">
        <h2 class="text-4xl font-bold">{{ PhilosophyTitle }}</h2>
        <p class="text-gray-400 text-lg">{{ Description }}</p>
        <button class="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
          <span>Узнать подробнее</span>
          <Icon name="heroicons:arrow-long-right" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>
