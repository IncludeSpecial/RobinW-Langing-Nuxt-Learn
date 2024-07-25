<script setup lang="ts">
import { Hero } from "~/data";

interface HeroData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleSecond: string;
  description: string;
}

const hero: HeroData = Hero;
</script>

<template>
  <!-- Hero Section -->
  <section class=" relative flex flex-col md:flex-row justify-between items-center  ">
    <img
        :src="hero.imageSrc"
        class="md:w-1/2  h-1/2  object-cover rounded-lg shadow-md"
        :alt="hero.imageAlt"
    >
    <div class="md:right-0 md:w-screen px-4">
      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl text-primary py-4">
        {{ hero.title }}
        <span class="text-gray-400 block">{{ hero.titleSecond }}</span>
      </h1>
      <p class="text-lg  text-primary mt-4 lg: md:mt-8 md:pr-8">{{ hero.description }}</p>
    </div>
  </section>
</template>

<style scoped>
/* Добавьте стили, если необходимо */
</style>
