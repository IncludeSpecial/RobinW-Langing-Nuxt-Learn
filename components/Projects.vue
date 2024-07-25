<script setup lang="ts">
import { ProjectsItems } from '~/data';
</script>

<template>
  <div class="p-4">
    <div class="mb-8 md:w-1/2">
      <h5 class="text-xl">MY PROJECTS</h5>
      <p class="text-4xl md:text-6xl font-bold">Work that I’ve done for the past 8 years</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
          v-for="(item, index) in ProjectsItems"
          :key="index"
          class="relative bg-primary text-primary-foreground rounded-lg"
          :class="{ 'md:top-16': index % 2 == 0 }"
      >
        <img :src="item.imgSrc" :alt="item.imgAlt" class="w-full rounded-t-lg"/>
        <div class="p-4">
          <h5 class="text-2xl md:text-4xl">{{ item.title }}</h5>
          <p class="text-lg md:text-xl">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-5/6 mt-8 flex justify-center md:justify-end">
      <button class="p-4 border-gray-500 border-2">VIEW ALL PROJECTS</button>
    </div>
  </div>
</template>

