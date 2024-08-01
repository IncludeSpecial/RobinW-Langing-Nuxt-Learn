<template>
  <div class="  text-white flex items-center justify-center rounded-lg">
    <div class="p-8 gap-4 grid-cols-1 md:grid-cols-2 grid">
      <div>
        <h1 class="text-4xl font-bold mb-6">Let's get started</h1>
        <p class="mb-6 text-gray-400">Now that you know a lot about me, let me know if you are interested to work with me.</p>
      </div>

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Name</label>
          <input v-model="form.name" id="name" type="text"
                 class="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input v-model="form.email" id="email" type="email"
                 class="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg" required>
        </div>
        <div class="mb-6">
          <label for="message" class="block text-sm font-medium">Message</label>
          <textarea v-model="form.message" id="message"
                    class="mt-1 block w-full p-2.5 bg-gray-800 border border-gray-700 rounded-lg" required></textarea>
        </div>
        <Button type="submit" class="w-full py-3 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700">
          LET'S GET STARTED
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log(
          "Имя: " + this.form.name
      );
      console.log(
          "Почта: " + this.form.email
      );
      console.log(
          "Сообщение: " + this.form.message
      );
    }
  }
};
</script>

<style>
/* Add any additional styling here */
</style>
