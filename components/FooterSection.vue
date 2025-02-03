<script setup lang="ts">
import { navItems, Logo } from '~/data';
</script>

<template>
  <footer class="border-t border-gray-800 mt-32">
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-4 gap-12">
        <div>
          <a
              v-for="logo in Logo"
              :key="logo.name"
              :href="logo.link"
              class="text-2xl font-bold text-white mb-4 block"
          >
            {{ logo.name }}
          </a>
          <p class="text-gray-400">Digital Designer & Photographer</p>
        </div>

        <div v-for="(col, index) in 3" :key="index">
          <h4 class="text-white font-semibold mb-4">Column {{ index + 1 }}</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.name">
              <a :href="item.link" class="text-gray-400 hover:text-blue-400 transition-colors">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Switty. (Был взят макет тут все не правда) Я его просто сверстал</p>
      </div>
    </div>
  </footer>
</template>
