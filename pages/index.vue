<template>

  <div class=" container flex flex-col px-4 relative z-10 mx-auto text-primary gap-4 " >

        <nav-bar />
    <hero/>
    <work/>
    <philosophy/>
    <skillset/>
    <companySlider/>
    <projects/>
    <Instagram/>

  </div>
</template>

<style scoped>


</style>

<script setup lang="ts">



useSeoMeta({
      title: "Switty | Портфолио",
      description: "Добро пожаловать в портфолио Switty, где представлены мои лучшие проекты и достижения.",
    }
)

</script>
