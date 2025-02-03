<script setup lang="ts">
import { navItems, Logo } from '~/data';
</script>

<template>
  <nav class="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a
          v-for="logo in Logo"
          :key="logo.name"
          :href="logo.link"
          class="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
      >
        {{ logo.name }}
      </a>

      <div class="hidden md:flex space-x-8">
        <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.link"
            class="hover:text-blue-400 transition-colors"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
