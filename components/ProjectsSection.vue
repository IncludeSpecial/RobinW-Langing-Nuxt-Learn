<script setup lang="ts">
defineProps<{
  items: Array<{
    imgSrc: string
    imgAlt: string
    title: string
    description: string
  }>
}>();
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Проекты</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        За эти годы я работал над сотнями проектов. Вот некоторые из моих любимых.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="group relative rounded-2xl overflow-hidden"
      >
        <nuxt-img
            :src="item.imgSrc"
            :alt="item.imgAlt"
            class="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-110"
            format="webp"
            quality="80"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
          <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
          <p class="text-gray-300 text-sm line-clamp-3">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
