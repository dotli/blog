import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Dotli",
      description: "Dotli's personal blog",
    },
  },

  pagePatterns: ['**/*.md', '!**/_*.md', '!.vuepress', '!node_modules'],

  // permalinkPattern: ":year/:month/:day/:slug.html",

  theme,

  shouldPrefetch: false,

  port: 8081
});
