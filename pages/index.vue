<template>
  <div class="container relative z-10 text-primary p-0" style="font-family: Sen, serif;">
    <!-- Background Shape -->


    <!-- Navigation -->
    <nav class="flex justify-between items-center py-4 px-4 md:px-12 sticky top-0 z-10 bg-black/20 backdrop-blur-lg border border-gray-800 rounded-md">
      <a class="text-4xl font-bold text-primary" href="#">Robin.W</a>

      <!-- Toggle Button for Mobile -->
      <div class="md:hidden">
        <button class="text-2xl text-primary focus:outline-none">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 8a1 1 0 100 2h14a1 1 0 100-2H3zm0 6a1 1 0 100 2h14a1 1 0 100-2H3z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex gap-8 ">
        <a class="nav-link" :href="'#Experience'">Experience</a>
        <a class="nav-link" :href="'#Work'">Work</a>
        <a class="nav-link" :href="'#Photography'">Photography</a>
        <a class="nav-link" :href="'#Contact'">Contact</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section  class="hero relative flex flex-col md:flex-row justify-between items-center py-8 md:py-20 px-4 md:px-12">
      <img src="/images/human.jpg" class="w-full md:max-w-[650px] h-[auto] md:h-[750px] object-cover rounded-lg shadow-md" alt="">

      <div class="md:absolute md:right-0 md:w-[40%] md:py-32 px-4">
        <h1 class="font-bold text-4xl md:text-6xl text-primary pt-8 md:pt-0 md:pr-8">
          I’m Robin Williams. A Product Designer
          <span class="text-gray-400 block">based in Italy.</span>
        </h1>
        <p class="text-lg md:text-xl text-primary mt-4 md:mt-8 md:pr-8">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
      </div>
    </section>

    <!-- Work Section -->
    <section id="Work"  class="md:py-20 px-4 md:px-12">
        <h2 class="font-bold text-xl md:text-2xl text-primary/70 py-4">Work Experience</h2>
      <div class="w-full md:w-[70%] ml-0">
        <h2 class="font-bold text-2xl md:text-6xl text-primary py-4">Companies I have worked
          for in the past</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-between md:space-x-8 mt-8">
        <!-- Experience Cards -->
        <div class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between">
          <span class="text-5xl md:text-9xl text-gray-600">01</span>
          <p class="text-xl md:text-2xl py-2"><span class="text-green-500">Google</span>, Interaction Designer</p>
          <p class="py-2 text-sm md:text-base">I currently am the lead designer on the interaction design team for Google Play.</p>
        </div>
        <div class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between mt-6 md:mt-0">
          <span class="text-5xl md:text-9xl text-gray-500">02</span>
          <p class="text-xl md:text-2xl py-2"><span class="text-blue-500">Facebook</span>, Product Designer</p>
          <p class="py-2 text-sm md:text-base">I’ve worked on a wide variety of internal tools for Facebook over the past 6 years.</p>
        </div>
        <div class="work-card bg-accent-foreground/10 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between mt-6 md:mt-0">
          <span class="text-5xl md:text-9xl text-gray-500">03</span>
          <p class="text-xl md:text-2xl py-2"><span class="text-pink-500">Dribbble</span>, Graphic Designer</p>
          <p class="py-2 text-sm md:text-base">I started my design career with Dribbble. I was in charge of creating illustrations for the platform.</p>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 p-4">
      <div class="bg-accent-foreground/10 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-lg shadow-md">
        <h2 class="text-2xl text-primary dark:text-primary font-bold mb-4">Our Philosophy & Values</h2>
        <p class="text-accent-foreground/70">At the core of our beliefs lie aspirations for profound connections with humanity, harmony in the metaphysical realm, and deep engagement with the universe. Our guiding principles—authenticity, creativity, and hospitality—steer us towards realizing these aspirations.</p>
        <a href="#" class="mt-4 text-blue-500 hover:underline">Learn More</a>
      </div>

      <div class="bg-accent-foreground/10 dark:bg-gray-800 flex justify-center items-center object-cover rounded-lg shadow-md">
        <div class="w-full h-full flex justify-center items-center">
          <img src="/images/human_2.jpg" alt="Human" class="object-cover w-full h-64 md:h-96 rounded-lg shadow-md">
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');


/* Navigation Link Style */
.nav-link {
  padding: 8px;
  transition: all 0.3s ease;
}
.nav-link:hover {
  background-color: #181823;
  color: #F7F7F7;
  font-weight: bold;
}

/* Experience Card Style */
.work-card {
  flex: 1 1 30%;
}
</style>

<script setup lang="ts">
</script>
