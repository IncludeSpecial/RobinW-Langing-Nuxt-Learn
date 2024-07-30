<script setup lang="ts">

import {Logo, navItems} from "~/data";

</script>

<template>

  <nav
      class=" container flex justify-center md:justify-between  items-center py-4 px-12 sticky
      top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md">

    <a :href=Logo[0].link
       class="text-4xl font-bold text-primary">
      {{ Logo[0].name }}
    </a>

    <div class="  justify-end gap-4  md:flex hidden ">
      <a v-for="item in navItems"
         :href=item.link
         class="nav-link bg-accent p-2 rounded hover:bg-primary duration-300 hover:text-accent">
        {{ item.name }}
      </a>
    </div>

  </nav>
</template>
