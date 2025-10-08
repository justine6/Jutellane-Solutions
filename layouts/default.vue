<script setup>
import { useRoute } from "vue-router";
import { useHead } from "#imports";
import { computed, onMounted } from "vue";
import feather from "feather-icons";

const route = useRoute();

// Defaults (fallbacks if not set in definePageMeta)
const defaultTitle = "Jutellane Solutions";
const defaultDescription =
  "Secure • Scalable • Cloud-Native — Built with ❤️ by Jutellane Solutions";
const defaultImage = "/justine-banner.png";
const siteUrl = "https://jutellane-solutions.vercel.app"; // 🔹 replace with your live domain

// Pull values from meta
const pageTitle = computed(() => route.meta?.title || defaultTitle);
const pageDescription = computed(() => route.meta?.description || defaultDescription);
const pageImage = computed(() => route.meta?.image || defaultImage);
const pageType = computed(() => route.meta?.type || "website");

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value },

    // Open Graph (Facebook/LinkedIn)
    { property: "og:title", content: pageTitle.value },
    { property: "og:description", content: pageDescription.value },
    { property: "og:image", content: pageImage.value },
    { property: "og:type", content: pageType.value },
    { property: "og:url", content: `${siteUrl}${route.fullPath}` },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle.value },
    { name: "twitter:description", content: pageDescription.value },
    { name: "twitter:image", content: pageImage.value }
  ],
  link: [
    { rel: "canonical", href: `${siteUrl}${route.fullPath}` }
  ]
}));

onMounted(() => {
  feather.replace();
});
</script>


<template>
  <div class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col font-primary">
    <!-- Sticky Header -->
    <header class="sticky top-0 z-50 bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Brand -->
        <h1 class="text-xl font-bold text-white tracking-wide">
          Jutellane Solutions
        </h1>
        <!-- Nav -->
        <nav class="space-x-6">
          <NuxtLink to="/" class="text-white hover:text-yellow-300">Home</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-yellow-300">About</NuxtLink>
          <NuxtLink to="/projects" class="text-white hover:text-yellow-300">Projects</NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-yellow-300">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Hero Section (Homepage only) -->
    <section
      v-if="route.path === '/'"
      class="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center shadow-md"
      style="background-image: url('/justine-banner.png');"
    >
      <div class="bg-black/50 p-6 rounded-xl text-center">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white">Welcome to Jutellane Solutions 🚀</h2>
        <p class="mt-4 text-lg md:text-xl text-gray-200">
          Secure • Scalable • Cloud-Native — Built with ❤️
        </p>
      </div>
    </section>

    <!-- Dynamic Page Banner -->
    <section
      v-else-if="route.meta?.title"
      class="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-12 text-center shadow-md"
    >
      <h2 class="text-2xl md:text-4xl font-bold">
        {{ route.meta.title }}
      </h2>
    </section>

    <!-- Page Content -->
    <transition name="fade" mode="out-in">
      <slot />
    </transition>

    <!-- Footer -->
    <SharedAppFooter />

    <!-- Back-to-top button -->
    <div
      class="fixed bottom-0 right-0 mb-6 mr-8 flex items-center space-x-2 sm:space-x-4 z-50"
    >
      <button class="vue-back-to-top">
        ↑
      </button>
    </div>
  </div>
</template>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

/* Page transition fade */
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.4s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
