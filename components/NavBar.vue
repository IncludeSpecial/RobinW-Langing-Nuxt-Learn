<script setup lang="ts">

import {Logo, navItems} from "~/data";
</script>

<template>

  <nav
      class="flex justify-between items-center py-4 px-12 sticky
      top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md">

    <a :href=Logo[0].link
       class="text-4xl font-bold text-primary">
      {{ Logo[0].name }}
    </a>

    <div class=" flex justify-end ">
      <a v-for="item in navItems"
         :href=item.link
         class="nav-link">
        {{ item.name }}
      </a>
    </div>

  </nav>
</template>

<style scoped>
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