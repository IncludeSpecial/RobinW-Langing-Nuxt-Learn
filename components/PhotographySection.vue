<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {CityItems} from '~/data';

const selectedCity = ref('Italy');
const showModal = ref(false);
const modalImageSrc = ref('');

onMounted(() => {
  const scrollContainer = document.querySelector('.scroll-container');
  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    });
  }
});

const openModal = (imageSrc) => {
  modalImageSrc.value = imageSrc;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  modalImageSrc.value = '';
};
</script>

<template>
  <section class="text-white mx-auto">
    <div class="flex flex-col mb-8">
      <h2 class="text-4xl font-bold mb-4">Photography</h2>
      <p class="text-gray-400">
        Here is a collection of my best travel pictures that I took while travelling places all around the world.
      </p>
    </div>

    <div class="flex space-x-4 mb-8">
      <Button
          v-for="city in CityItems"
          :key="city.city"
          @click="selectedCity = city.city"
          :class="{
          'bg-purple-600 text-white': selectedCity === city.city,
          'bg-gray-700 text-white hover:bg-purple-600': selectedCity !== city.city
        }"
          class="px-4 py-2 rounded"
      >
        {{ city.city }}
      </Button>
    </div>

    <div
        class="flex no-scrollbar gap-4 scroll-container rounded-lg overflow-hidden touch-manipulation overflow-x-auto overflow-y-hidden whitespace-nowrap">
      <nuxt-img
          v-for="(image, index) in CityItems.find(city => city.city === selectedCity)?.images || []"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          height="720"
          class="h-96 w-72 object-cover cursor-pointer"
          @click="openModal(image.src)"
      />
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-2 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div class="relative bg-white rounded-lg ">
        <button @click="closeModal"
                class="absolute top-2 right-2 px-2 items-center justify-center rounded-full bg-primary text-center text-gray-700 text-4xl hover:text-gray-900">
          &times;
        </button>
        <nuxt-img :src="modalImageSrc"
                 format="webp"
                 quality="80"
                  loading="lazy"
                 class="max-w-full max-h-screen rounded-lg"/>
      </div>
    </div>
  </section>
</template>

