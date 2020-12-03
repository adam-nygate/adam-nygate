import tailwindTypography from '@tailwindcss/typography'

export default {
  // Generate
  generate: {
    dir: 'docs/',
    fallback: '404.html',
  },

  // SrcDir (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir)
  srcDir: 'src/',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nygate.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // Fixes Safari infinite hot-reload bug
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
  },

  // Content module (https://content.nuxtjs.org/configuration)
  content: {
    dir: '../content',
  },

  // TailwindCSS module (https://tailwindcss.nuxtjs.org/https://tailwindcss.nuxtjs.org/tailwind-config#config-option)
  tailwindcss: {
    config: {
      // Use the @tailwindcss/typography plugin
      plugins: [tailwindTypography],
    },
  },
}
