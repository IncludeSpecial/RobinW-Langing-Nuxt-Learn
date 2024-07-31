<script setup lang="ts">
import { TestimonialItems } from "~/data";
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4  text-white">
    <!-- Left Column: Text Section -->
    <div class="flex flex-col justify-start lg:pr-16">
      <h2 class="lg:text-4xl text-xl font-bold mb-4">This is what people say about me</h2>
      <p class="text-gray-400 mb-8">
        Here are a few lines from people who I have worked with over the past 8+ years in my design career.
      </p>
      <Button href="/testimonials" class="text-blue-500 hover:underline">
        See all testimonials
      </Button>
    </div>
<Div class="lg:gap-24 gap-4 flex flex-col justify-between ">
  <!-- Right Column: Testimonial Section -->
  <div v-for="item in TestimonialItems" class="space-y-8">
    <div class="flex flex-col   rounded-lg border list-inside border-gray-300">
      <NuxtImg
          :src="item.ImageSrc"
          :alt="item.ImageAltText"
          class="object-cover  rounded-t-lg w-full h-48 md:h-64 lg:h-96 "
      />
      <div class="gap-8 p-12 justify-between flex flex-col">
        <p class="lg:text-2xl text-sm font-semibold ">
          “{{ item.Testimonial }}”
        </p>
        <div>
          <p class="text-gray-500 text-xl font-bold">{{ item.AuthorName }}</p>
          <p class="text-gray-400">{{ item.AuthorTitle }}</p>
        </div>

      </div>
    </div>
  </div>
</Div>

  </section>
</template>
