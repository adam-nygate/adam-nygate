<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
        <div class="lg:col-start-2 lg:col-span-2">
          <div
            class="space-y-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-6 sm:space-y-0"
          >
            <!-- Image -->
            <div class="relative pb-2/3 sm:pt-2/3">
              <img
                class="inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                src="me.jpg"
                alt=""
              />
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-4">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h4>Adam Nygate</h4>
                  <p class="text-indigo-600">
                    Started from the button now we engineer
                  </p>
                </div>
                <div class="text-lg leading-7">
                  <p class="text-gray-500">
                    Currently building
                    <a href="https://huntr.dev">
                      huntr - the place to protect open source</a
                    >, with <a href="https://418sec.com">418sec</a>
                  </p>
                </div>
                <ul class="flex space-x-5">
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                    >
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                    >
                      <span class="sr-only">LinkedIn</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="antialiased text-gray-900">
        <div
          class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
        >
          <article>
            <h1 class="sr-only">Nuxt + Tailwind CSS Typography</h1>
            <div class="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
              <Nuxt />
            </div>
          </article>
        </div>
      </div>

      <!-- <div
        class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2
              class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
            >
              From the blog
            </h2>
            <p
              class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div
            class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
          >
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline"> Blog </a>
                  </p>
                  <a href="#" class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                    >
                      Boost your conversion rate
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline"> Roel Aufderhar </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16"> Mar 16, 2020 </time>
                      <span class="mx-1"> &middot; </span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline"> Video </a>
                  </p>
                  <a href="#" class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                    >
                      How to use search engine optimization to drive sales
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline"> Brenna Goyette </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16"> Mar 16, 2020 </time>
                      <span class="mx-1"> &middot; </span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline"> Case Study</a>
                  </p>
                  <a href="#" class="block">
                    <h3
                      class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                    >
                      Improve your customer experience
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline"> Daniela Metz </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16"> Mar 16, 2020 </time>
                      <span class="mx-1"> &middot; </span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
