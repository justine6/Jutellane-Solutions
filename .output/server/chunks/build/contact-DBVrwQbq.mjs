import { _ as __nuxt_component_0$1 } from './Button-BaWErfFK.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import feather from 'feather-icons';

const _sfc_main$2 = {
  data: () => {
    return {
      // @todo
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ReusableButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-1/2" }, _attrs))}><div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"><p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"> Contact Form </p><form class="font-general-regular space-y-7"><div class=""><label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="name">Full Name</label><input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="name" name="name" type="text" required="" placeholder="Your Name" aria-label="Name"></div><div class="mt-6"><label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="email">Email</label><input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="email" name="email" type="text" required="" placeholder="Your Email" aria-label="Email"></div><div class="mt-6"><label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="subject">Subject</label><input class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="subject" name="subject" type="text" required="" placeholder="Subject" aria-label="Subject"></div><div class="mt-6"><label class="block text-lg text-primary-dark dark:text-primary-light mb-2" for="message">Message</label><textarea class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md" id="message" name="message" cols="14" rows="6" aria-label="Message"></textarea></div><div class="mt-6">`);
  _push(ssrRenderComponent(_component_ReusableButton, {
    title: "Send Message",
    class: "px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",
    type: "submit",
    "aria-label": "Send Message"
  }, null, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: ["contacts"],
  data: () => {
    return {
      // @todo
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-1/2" }, _attrs))}><div class="text-left max-w-xl px-6"><h2 class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-8 mb-8"> Contact details </h2><ul class="font-general-regular"><!--[-->`);
  ssrRenderList($props.contacts, (contact2) => {
    _push(`<li class="flex"><i${ssrRenderAttr("data-feather", contact2.icon)} class="w-5 text-gray-500 dark:text-gray-400 mr-4"></i><a href="#" class="${ssrRenderClass([
      contact2.icon === "mail" || contact2.icon === "phone" ? "hover:underline cursor-pointer" : "",
      "text-lg mb-4 text-ternary-dark dark:text-ternary-light"
    ])}" aria-label="Website and Phone">${ssrInterpolate(contact2.name)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/ContactDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  scrollToTop: true,
  colorMode: "dark",
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Your Address, Your City, Your Country",
          icon: "map-pin"
        },
        {
          id: 2,
          name: "email@domain.com",
          icon: "mail"
        },
        {
          id: 3,
          name: "555 8888 888",
          icon: "phone"
        }
      ]
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactForm = __nuxt_component_0;
  const _component_ContactDetails = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto flex flex-col-reverse md:flex-row md:py-10 md:mt-20" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactDetails, { contacts: _ctx.contacts }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-DBVrwQbq.mjs.map
