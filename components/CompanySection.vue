<script setup lang="ts">
defineProps<{
  items: Array<{
    logo: string
    link: string
  }>
}>();
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="border-t border-gray-800 py-16">
      <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8">
        <a
            v-for="(item, index) in items"
            :key="index"
            :href="item.link"
            class="flex items-center justify-center grayscale hover:grayscale-0 transition-all"
        >
          <Icon
              :name="item.logo"
              class="w-12 h-12 text-gray-400 hover:text-white transition-colors"
          />
        </a>
      </div>
    </div>
  </section>
</template>
