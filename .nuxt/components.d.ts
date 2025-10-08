
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


export const BackToTop: typeof import("../components/BackToTop.vue")['default']
export const HireMeModal: typeof import("../components/HireMeModal.vue")['default']
export const AboutClientSingle: typeof import("../components/about/AboutClientSingle.vue")['default']
export const AboutClients: typeof import("../components/about/AboutClients.vue")['default']
export const AboutCounter: typeof import("../components/about/AboutCounter.vue")['default']
export const AboutMe: typeof import("../components/about/AboutMe.vue")['default']
export const ContactDetails: typeof import("../components/contact/ContactDetails.vue")['default']
export const ContactForm: typeof import("../components/contact/ContactForm.vue")['default']
export const ProjectsFilter: typeof import("../components/projects/Filter.vue")['default']
export const ProjectsGrid: typeof import("../components/projects/Grid.vue")['default']
export const ProjectsRelatedProjects: typeof import("../components/projects/RelatedProjects.vue")['default']
export const ReusableButton: typeof import("../components/reusable/Button.vue")['default']
export const SharedAppBanner: typeof import("../components/shared/AppBanner.vue")['default']
export const SharedAppFooter: typeof import("../components/shared/AppFooter.vue")['default']
export const SharedAppHeader: typeof import("../components/shared/AppHeader.vue")['default']
export const SharedAppNavigation: typeof import("../components/shared/AppNavigation.vue")['default']
export const SharedFooterCopyright: typeof import("../components/shared/FooterCopyright.vue")['default']
export const NuxtWelcome: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyBackToTop: LazyComponent<typeof import("../components/BackToTop.vue")['default']>
export const LazyHireMeModal: LazyComponent<typeof import("../components/HireMeModal.vue")['default']>
export const LazyAboutClientSingle: LazyComponent<typeof import("../components/about/AboutClientSingle.vue")['default']>
export const LazyAboutClients: LazyComponent<typeof import("../components/about/AboutClients.vue")['default']>
export const LazyAboutCounter: LazyComponent<typeof import("../components/about/AboutCounter.vue")['default']>
export const LazyAboutMe: LazyComponent<typeof import("../components/about/AboutMe.vue")['default']>
export const LazyContactDetails: LazyComponent<typeof import("../components/contact/ContactDetails.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/contact/ContactForm.vue")['default']>
export const LazyProjectsFilter: LazyComponent<typeof import("../components/projects/Filter.vue")['default']>
export const LazyProjectsGrid: LazyComponent<typeof import("../components/projects/Grid.vue")['default']>
export const LazyProjectsRelatedProjects: LazyComponent<typeof import("../components/projects/RelatedProjects.vue")['default']>
export const LazyReusableButton: LazyComponent<typeof import("../components/reusable/Button.vue")['default']>
export const LazySharedAppBanner: LazyComponent<typeof import("../components/shared/AppBanner.vue")['default']>
export const LazySharedAppFooter: LazyComponent<typeof import("../components/shared/AppFooter.vue")['default']>
export const LazySharedAppHeader: LazyComponent<typeof import("../components/shared/AppHeader.vue")['default']>
export const LazySharedAppNavigation: LazyComponent<typeof import("../components/shared/AppNavigation.vue")['default']>
export const LazySharedFooterCopyright: LazyComponent<typeof import("../components/shared/FooterCopyright.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../../../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../../../node_modules/.pnpm/nuxt@3.19.1_@parcel+watcher_b2826bf653b4ea302dcdc389c3480be6/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
