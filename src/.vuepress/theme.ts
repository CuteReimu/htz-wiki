import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://cutereimu.github.io",

  author: {
    name: "奇葩の灵梦",
    url: "https://cutereimu.cn",
  },

  license: "MIT",

  favicon: "/favicon.ico",

  logo: "/logo.svg",

  repo: "CuteReimu/htz-wiki",

  docsDir: "src",

  fullscreen: true,
  darkmode: "toggle",

  print: false,

  contributors: false,
  lastUpdated: false,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  displayFooter: false,
  pageInfo: false,
  breadcrumb: false,

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    math: {
      type: "katex",
    },
    linksCheck: {
      build: "error",
    },
  },

  // 在这里配置主题提供的插件
  plugins: {
    slimsearch: {
      indexContent: true,
      locales: {
        "/": {},
      },
    },
  },
});
