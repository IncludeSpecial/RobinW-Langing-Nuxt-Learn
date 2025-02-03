<script setup lang="ts">
import { SkillsetItems } from '~/data';
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Skillset</h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        With skills in over 4 different fields of design, I am the perfect person
        to hire when it comes to a full-fledged project.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCard
          v-for="(item, index) in SkillsetItems"
          :key="index"
          :icon="item.Icon"
          :skill="item.Skill"
          :description="item.Description"
      />
    </div>
  </section>
</template>
