<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 justify-between items-center ">
    <div class="text-center md:text-left md:max-w-lg">
      <p class="text-4xl font-bold mb-2">Sketch</p>
      <p class="mb-4 text-gray-400">Each sketch is made with love and care. Check out my works. Likes and comments are welcome.</p>
      <Button variant="link" size="lg"><Icon name="arcticons:linkhub" class="mr-2"/> Follow me on Dribbble</Button>
    </div>
    <NuxtImg
        src="https://cdn.dribbble.com/uploads/9254/original/75295792f94f69858e1708053300087b.png"
        height="400"
        width="600"
        class="rounded-lg shadow-lg"
    />
  </div>
</template>

<style scoped>
</style>
