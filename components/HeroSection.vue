<script setup lang="ts">
defineProps<{
  title: string
  titleSecond: string
  description: string
  imageSrc: string
  imageAlt: string
}>();
</script>

<template>
  <section  class="container  mx-auto px-4 pt-32">
    <div class="flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/2 space-y-8">
        <h1 class="text-5xl md:text-6xl font-bold leading-tight">
          <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {{ title }}
          </span>
          <span class="block mt-4 text-3xl text-gray-400">
            {{ titleSecond }}
          </span>
        </h1>
        <p class="text-xl text-gray-400/90 max-w-2xl">
          {{ description }}
        </p>
      </div>

      <div class="lg:w-1/2 relative group">
        <div class="relative rounded-full  overflow-hidden">
          <nuxt-img
              :src="imageSrc"
              :alt="imageAlt"
              class="w-auto h-full  object-cover"
              format="webp"
              quality="80"
              sizes="sm:100vw md:50vw lg:800px"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        </div>
      </div>
    </div>
  </section>
</template>
