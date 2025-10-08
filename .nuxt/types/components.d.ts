
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'BackToTop': typeof import("../../components/BackToTop.vue")['default']
    'HireMeModal': typeof import("../../components/HireMeModal.vue")['default']
    'AboutClientSingle': typeof import("../../components/about/AboutClientSingle.vue")['default']
    'AboutClients': typeof import("../../components/about/AboutClients.vue")['default']
    'AboutCounter': typeof import("../../components/about/AboutCounter.vue")['default']
    'AboutMe': typeof import("../../components/about/AboutMe.vue")['default']
    'ContactDetails': typeof import("../../components/contact/ContactDetails.vue")['default']
    'ContactForm': typeof import("../../components/contact/ContactForm.vue")['default']
    'ProjectsFilter': typeof import("../../components/projects/Filter.vue")['default']
    'ProjectsGrid': typeof import("../../components/projects/Grid.vue")['default']
    'ProjectsRelatedProjects': typeof import("../../components/projects/RelatedProjects.vue")['default']
    'ReusableButton': typeof import("../../components/reusable/Button.vue")['default']
    'SharedAppBanner': typeof import("../../components/shared/AppBanner.vue")['default']
    'SharedAppFooter': typeof import("../../components/shared/AppFooter.vue")['default']
    'SharedAppHeader': typeof import("../../components/shared/AppHeader.vue")['default']
    'SharedAppNavigation': typeof import("../../components/shared/AppNavigation.vue")['default']
    'SharedFooterCopyright': typeof import("../../components/shared/FooterCopyright.vue")['default']
    'NuxtWelcome': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBackToTop': LazyComponent<typeof import("../../components/BackToTop.vue")['default']>
    'LazyHireMeModal': LazyComponent<typeof import("../../components/HireMeModal.vue")['default']>
    'LazyAboutClientSingle': LazyComponent<typeof import("../../components/about/AboutClientSingle.vue")['default']>
    'LazyAboutClients': LazyComponent<typeof import("../../components/about/AboutClients.vue")['default']>
    'LazyAboutCounter': LazyComponent<typeof import("../../components/about/AboutCounter.vue")['default']>
    'LazyAboutMe': LazyComponent<typeof import("../../components/about/AboutMe.vue")['default']>
    'LazyContactDetails': LazyComponent<typeof import("../../components/contact/ContactDetails.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../../components/contact/ContactForm.vue")['default']>
    'LazyProjectsFilter': LazyComponent<typeof import("../../components/projects/Filter.vue")['default']>
    'LazyProjectsGrid': LazyComponent<typeof import("../../components/projects/Grid.vue")['default']>
    'LazyProjectsRelatedProjects': LazyComponent<typeof import("../../components/projects/RelatedProjects.vue")['default']>
    'LazyReusableButton': LazyComponent<typeof import("../../components/reusable/Button.vue")['default']>
    'LazySharedAppBanner': LazyComponent<typeof import("../../components/shared/AppBanner.vue")['default']>
    'LazySharedAppFooter': LazyComponent<typeof import("../../components/shared/AppFooter.vue")['default']>
    'LazySharedAppHeader': LazyComponent<typeof import("../../components/shared/AppHeader.vue")['default']>
    'LazySharedAppNavigation': LazyComponent<typeof import("../../components/shared/AppNavigation.vue")['default']>
    'LazySharedFooterCopyright': LazyComponent<typeof import("../../components/shared/FooterCopyright.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
