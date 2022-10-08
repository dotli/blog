import { hopeTheme } from "vuepress-theme-hope";
import { navbarZh } from "./navbar/index.js";
import { sidebarZh } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.dotli.cn",

  author: {
    name: "dotli",
    url: "https://dotli.github.io",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3687036_66msy64g1or.css",

  logo: "/logo.svg",

  repo: "dotli/blog",
  repoDisplay: true,

  docsDir: ".",

  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],

  copyright: false,
  footer: "Copyright © 2022-present Dotli",

  blog: {
    roundAvatar: true,
    medias: {
      Email: "mailto:dotli@qq.com",
      GitHub: "https://github.com/dotli",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbarZh,
      // sidebar
      sidebar: sidebarZh,

      displayFooter: true,

      blog: {
        description: "理无专在，而学无止境也",
        intro: "/about.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  
    activeHeaderLinks: false,

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "dotli/blog",
      repoId: "R_kgDOIHPBNA",
      category: "Announcements",
      categoryId: "DIC_kwDOIHPBNM4CRwGl",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://dotli-blog-comment.vercel.app",
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: false,
      container: true,
      demo: true,
      echarts: false,
      flowchart: false,
      gfm: false,
      imageSize: true,
      include: false,
      katex: false,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: false,
      sup: false,
      tabs: false,
      vpre: false,
      vuePlayground: false,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Dotli Blog",
            short_name: "Dotli",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
