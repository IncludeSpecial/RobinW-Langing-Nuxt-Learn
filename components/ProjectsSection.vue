<script lang="ts" setup>
import {ProjectsItems} from '~/data';
</script>

<template>
  <div class="p-4">
    <div class="mb-8 md:w-1/2">
      <h5 class="text-xl text-gray-400">MY PROJECTS</h5>
      <p class="text-4xl md:text-6xl  font-semibold">
        Work that I’ve done for the past 8 years
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
          v-for="(item, index) in ProjectsItems"
          :key="index"
          :class="{ 'md:top-16': index % 2 == 0 }"
          class="relative bg-primary text-primary-foreground rounded-lg">

        <LazyNuxtImg :alt="item.imgAlt"
                 :src="item.imgSrc"
                 class="w-full rounded-t-lg"/>

        <div class="p-4">
          <h5 class="lg:text-4xl text-2xl font-semibold md:text-4xl">
            {{ item.title }}
          </h5>
          <p class="text-lg md:text-xl">
            {{ item.description }}
          </p>
        </div>

      </div>
    </div>

    <div class="w-full md:w-5/6 mt-8 flex justify-center md:justify-end">
      <Button variant="default">VIEW ALL PROJECTS</Button>
    </div>
  </div>
</template>

