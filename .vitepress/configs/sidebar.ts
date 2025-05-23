import type { DefaultTheme } from 'vitepress'

export const getRecordSider = () => {
  return  [
    {
      text: 'vitepress',
      items: [
        {
          text: 'VitePress Init',
          link: '/record/vitepress/init',
        }
      ]
    },
    {
      text: 'github',
      items: [
        {
        text: 'Page Init',
        link: '/record/github/pages',
      },
      ]
    }
  ]
}

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

    '/record/': getRecordSider(),
  }
}