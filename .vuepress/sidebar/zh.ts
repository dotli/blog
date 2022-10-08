import { sidebar } from "vuepress-theme-hope";

export const sidebarZh = sidebar({
  "/demo/": "structure",
  "/posts/": "structure",
  // fallback
  "/": [
    "" /* / */,
    "about" /* /about.html */,
  ],
});
