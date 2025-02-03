<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  cities: Array<{
    city: string
    images: Array<{
      src: string
      alt: string
    }>
  }>
}>();

const activeCity = ref(0);
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Фотографии</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Вот некоторые из моих любимых фотографий из путешествий, которые я сделал за эти годы.
      </p>
    </div>

    <!-- City Tabs -->
    <div class="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
      <button
          v-for="(city, index) in cities"
          :key="index"
          @click="activeCity = index"
          class="flex-shrink-0 px-6 py-3 text-lg font-medium transition-colors"
          :class="{
          'text-white border-b-2 border-blue-500': activeCity === index,
          'text-gray-500 hover:text-gray-300': activeCity !== index
        }"
      >
        {{ city.city }}
      </button>
    </div>

    <!-- Image Grid -->
    <div class="relative">
      <transition
          name="fade"
          mode="out-in"
      >
        <div
            :key="activeCity"
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <nuxt-img
              v-for="(image, imgIndex) in cities[activeCity].images"
              :key="imgIndex"
              :src="image.src"
              :alt="image.alt"
              class="w-full h-64 object-cover rounded-xl transform transition-all hover:scale-105 cursor-zoom-in"
              format="webp"
              quality="80"
              sizes="xs:100vw sm:50vw md:33vw lg:25vw"
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
