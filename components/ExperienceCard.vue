<script setup lang="ts">

import {CardItems} from "~/data";
</script>

<template>
  <!-- Experience Card -->
  <div
      v-for="card in CardItems"
      class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-3 flex flex-col justify-start">
    <span class="text-5xl md:text-9xl text-gray-600">{{ card.id }}</span>
    <p class="text-xl md:text-2xl py-2"><span :class=card.firstColor>{{ card.firstWord }}</span>{{ card.secondWord }}
    </p>
    <p class="py-2 text-sm md:text-base">{{ card.description }}</p>
  </div>
</template>

<style scoped>

</style>