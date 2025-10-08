<script setup>
// no special logic yet
</script>

<template>
  <div class="container mx-auto px-4">
    <!-- Banner -->
    <SharedAppBanner />

    <!-- Hero Section -->
    <section class="text-center mt-10">
      <h1 class="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 to-indigo-600 bg-clip-text text-transparent">
        Welcome to Jutellane Solutions 🚀
      </h1>
      <p class="mt-4 text-lg md:text-xl text-gray-600">
        Secure • Scalable • Cloud-Native — Built with ❤️
      </p>
    </section>

    <!-- Call to Action Buttons -->
    <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <NuxtLink
        to="/projects"
        class="px-6 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg sm:text-xl transition duration-300"
      >
        View Projects
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="px-6 py-3 rounded-lg shadow-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg sm:text-xl transition duration-300"
      >
        Contact Me
      </NuxtLink>
    </div>

    <!-- Optional ProjectsGrid -->
    <!--
    <div class="mt-14">
      <ProjectsGrid />
    </div>
    -->
  </div>
</template>

<style scoped>
/* Optional enhancements */
</style>
