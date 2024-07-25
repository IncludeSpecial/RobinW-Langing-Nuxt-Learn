<script lang="ts" setup>

import {PhilosophySection} from "~/data";
</script>

<template>
  <!-- Philosophy Section -->
  <section class="grid grid-cols-1 md:grid-cols-2   gap-4">
    <div class="bg-accent-foreground/10 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-lg shadow-md">
      <h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">{{ PhilosophySection.PhilosophyTitle }}</h2>
      <p class="text-accent-foreground/70">{{ PhilosophySection.Description }}</p>
      <a :href="PhilosophySection.Link" class="mt-4 text-blue-500 hover:underline">{{ PhilosophySection.LinkText }}</a>
    </div>

    <div
        class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center object-cover rounded-lg shadow-md">
      <div class="w-full h-full flex justify-center items-center">
        <img :alt="PhilosophySection.ImageAltText" :src="PhilosophySection.ImageSrc"
             class="object-cover w-full h-64 md:h-96 rounded-lg shadow-md">
      </div>
    </div>
  </section>
</template>

