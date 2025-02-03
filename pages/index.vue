<script setup lang="ts">
import {
  HeroItems,
  Works,
  CardItems,
  PhilosophyItems,
  SkillsetItems,
  CompanyItems,
  ProjectsItems,
  InstagramItems,
  TestimonialItems,
  CityItems
} from '~/data';
import TestimonialSection from "~/components/TestimonialSection.vue";
</script>

<template>
  <div class="space-y-32 pb-32">
    <HeroSection v-bind="HeroItems" />
    <WorkSection v-bind="Works" :items="CardItems" />
    <PhilosophySection v-bind="PhilosophyItems" />
    <SkillsetSection :items="SkillsetItems" />
    <CompanySection :items="CompanyItems" />
    <ProjectsSection :items="ProjectsItems" />
    <InstagramSection v-bind="InstagramItems" />
    <TestimonialSection :items="TestimonialItems" />
    <PhotographySection :cities="CityItems" />
    <ContactSection />
  </div>
</template>
