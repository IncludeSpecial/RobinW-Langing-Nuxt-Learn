<script lang="ts" setup>

import {InstagramSection} from "~/data";
</script>

<template>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div
        class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center object-cover rounded-lg shadow-md">
      <div class="w-full h-full flex justify-center items-center">
        <NuxtImg :alt="InstagramSection.ImageAltText"
                 :src="InstagramSection.ImageSrc"
                 class="object-cover w-full h-64 md:h-96 rounded-lg shadow-md"/>
      </div>
    </div>

    <div class="bg-accent-foreground/10 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-lg shadow-md">
      <h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">
        {{ InstagramSection.PhilosophyTitle }}
      </h2>
      <p class="text-accent-foreground/70">
        {{ InstagramSection.Description }}
      </p>
      <a :href="InstagramSection.Link"
         class="mt-4 text-blue-500 hover:underline">
        {{ InstagramSection.LinkText }}
      </a>
    </div>



  </section>
</template>

