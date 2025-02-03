<script setup lang="ts">
import { CardItems } from '~/data';
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Professional Journey</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        My career path through different companies and roles
      </p>
    </div>

    <div class="relative pl-8 border-l-2 border-gray-800 space-y-12">
      <div
          v-for="(item, index) in CardItems"
          :key="index"
          class="relative"
      >
        <div class="absolute w-4 h-4 bg-blue-500 rounded-full -left-[25px] top-2" />
        <div class="ml-8 p-6 rounded-xl bg-gray-900 hover:bg-gray-800/50 transition-colors">
          <span :class="item.firstColor" class="text-sm font-mono">{{ item.id }}</span>
          <h3 class="text-2xl font-semibold mt-2">
            <span :class="item.firstColor">{{ item.firstWord }}</span>
            {{ item.secondWord }}
          </h3>
          <p class="text-gray-400 mt-4">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
