import { _ as __nuxt_component_0$2 } from './nuxt-link-Cr-QjoJk.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlotInner, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$3 } from './Button-BaWErfFK.mjs';
import feather from 'feather-icons';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { v as v4 } from '../_/v4.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'crypto';

const _sfc_main$6 = {
  props: ["isOpen", "showModal", "modal", "categories"]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$props.isOpen ? "block" : "hidden", "font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"]
  }, _attrs))}><div class="font-general-regular border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2",
    "aria-label": "Get In Touch!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get In Touch! `);
      } else {
        return [
          createTextVNode(" Get In Touch! ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppNavigation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  props: ["showModal", "modal", "categories"],
  data: () => {
    return {
      // @todo
    };
  },
  mounted() {
    feather.replace();
  },
  methods: {}
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ReusableButton = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-general-regular fixed inset-0 z-30" }, _attrs, {
    style: $props.modal ? null : { display: "none" }
  }))}><div class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20" style="${ssrRenderStyle($props.modal ? null : { display: "none" })}"></div><main class="flex flex-col items-center justify-center h-full w-full"><div class="modal-wrapper flex items-center z-30" style="${ssrRenderStyle($props.modal ? null : { display: "none" })}"><div class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"><div class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"><h5 class="text-primary-dark dark:text-primary-light text-xl"> What project are you looking for? </h5><button class="px-4 text-primary-dark dark:text-primary-light"><i data-feather="x" class="w-8 sm:w-12"></i></button></div><div class="modal-body p-5 w-full h-full"><form class="max-w-xl m-4 text-left"><div class="mt-0"><input class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="name" name="name" type="text" required="" placeholder="Name" aria-label="Name"></div><div class="mt-6"><input class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="email" name="email" type="text" required="" placeholder="Email" aria-label="Email"></div><div class="mt-6"><select class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="subject" name="subject" type="text" required="" aria-label="Project Category"><!--[-->`);
  ssrRenderList($props.categories, (category) => {
    _push(`<option${ssrRenderAttr("value", category.value)}>${ssrInterpolate(category.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="mt-6"><textarea class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="message" name="message" cols="14" rows="6" aria-label="Details" placeholder="Project description"></textarea></div><div class="mt-6 pb-4 sm:pb-1">`);
  _push(ssrRenderComponent(_component_ReusableButton, {
    title: "Send Request",
    class: "px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",
    type: "submit",
    "aria-label": "Submit Request"
  }, null, _parent));
  _push(`</div></form></div><div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">`);
  _push(ssrRenderComponent(_component_ReusableButton, {
    title: "Close",
    class: "px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",
    onClick: ($event) => $props.showModal(),
    "aria-label": "Close Hire Me Modal"
  }, null, _parent));
  _push(`</div></div></div></main></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HireMeModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = publicAssetsURL("/logo-dark.svg");
const _sfc_main$4 = {
  data: () => {
    return {
      isOpen: false,
      modal: false,
      categories: [
        {
          id: v4(),
          value: "web",
          name: "Web Application"
        },
        {
          id: v4(),
          value: "mobile",
          name: "Mobile Applicaiton"
        },
        {
          id: v4(),
          value: "ui-ux",
          name: "UI/UX Design"
        },
        {
          id: v4(),
          value: "branding",
          name: "Branding & Animations"
        }
      ]
    };
  },
  computed: {},
  methods: {
    themeSwitcher() {
      this.$colorMode.preference = this.$colorMode.value == "light" ? "dark" : "light";
    },
    showModal() {
      if (this.modal) {
        (void 0).getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        (void 0).getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
        this.modal = true;
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_SharedAppNavigation = __nuxt_component_1$1;
  const _component_HireMeModal = __nuxt_component_2$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "nav",
    class: "sm:container sm:mx-auto"
  }, _attrs))}><div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"><div class="flex justify-between items-center px-6 sm:px-0"><div>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Color Logo" class="w-36"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "Color Logo",
            class: "w-36"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="sm:hidden ml-8 bg-primary-light dark:bg-ternary-dark px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm rounded-xl cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="text-gray-200 hover:text-gray-50 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></button><div class="sm:hidden"><button type="button" class="focus:outline-none" aria-label="Hamburger Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-7 w-7 mt-1 fill-current text-secondary-dark dark:text-ternary-light">`);
  if (_ctx.isOpen) {
    _push(`<path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" clip-rule="evenodd"></path>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.isOpen) {
    _push(`<path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</svg></button></div></div>`);
  _push(ssrRenderComponent(_component_SharedAppNavigation, {
    isOpen: _ctx.isOpen,
    showModal: $options.showModal,
    modal: _ctx.modal,
    categories: _ctx.categories
  }, null, _parent));
  _push(`<div class="hidden sm:flex justify-between items-center flex-col md:flex-row"><div class="font-general-medium hidden md:block">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5",
    "aria-label": "Get In Touch!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get In Touch! `);
      } else {
        return [
          createTextVNode(" Get In Touch! ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="sm:ml-6 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="text-gray-200 hover:text-gray-50 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></button></div></div>`);
  _push(ssrRenderComponent(_component_HireMeModal, {
    showModal: $options.showModal,
    modal: _ctx.modal,
    categories: _ctx.categories,
    "aria-modal": "Hire Me Modal"
  }, null, _parent));
  _push(`</nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data: () => {
    return {
      projectName: "Nuxt.js & Tailwind CSS Portfolio",
      author: "Justine Longla"
    };
  },
  computed: {
    // ...mapState(["copyrightDate"]),
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center text-center" }, _attrs))}><div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} | Developed by <a href="linktr.ee/justinelongla" target="__blank" class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">${ssrInterpolate(_ctx.author)}</a></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/FooterCopyright.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data: () => {
    return {
      socialProfiles: [
        {
          id: v4(),
          name: "GitHub",
          icon: "github",
          url: "https://github.com/justine6"
        },
        {
          id: v4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/justine6"
        },
        {
          id: v4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://youtube.com/c/justine6"
        },
        {
          id: v4(),
          name: "Linkedin",
          icon: "linkedin",
          url: "https://linkedin.com/in/longla-justine"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedFooterCopyright = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"><div class="flex flex-col justify-center items-center mb-12 sm:mb-20"><p class="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5"> Follow me </p><ul class="flex gap-4 sm:gap-8"><!--[-->`);
  ssrRenderList(_ctx.socialProfiles, (social) => {
    _push(`<a${ssrRenderAttr("href", social.url)} target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"><i${ssrRenderAttr("data-feather", social.icon)} class="w-6 sm:w-8 h-6 sm:h-8"></i></a>`);
  });
  _push(`<!--]--></ul></div>`);
  _push(ssrRenderComponent(_component_SharedFooterCopyright, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {},
  data() {
    return {
      userScrollPosition: 0
    };
  },
  computed: {
    isScrolled() {
      return this.userScrollPosition > 100;
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.updateScrollPosition);
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.updateScrollPosition);
  },
  methods: {
    updateScrollPosition() {
      this.userScrollPosition = (void 0).scrollY;
    },
    backToTop() {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition duration-500 transform hover:scale-110 rounded-full cursor-pointer flex p-2 bg-indigo-500 hover:bg-indigo-600 text-white items-center hover:shadow-sm border-none ring-none outline-none" }, _attrs, {
    style: $options.isScrolled ? null : { display: "none" }
  }))}><i data-feather="chevron-up"></i></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data: () => {
    return {
      // Todo
    };
  },
  mounted() {
    feather.replace();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SharedAppHeader = __nuxt_component_0$1;
  const _component_SharedAppFooter = __nuxt_component_1;
  const _component_BackToTop = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col font-primary" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SharedAppHeader, null, null, _parent));
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
  _push(ssrRenderComponent(_component_SharedAppFooter, null, null, _parent));
  _push(`<div class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4">`);
  _push(ssrRenderComponent(_component_BackToTop, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CPkTB9PK.mjs.map
