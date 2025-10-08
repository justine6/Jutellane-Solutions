// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/app.css",
    "~/assets/css/main.css"
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Longla Justine Tekang',
      meta: [
        { name: 'description', content: 'A self-motivated Cloud Engineer years of experience in supporting and optimizing mission critical deployments in Azure and AWS. I design and implement CI/ CD pipeline using DevOps tools, provisioning, and managing highly available, fault-tolerant, and scalable infrastructures, utilizing terraform as IAC along with Ansible to automate configuration management. ' }
      ],
    }
  },

  build: {
    // postcss: {
    //   postcssOptions: {
    //     plugins: {
    //       tailwindcss: {},
    //       autoprefixer: {},
    //     },
    //   },
    // },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  }
})
