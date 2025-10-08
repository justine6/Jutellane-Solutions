import feather from 'feather-icons';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { v as v4 } from '../_/v4.mjs';
import 'crypto';

const _sfc_main = {
  scrollToTop: true,
  data: () => {
    return {
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
    project() {
      return this.projects.find((project) => this.$route.params.id == project.id);
    }
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectRelatedProjects = resolveComponent("ProjectRelatedProjects");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}>`);
  if ($options.project) {
    _push(`<div><div><p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">${ssrInterpolate($options.project.title)}</p><div class="flex"><div class="flex items-center mr-10"><i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i><span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate($options.project.publishDate)}</span></div><div class="flex items-center"><i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i><span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">${ssrInterpolate($options.project.tag)}</span></div></div></div><div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"><!--[-->`);
    ssrRenderList($options.project.projectImages, (projectImage) => {
      _push(`<div class="mb-10 sm:mb-0"><img${ssrRenderAttr("src", projectImage.img)} class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"></div>`);
    });
    _push(`<!--]--></div><div class="block sm:flex gap-0 sm:gap-10 mt-14"><div class="w-full sm:w-1/3 text-left"><div class="mb-7"><p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">${ssrInterpolate($options.project.clientTitle)}</p><ul class="leading-loose"><!--[-->`);
    ssrRenderList($options.project.companyInfos, (info) => {
      _push(`<li class="font-general-regular text-ternary-dark dark:text-ternary-light"><span>${ssrInterpolate(info.title)}: </span><a href="#" class="${ssrRenderClass(
        info.title == "Website" || info.title == "Phone" ? "hover:underline cursor-pointer" : ""
      )}" aria-label="Project website and phone">${ssrInterpolate(info.details)}</a></li>`);
    });
    _push(`<!--]--></ul></div><div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate($options.project.objectivesTitle)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate($options.project.objectivesDetails)}</p></div><div class="mb-7"><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate($options.project.techTitle)}</p><p class="font-general-regular text-primary-dark dark:text-ternary-light">${ssrInterpolate($options.project.technologies.join(", "))}</p></div><div><p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">${ssrInterpolate($options.project.socialTitle)}</p><div class="flex items-center gap-3 mt-5"><!--[-->`);
    ssrRenderList($options.project.socialSharings, (social) => {
      _push(`<a${ssrRenderAttr("href", social.url)} target="__blank" aria-label="Share Project" class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i${ssrRenderAttr("data-feather", social.icon)} class="w-4 lg:w-5 h-4 lg:h-5"></i></a>`);
    });
    _push(`<!--]--></div></div></div><div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0"><p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">${ssrInterpolate($options.project.detailsTitle)}</p><!--[-->`);
    ssrRenderList($options.project.projectDetails, (projectDetail) => {
      _push(`<p class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">${ssrInterpolate(projectDetail.details)}</p>`);
    });
    _push(`<!--]--></div></div>`);
    _push(ssrRenderComponent(_component_ProjectRelatedProjects, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="font-general-medium container mx-auto text-center"><h1>No projects yet</h1></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Cb4G-meJ.mjs.map
