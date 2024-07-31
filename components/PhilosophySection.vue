<script lang="ts" setup>
import {PhilosophyItems} from "~/data";
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    <div
        class="bg-accent-foreground/10 dark:bg-gray-800 p-4 flex flex-col justify-center items-start rounded-lg shadow-md">
      <h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">
        {{ PhilosophyItems.PhilosophyTitle }}
      </h2>
      <p class="text-accent-foreground/70 mb-4">
        {{ PhilosophyItems.Description }}
      </p>
      <Button variant="link" class="text-blue-400 " :href="PhilosophyItems.Link">
        <Icon name="arcticons:linkhub" class="mr-2"/>
        {{ PhilosophyItems.LinkText }}
      </Button>
    </div>

    <div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center rounded-lg shadow-md">
      <LazyNuxtImg
          :alt="PhilosophyItems.ImageAltText"
          :src="PhilosophyItems.ImageSrc"
          class="object-cover w-full h-64 md:h-96 rounded-lg"
      />
    </div>
  </section>
</template>
