<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    <a href="#content" class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
    <div class="lg:flex lg:justify-between lg:gap-4">
      <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 class="text-4xl font-bold tracking-tight text-slate-500 sm:text-5xl dark:text-primary-light">
            <a href="/">
              Justine Tekang <br> Longla 
              <small>
                (Jutel)
              </small>
            </a>
          </h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-400 sm:text-xl">
            Azure & AWS Cloud Engineer
          </h2>
          <p class="mt-4 max-w-xs leading-normal text-gray-400">
            I design and implement CI/ CD pipeline using DevOps tools
          </p>
          <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
              <li>
                <a class="group flex items-center py-3 active" href="#about">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
              </li>
              <li>
                <a class="group flex items-center py-3" href="#experience">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
              </li>
              <li>
                <a class="group flex items-center py-3" href="#certifications">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Certifications</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li class="mr-5 text-xs">
            <a class="block hover:text-slate-200 dark:text-slate-600" href="https://github.com/justine6" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
              <span class="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a class="block hover:text-slate-200 dark:text-slate-600" href="https://instagram.com/justine6" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)">
              <span class="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a class="block hover:text-slate-200 dark:text-slate-600" href="https://twitter.com/justine6" target="_blank" rel="noreferrer noopener" aria-label="Twitter (opens in a new tab)">
              <span class="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path>
              </svg>
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a class="block hover:text-slate-200 dark:text-slate-600" href="https://linkedin.com/in/longla-justine" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
              <span class="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </header>
      <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
          <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
          </div>

          <div>
            <p class="mb-4 dark:text-primary-light">
              A self-motivated Cloud Engineer offering about 7 years of experience 
              in supporting and optimizing mission critical deployments in Azure and 
              AWS. I design and implement CI/ CD pipeline using DevOps tools, provisioning, 
              and managing highly available, fault-tolerant, and scalable infrastructures, 
              utilizing terraform as IAC along with Ansible to automate configuration management.
            </p>

            <p class="mb-4 dark:text-primary-light">
              Proficient in Cloud security, migration, identity and access management, monitoring 
              and event management, governance and compliance, application de livery, data protection, 
              image, and patch management. Solid background in creating and handling containers with 
              Docker and Kubernetes.
            </p>
              
            <p class="dark:text-primary-light">
              Technical skills in writing bash and python codes. Exceptionally 
              dedicated professional with keen interpersonal, communication, and organizational skills 
              for the modern tech landscape.
            </p>
          </div>
        </section>
          
        <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
          <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
          </div>
          
          <div>
            <ol class="group/list">
              <li class="mb-12">
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="JUN 2022 – JAN 2023">
                    JUN 2022 – JAN 2023
                  </header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Cloud Engineer · <!-- --> 
                            <span class="inline-block">FANNIE MAE
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>

                        <!-- <div>
                          <div class="text-slate-500" aria-hidden="true">Senior Engineer</div>
                        </div>
                        <div>
                          <div class="text-slate-500" aria-hidden="true">Engineer</div>
                        </div> -->
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                        Implemented secure multi-account environments, automated configuration management, 
                        and CI/CD pipelines. Designed fault-tolerant Kubernetes clusters, refactored monolithic 
                        apps into microservices, and configured AWS environments. Used infrastructure-as-code, 
                        monitoring/logging solutions, and security best practices.
                    </p>
                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">AWS</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">CI/CD</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Kubernetes</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Python</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Git</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Jenkins</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Amazon S3</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="mb-12">
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Apr 2017 – Nov 2022">
                    Apr 2017 – Nov 2022
                  </header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer noopener" aria-label="UI Engineer Co-op at Apple (opens in a new tab)">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>DevOps Engineer · <!-- --> 
                            <span class="inline-block">Apple
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>

                      <div>
                        <div class="text-slate-500" aria-hidden="true">Support Technician</div>
                      </div>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Implemented comprehensive training sessions on MS Office, Linux, 
                      cloud computing, bash scripting, JSON, and YAML. Assisted customers 
                      with software-related queries and troubleshooting. Configured internet 
                      connectivity and installed operating systems and software applications. 
                      Troubleshot technical issues and provided additional services. Implemented 
                      system-level security measures and collaborated on standardized procedures.
                    </p>
                    
                    <!-- <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                        <li class="mr-4">
                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-indigo-500 focus-visible:text-indigo-500" href="https://developer.apple.com/documentation/musickitjs" target="_blank" rel="noreferrer noopener" aria-label="MusicKit.js (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>MusicKit.js</span>
                          </a>
                        </li>
                        <li class="mr-4">
                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-indigo-500 focus-visible:text-indigo-500" href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/" target="_blank" rel="noreferrer noopener" aria-label="9to5Mac (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>9to5Mac</span>
                          </a>
                        </li>
                        <li class="mr-4">
                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-indigo-500 focus-visible:text-indigo-500" href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming" target="_blank" rel="noreferrer noopener" aria-label="The Verge (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>The Verge</span>
                          </a>
                        </li>
                    </ul> -->

                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">MS Office</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Linux</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Cloud Computing</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Bash Scripting</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">JSON</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">YAML</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="mb-12">
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Apr 2014 – Nov 2017">
                    Apr 2014 – Nov 2017
                  </header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer noopener" aria-label="Developer at Scout Studio (opens in a new tab)">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Internship · JJ Tech Inc.<!-- --> 
                            <span class="inline-block">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>

                      <div>
                        <div class="text-slate-500" aria-hidden="true">Solutions Architect/DevOps</div>
                      </div>
                      <!-- <div>
                        <div class="text-slate-500" aria-hidden="true">Engineer</div>
                      </div> -->
                    </h3>
                      <p class="mt-2 text-sm leading-normal text-slate-500">
                        The code snippet describes various aspects of AWS services including Identity 
                        & Access Management, Cloud Orchestration and Automation, Networking, Governance 
                        and Compliance, and Data Protection. It mentions specific AWS services such as IAM, 
                        Terraform, CloudFormation, Ansible, VPC, CloudFront, and AWS KMS, among others.
                      </p>

                      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">AWS IAM</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Terraform</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">CloudFormation</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Ansible</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">VPC</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">CloudFront</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">AWS KMS</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">NAT</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Route 53</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">AWS CloudHSM</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">TGW</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">AWS Lambda</div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Docker</div>
                        </li>
                      </ul>
                    </div>
                  </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Sep 1992- Mar 2017">
                    Sep 1992 - Mar 2017
                  </header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://starry.com/" target="_blank" rel="noreferrer noopener" aria-label="Software Engineer Co-op at Starry (opens in a new tab)">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Natural Science Teacher  · <!-- --> 
                            <span class="inline-block">Ministry of Secondary Education
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>

                      <div>
                        <div class="text-slate-500" aria-hidden="true">
                          Curriculum Developer
                        </div>
                      </div>
                      <div>
                        <div class="text-slate-500" aria-hidden="true">
                          Environmental Consultant
                        </div>
                      </div>
                    </h3>

                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.
                    </p>
                    
                    <!-- <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                        <li class="mr-4">
                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-indigo-500 focus-visible:text-indigo-500" href="https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US" target="_blank" rel="noreferrer noopener" aria-label="Android App (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>Android App</span>
                          </a>
                        </li>
                        <li class="mr-4">
                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-indigo-500 focus-visible:text-indigo-500" href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents" target="_blank" rel="noreferrer noopener" aria-label="ScreenTime 2.0 (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>ScreenTime 2.0</span>
                          </a>
                        </li>
                    </ul> -->

                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Teaching</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Communication</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">MS Office</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Public Speaking</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">Curriculum Design</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
                
              <!-- <li class="mb-12">
                <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2015">July — Dec 2015</header>
                  <div class="z-10 sm:col-span-6">
                    <h3 class="font-medium leading-snug text-slate-200">
                      <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://us.mullenlowe.com/" target="_blank" rel="noreferrer noopener" aria-label="Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)">
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>Creative Technologist Co-op · MullenLowe 
                            <span class="inline-block">U.S.
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p class="mt-2 text-sm leading-normal">
                      Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.
                    </p>
                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">HTML</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">CSS</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">JavaScript</div>
                      </li>
                      <li class="mr-1.5 mt-2">
                        <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-indigo-500 ">jQuery</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> -->
            </ol>

            <div class="mt-12">
              <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500 font-semibold text-slate-200 group/link text-base" href="/Longla-justine-T-resume.docx" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                <span>View Full <!-- --> 
                  <span class="inline-block">Résumé
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="certifications" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected certifications">
          <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Certifications
            </h2>
          </div>
          <div>
            <ul class="group/list">
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="
https://learn.microsoft.com/api/credentials/share/en-us/FNULonglaJustineTekang-3036/A79699446CCC4193?sharingId" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>DevOps Engineer Expert . <!-- --> 
                          <span class="inline-block">Microsoft Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Configure processes and communications. Design and implement 
                      source control. Design and implement build and release pipelines. 
                      Develop a security and compliance plan. Implement an instrumentation 
                      strategy
                    </p>
                  </div>

                  <!-- <img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://learn.microsoft.com/en-us/users/fnulonglajustinetekang-3036/credentials/c36766020902a63d" target="_blank" rel="noreferrer noopener" aria-label="Spotify Profile (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Power BI Data Analyst Associate . 
                          <span class="inline-block">Microsoft Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Prepare the data. Model the data. Visualize and analyze 
                      the data. Deploy and maintain assets
                    </p>
                  </div>
                  <!-- <img alt="Spotify Profile app homepage" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://apps.hhs.texas.gov/providers/hipaa/privacy/index.cfm" target="_blank" rel="noreferrer noopener" aria-label="HIPAA Privacy Training (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>HIPAA Privacy Training . 
                          <span class="inline-block">Texas Gov<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p class="mt-2 text-sm leading-normal text-slate-500">
                    The "HIPAA Privacy Training" certificate provides comprehensive knowledge 
                    and skills in ensuring privacy and security of healthcare information.
                  </p>
                </div>
                  <!-- <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://learn.microsoft.com/en-us/users/fnulonglajustinetekang-3036/credentials/ecbbced5c3ab7bcb" target="_blank" rel="noreferrer noopener" aria-label="Microsoft Certified: Azure Administrator Associate (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Azure Administrator Associate . 
                          <span class="inline-block">Microsoft Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Manage Azure identities and governance. Implement and manage storage.
                      Deploy and manage Azure compute resources. Implement and manage virtual networking.
                      Monitor and maintain Azure resources
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/15625bfd-ae3f-4402-99bf-b3125beaf4b4/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS Certified Solutions Architect – Associate (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Solutions Architect – Associate . 
                          <span class="inline-block">AWS Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      They demonstrated the ability to build secure and robust solutions 
                      using architectural design principles based on customer requirements. 
                      Badge owners are able to strategically design well-architected distributed 
                      systems that are scalable, resilient, efficient, and fault-tolerant.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/58fce39c-5a8e-47db-9f88-2458c01ea341/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS Certified: Solutions Architect Professional (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Solutions Architect Professional . 
                          <span class="inline-block">AWS Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Earners of this certification have an extensive understanding of designing 
                      technical strategies to accomplish specific business goals. They demonstrated 
                      the ability to balance best practices and trade-offs based on business context. 
                      Badge owners are able to design solutions across multiple platforms and providers.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/64abfec9-8d74-4a59-96d1-77d989d9dad0/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS CLOUD QUEST – Cloud Practitioner (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Cloud Practitioner . 
                          <span class="inline-block">AWS CLOUD QUEST
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Earners of this badge have demonstrated basic solution building knowledge 
                      using AWS services and have a fundamental understanding of AWS Cloud concepts. 
                      Badge earners have acquired hands-on experience with compute, networking, 
                      database and security services.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/75741a02-79a9-4653-84bf-a18f969808df/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS TECHNOLOGY – Architecting (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Architecting . 
                          <span class="inline-block">AWS TECHNOLOGY
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      Earners of this badge have developed technical skills and knowledge of 
                      AWS concepts and services with a focus on designing solutions on AWS 
                      using best practices.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/fff4d190-9ed0-494a-ac5f-b4f2325695c8/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS Certified DevOps Engineer – Professional (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>DevOps Engineer – Professional . 
                          <span class="inline-block">AWS Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      They demonstrated the ability to automate resilient applications and infrastructure 
                      deployments using AWS services. Badge owners are able to enforce policies, implement 
                      automated monitoring, and configure event management of an environment.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/4c6ff07e-6757-4da9-b59e-f5c8ae4eab4d/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS Certified Cloud Practitioner (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Cloud Practitioner . 
                          <span class="inline-block">AWS Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      They demonstrated cloud fluency and foundational AWS knowledge. 
                      Badge owners are able to identify essential AWS services necessary 
                      to set up AWS-focused projects.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://www.credly.com/badges/fff4d190-9ed0-494a-ac5f-b4f2325695c8/linked_in_profile" target="_blank" rel="noreferrer noopener" aria-label="AWS Certified DevOps Engineer – Professional (opens in a new tab)">
                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>DevOps Engineer – Professional . 
                          <span class="inline-block">AWS Certified
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-500">
                      The "Azure Administrator Associate" certificate validates expertise in 
                      Microsoft Azure administration, covering essential skills for managing 
                      Azure resources and ensuring efficient cloud operations.
                    </p>
                  </div>
                <!-- <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"> -->
                </div>
              </li>
            </ul>
            
            <!-- <div class="mt-12">
              <a class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="/archive">
                <span>
                  <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project </span>
                  <span class="whitespace-nowrap">
                    <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                      <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div> -->
          </div>
        </section>
        
        <!-- <section id="writing" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
          <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writing</h2>
          </div>
          <div>
            <ul class="group/list">
              <li class="mb-12">
                <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"><div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <img alt="Telescope" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75">
                <div class="z-10 col-span-6"><p class="-mt-1 text-sm font-semibold leading-6">2020</p><h3 class="-mt-1"><a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/" target="_blank" rel="noreferrer noopener" aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"><span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Integrating Algolia Search with WordPress <span class="inline-block">Multisite<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span></a></h3></div></div>
              </li>
              
              <li class="mb-12">
                <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"><div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <img alt="Headless horseamn" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75">
                  <div class="z-10 col-span-6"><p class="-mt-1 text-sm font-semibold leading-6">2019</p><h3 class="-mt-1"><a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-indigo-500 focus-visible:text-indigo-500  group/link text-base" href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/" target="_blank" rel="noreferrer noopener" aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)"><span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Building a Headless Mobile App CMS From <span class="inline-block">Scratch<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span></a></h3></div></div>
              </li>
            </ul>
          </div>
        </section> -->
        
      </main>
      <div>
        <button class="hover:-text-indigo-500 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-indigo-500" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R4l6:" data-state="closed">
          <span class="sr-only">Click to time travel</span>
          <!-- <img alt="Spinning Tardis from Doctor Who" loading="lazy" width="100" height="86" decoding="async" data-nimg="1" style="color:transparent" srcset="/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75 2x" src="/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75"> -->
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>