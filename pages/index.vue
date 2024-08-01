<template class="">

  <div class="   bg-black flex flex-col  relative z-10 mx-auto text-primary gap-4" >

    <NavBarSection/>
    <div class="container flex flex-col gap-4">
      <HeroSection/>
      <WorkSection/>
      <PhilosophySection/>
      <SkillsetSection/>
      <CompanySection/>
      <ProjectsSection/>
      <InstagramSection/>
      <Testimonial/>
      <PhotographySection/>
      <ContactSection/>
    </div>

    <FooterSection/>

  </div>
</template>

<style scoped>


</style>

<script setup lang="ts">

import FooterSection from "~/components/FooterSection.vue";

useSeoMeta({
      title: "Switty | Портфолио",
      description: "Добро пожаловать в портфолио Switty, где представлены мои лучшие проекты и достижения.",
    }
)

</script>
