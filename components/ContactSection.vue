<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
});
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Давайте работать вместе!</h2>
      <p class="text-gray-400 mb-12">
        Есть проект на примете? Давайте создадим что-то удивительное.
      </p>

      <form class="space-y-6">
        <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full p-4 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
        >
        <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            class="w-full p-4 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
        >
        <textarea
            v-model="form.message"
            rows="5"
            placeholder="Your Message"
            class="w-full p-4 bg-gray-900 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
        ></textarea>
        <button
            type="submit"
            class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  </section>
</template>
