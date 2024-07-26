<script lang="ts" setup>

import ExperienceCard from "~/components/ExperienceCard.vue";
import {Works} from "~/data";
</script>

<template>

  <section id="Work" class="scroll-auto">

    <h2 class="font-bold text-xl md:text-2xl text-primary/70 ">
      {{ Works.WorkTitle }}
    </h2>
    <h2 class="font-bold text-2xl md:text-6xl text-primary py-4">
      {{ Works.Description }}
    </h2>

    <div class="flex flex-col md:flex-row justify-between gap-4  ">
      <experience-card/>
    </div>
  </section>
</template>
