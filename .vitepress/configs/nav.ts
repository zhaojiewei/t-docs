
import { DefaultTheme } from "vitepress";

export const nav: ()=> DefaultTheme.NavItem[] = () => {
  return [
    { text: 'Home', link: '/' },
    { text: 'Examples', link: '/docs-examples/markdown-examples' },
    { text: 'VitePress', link: '/vitepress/init' },
  ]
}