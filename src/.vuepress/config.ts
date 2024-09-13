import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "毕昇AI",
  description: "毕昇AI",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
