import type { DefaultTheme } from 'vitepress'

export const sidebar: () => DefaultTheme.Sidebar = () => {
  return {
    '/docs-examples': [
      {
        text: 'Markdown Examples',
        link: '/docs-examples/markdown-examples',
      },
      {
        text: 'Runtime API Examples',
        link: '/docs-examples/api-examples',
      },
    ],
    'vitepress/': [
      {
        text: 'VitePress Init',
        link: '/vitepress/init',
      },
    ],
  }
}