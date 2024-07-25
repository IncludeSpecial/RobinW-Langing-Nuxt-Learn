<script lang="ts" setup>

import {SkillsetBody} from "~/data";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    <div class="flex flex-col justify-start">
      <h4 class="text-2xl font-bold text-primary/70 mb-4">{{ SkillsetBody.title }}</h4>
      <p class="text-xl md:text-4xl font-bold text-gray-700">{{ SkillsetBody.description }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SkillCard/>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили можно добавить сюда */
</style>
