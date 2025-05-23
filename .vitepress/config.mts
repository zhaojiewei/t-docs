import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 设置大纲级别
    outline: [2, 4],
  },
  cleanUrls: true,
  lastUpdated: true,
  base: '/t-docs',
  vite: {
  }
})
