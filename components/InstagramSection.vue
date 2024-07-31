<script lang="ts" setup>
import { InstagramItems } from "~/data";
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center rounded-lg shadow-md">
      <LazyNuxtImg
          :alt="InstagramItems.ImageAltText"
          :src="InstagramItems.ImageSrc"
          class="object-cover w-full h-64 md:h-96 rounded-lg"
      />
    </div>

    <div class="bg-accent-foreground/10 dark:bg-gray-800 p-4 flex flex-col justify-center items-start rounded-lg shadow-md">
      <h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">
        {{ InstagramItems.PhilosophyTitle }}
      </h2>
      <p class="text-accent-foreground/70 mb-4">
        {{ InstagramItems.Description }}
      </p>
      <Button variant="link" :href="InstagramItems.Link" class="text-blue-500">
        <Icon name="arcticons:instagram" class="mr-2"/>
        {{ InstagramItems.LinkText }}
      </Button>
    </div>
  </section>
</template>
