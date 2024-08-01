<script setup lang="ts">

import {Logo, navItems} from "~/data";

</script>

<template>

  <nav
      class="  flex justify-center md:justify-between  items-center py-4 px-12 sticky
      top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md">

    <a :href=Logo[0].link
       class="text-4xl font-bold text-primary">
      {{ Logo[0].name }}
    </a>

    <div class="  justify-end gap-4  md:flex hidden ">
      <Button variant="link" v-for="item in navItems"
         :href=item.link
      >
        {{ item.name }}
      </Button>
    </div>

  </nav>
</template>
