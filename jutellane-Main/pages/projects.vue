<script setup>
import { useRoute } from "vue-router";
import { useHead } from "#imports";
import { computed, onMounted } from "vue";
import feather from "feather-icons";

const route = useRoute();

// Default assets
const defaultTitle = "Jutellane Solutions";
const defaultDescription =
  "Secure • Scalable • Cloud-Native — Built with ❤️ by Jutellane Solutions";
const defaultImage = "/justine-banner.png";      // for homepage
const profileImage = "/justine-profile.jpg";     // 🔹 your smaller photo
const siteUrl = "https://jutellane-solutions.vercel.app";

// Meta values
const pageTitle = computed(() => route.meta?.title || defaultTitle);
const pageDescription = computed(() => route.meta?.description || defaultDescription);

// If homepage, show banner. Else show profile image unless page overrides.
const pageImage = computed(() => {
  if (route.path === "/") return defaultImage;
  return route.meta?.image || profileImage;
});

const pageType = computed(() => route.meta?.type || "website");

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: "description", content: pageDescription.value },

    { property: "og:title", content: pageTitle.value },
    { property: "og:description", content: pageDescription.value },
    { property: "og:image", content: pageImage.value },
    { property: "og:type", content: pageType.value },
    { property: "og:url", content: `${siteUrl}${route.fullPath}` },

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
