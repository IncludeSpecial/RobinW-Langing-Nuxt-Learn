<script setup lang="ts">
import {HeroItems} from "~/data";
</script>

<template>

  <section class=" relative flex flex-col md:flex-row justify-between items-center  ">

    <NuxtImg
        :alt="HeroItems.imageAlt"
        :src="HeroItems.imageSrc"
        format="webp"
        quality="80"
        class="md:w-1/2  h-1/2  object-cover rounded-lg shadow-md"/>

    <div class="md:right-0 md:w-screen px-4">

      <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl text-primary py-4">
        {{ HeroItems.title }}
        <span class="text-gray-400 block">
          {{ HeroItems.titleSecond }}
        </span>
      </h1>

      <p class="text-lg  text-primary mt-4 lg: md:mt-8 md:pr-8">
        {{ HeroItems.description }}
      </p>

    </div>
  </section>
</template>
