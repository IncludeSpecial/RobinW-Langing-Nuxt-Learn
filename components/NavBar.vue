<script setup lang="ts">

import {Logo, navItems} from "~/data";
</script>

<template>
  <!-- Navigation -->
  <nav
      class="flex justify-between items-center py-4 md:px-12 sticky top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md">
    <a class="text-4xl font-bold text-primary" :href=Logo[0].link>{{ Logo[0].name }}</a>
    <!-- Navigation Links -->
    <div v-for="item in navItems" class="hidden  justify-between md:flex gap-8 ">
      <a class="nav-link" :href=item.link>{{ item.name }}</a>
    </div>
  </nav>
</template>

<style scoped>
/* Navigation Link Style */
.nav-link {
  padding: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #181823;
  color: #F7F7F7;
  font-weight: bold;
}

</style>