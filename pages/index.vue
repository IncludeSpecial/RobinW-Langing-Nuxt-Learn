<template>

  <div class=" container flex flex-col px-4 relative z-10 mx-auto text-primary gap-4 pb-4" >

    <NavBarSection/>
    <HeroSection/>
    <WorkSection/>
    <PhilosophySection/>
    <SkillsetSection/>
    <CompanySection/>
    <ProjectsSection/>
    <InstagramSection/>
    <TestimonialSection/>
    <PhotographySection/>

  </div>
</template>

<style scoped>


</style>

<script setup lang="ts">


import PhotographySection from "~/components/PhotographySection.vue";

useSeoMeta({
      title: "Switty | Портфолио",
      description: "Добро пожаловать в портфолио Switty, где представлены мои лучшие проекты и достижения.",
    }
)

</script>
