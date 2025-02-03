<script setup lang="ts">
defineProps<{
  icon: string
  skill: string
  description: string
}>();
</script>

<template>
  <div class="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800/50 transition-colors group">
    <Icon
        :name="icon"
        class="w-12 h-12 mb-6 text-blue-400 group-hover:text-purple-400 transition-colors"
    />
    <h3 class="text-2xl font-semibold mb-4">{{ skill }}</h3>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>
