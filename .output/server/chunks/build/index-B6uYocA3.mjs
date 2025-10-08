import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-Cr-QjoJk.mjs';
import feather from 'feather-icons';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'crypto';

const _sfc_main$2 = {
  props: {
    select: {
      type: String,
      default: "projects"
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Web Application",
        "Mobile Application",
        "UI/UX Design",
        "Branding & Anim"
      ]
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<select${ssrRenderAttrs(mergeProps({
    name: $props.select,
    id: $props.select,
    class: "font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  }, _attrs))}><option value class="text-sm sm:text-md">All Projects</option><!--[-->`);
  ssrRenderList($props.selectOptions, (option) => {
    _push(`<option${ssrRenderAttr("value", option)} class="sm:text-md">${ssrInterpolate(option)}</option>`);
  });
  _push(`<!--]--></select>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projects/Filter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data: () => {
    return {
      selectedProject: "",
      searchProject: "",
      projectsHeading: "Projects Portfolio",
      projectsDescription: "Some of the projects I have successfully completed",
      projects: [
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
          title: "Google Health Platform",
          category: "Web Application",
          img: "images/web-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Uber Project Management UI",
              img: "../images/ui-project-1.jpg"
            },
            {
              id: v4(),
              title: "Uber Project Management UI",
              img: "../images/web-project-1.jpg"
            },
            {
              id: v4(),
              title: "Uber Project Management UI",
              img: "../images/web-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
          title: "Phoenix Digital Agency",
          category: "Mobile Application",
          img: "images/mobile-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Phoenix Digital Agency",
              img: "../images/mobile-project-1.jpg"
            },
            {
              id: v4(),
              title: "Phoenix Digital Agency",
              img: "../images/web-project-2.jpg"
            },
            {
              id: v4(),
              title: "Phoenix Digital Agency",
              img: "../images/mobile-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
          title: "Project Management UI",
          category: "UI/UX Design",
          img: "images/ui-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Project Management UI",
              img: "../images/mobile-project-1.jpg"
            },
            {
              id: v4(),
              title: "Project Management UI",
              img: "../images/web-project-2.jpg"
            },
            {
              id: v4(),
              title: "Project Management UI",
              img: "../images/mobile-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
          title: "Cloud Storage Platform",
          category: "UI/UX Design",
          img: "images/ui-project-2.jpg",
          publishDate: "Nov 04, 2021",
          tag: "Web / Frontend",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Cloud Storage Platform",
              img: "../images/web-project-1.jpg"
            },
            {
              id: v4(),
              title: "Cloud Storage Platform",
              img: "../images/web-project-2.jpg"
            },
            {
              id: v4(),
              title: "Cloud Storage Platform",
              img: "../images/mobile-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
          title: "Uber Social App",
          category: "Mobile Application",
          img: "images/mobile-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Mobile",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Uber Social App",
              img: "../images/web-project-1.jpg"
            },
            {
              id: v4(),
              title: "Uber Social App",
              img: "../images/web-project-2.jpg"
            },
            {
              id: v4(),
              title: "Uber Social App",
              img: "../images/mobile-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        },
        {
          id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
          title: "Apple Design System",
          category: "Web Application",
          img: "images/web-project-1.jpg",
          publishDate: "Nov 04, 2021",
          tag: "UI / Mobile",
          clientTitle: "About Client",
          objectivesTitle: "Objective",
          objectivesDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
          techTitle: "Tools & Technologies",
          detailsTitle: "Challenge",
          socialTitle: "Share This",
          projectImages: [
            {
              id: v4(),
              title: "Apple Design System",
              img: "../images/web-project-1.jpg"
            },
            {
              id: v4(),
              title: "Apple Design System",
              img: "../images/web-project-2.jpg"
            },
            {
              id: v4(),
              title: "Apple Design System",
              img: "../images/mobile-project-2.jpg"
            }
          ],
          companyInfos: [
            {
              id: v4(),
              title: "Name",
              details: "Company Ltd"
            },
            {
              id: v4(),
              title: "Services",
              details: "UI Design & Frontend Development"
            },
            {
              id: v4(),
              title: "Website",
              details: "https://company.com"
            },
            {
              id: v4(),
              title: "Phone",
              details: "555 8888 888"
            }
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Nuxt.js",
            "TailwindCSS",
            "AdobeXD"
          ],
          projectDetails: [
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"
            },
            {
              id: v4(),
              details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."
            }
          ],
          socialSharings: [
            {
              id: v4(),
              name: "Twitter",
              icon: "twitter",
              url: "https://twitter.com/realstoman"
            },
            {
              id: v4(),
              name: "LinkedIn",
              icon: "linkedin",
              url: "https://linkedin.com/in/realstoman"
            },
            {
              id: v4(),
              name: "Facebook",
              icon: "facebook",
              url: "https://facebook.com"
            },
            {
              id: v4(),
              name: "Instagram",
              icon: "instagram",
              url: "https://instagram.com"
            }
          ]
        }
      ]
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    }
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.selectedProject);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    }
  },
  mounted() {
    feather.replace();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectsFilter = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10 sm:pt-20 md:pt-24" }, _attrs))}><div class="text-center"><p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">${ssrInterpolate(_ctx.projectsHeading)}</p></div><div class="mt-8 sm:mt-10"><h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"> Search projects by title or filter by category </h3><div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"><div class="flex justify-between gap-2"><span class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"><i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i></span><input${ssrRenderAttr("value", _ctx.searchProject)} class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name"></div>`);
  _push(ssrRenderComponent(_component_ProjectsFilter, {
    onChange: ($event) => _ctx.selectedProject = $event
  }, null, _parent));
  _push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"><!--[-->`);
  ssrRenderList($options.filteredProjects, (project) => {
    _push(`<div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/projects/${project.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><img${ssrRenderAttr("src", project.img)}${ssrRenderAttr("alt", project.title)} class="rounded-t-xl border-none"${_scopeId}></div><div class="text-center px-4 py-6"${_scopeId}><p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"${_scopeId}>${ssrInterpolate(project.title)}</p><span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"${_scopeId}>${ssrInterpolate(project.category)}</span></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("img", {
                src: project.img,
                alt: project.title,
                class: "rounded-t-xl border-none"
              }, null, 8, ["src", "alt"])
            ]),
            createVNode("div", { class: "text-center px-4 py-6" }, [
              createVNode("p", { class: "font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2" }, toDisplayString(project.title), 1),
              createVNode("span", { class: "font-general-medium text-lg text-ternary-dark dark:text-ternary-light" }, toDisplayString(project.category), 1)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projects/Grid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  scrollToTop: true,
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    // @todo
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectsGrid = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ProjectsGrid, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B6uYocA3.mjs.map
