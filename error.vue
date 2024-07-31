<template>
  <div class="mt-16 max-w-md mx-auto text-center card shadow-lg rounded-lg p-8 bg-white">
    <p class="mt-7 text-7xl font-extrabold text-red-600">{{error.statusCode}}</p>
    <p class="mt-7 text-6xl text-gray-700">Ooops.</p>
    <p class="mt-7 text-gray-500">{{error.message}}</p>
    <button class="btn my-7 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out" @click="handleError">Go Home...</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.card {
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 100%);
  backdrop-filter: blur(10px);
}

.btn {
  background: linear-gradient(135deg, rgba(30,144,255,0.8) 0%, rgba(70,130,180,0.8) 100%);
}
</style>
