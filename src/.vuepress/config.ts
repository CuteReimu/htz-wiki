import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/htz-wiki/",

  lang: "zh-CN",
  title: "幻唐志wiki",

  theme,

  locales: {
    "/": { lang: "zh-CN" },
  },
});
