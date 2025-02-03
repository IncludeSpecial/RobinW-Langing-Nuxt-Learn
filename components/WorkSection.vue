<script setup lang="ts">
defineProps<{
  WorkTitle: string
  Description: string
  items: Array<Object>
}>();
</script>

<template>
  <section id="Work" class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">{{ WorkTitle }}</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">{{ Description }}</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div
          v-for="item in items"
          :key="item.id"
          class="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800/50 transition-colors"
      >
        <span :class="item.firstColor" class="text-2xl font-bold">{{ item.id }}</span>
        <h3 class="text-2xl font-semibold mt-4">
          <span :class="item.firstColor">{{ item.firstWord }}</span>
          {{ item.secondWord }}
        </h3>
        <p class="text-gray-400 mt-4">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
