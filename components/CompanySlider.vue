<script setup lang="ts">
import { CompanyItems } from "~/data";
import { onMounted } from 'vue';

onMounted(() => {
  const scrollContainer = document.querySelector('.scroll-container');
  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    });
  }
});
</script>

<template>
  <div class="scroll-container no-scrollbar overflow-hidden touch-manipulation overflow-x-auto overflow-y-hidden whitespace-nowrap border-gray-500 border rounded-lg">
    <div class="flex">
      <div
          v-for="item in CompanyItems"
          :key="item.id"
          class="flex justify-center items-center p-4 border border-gray-500 min-w-72 h-36"
      >
        <a :href="item.link" class="item-link">
          <Icon :name="item.logo" size="64px" />
        </a>
      </div>
    </div>
  </div>
</template>
