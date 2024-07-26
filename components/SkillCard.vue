<script setup lang="ts">

import {SkillsetItems} from "~/data";
</script>

<template>
  <div v-for="skill in SkillsetItems" class="bg-white p-4 rounded-lg shadow-md">
    <Icon :name=skill.Icon size="36px" style="color: black"/>
    <h4 class="text-2xl text-secondary font-semibold mb-2">{{ skill.Skill }}</h4>
    <p class="text-gray-600"> {{ skill.Description }}</p>
  </div>
</template>

<style scoped>

</style>