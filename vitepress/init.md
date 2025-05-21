---
lastUpdated: false
---

# VitePress 使用步骤

## package 初始化

1. `pnpm init`
2. `pnpm add vitepress -D`

## 初始化 vitepress

1. `pnpm vitepress init`
2. 选默认, 路径使用 `./`

## 启动项目

`pnpm run docs:dev`

## 打包项目

`pnpm run docs:build`

## 将当前文档文档配置到项目中

为方便后续添加更多的内容将 nav 单独出去

1. 在 `.vitepress` 新建 `configs/index.ts` (不能使用 `config` 因为这是 `vitepress` 配置文件路径) [文档](https://vitepress.dev/zh/reference/site-config#config-resolution)
2. 在 `.vitepress` 新建 `configs/nav.ts`
3. 写入

```ts
import { DefaultTheme } from "vitepress";

export const nav: () => DefaultTheme.NavItem[] = () => {
  return [
    { text: "Home", link: "/" },
    { text: "Examples", link: "/markdown-examples" },
    { text: "VitePress", link: "vitepress/init" },
  ];
};
```

4. 在 `.vitepress/config.ts` 引入 `nav`
5. 将 vitepress 的实例文档 移动到 'docs-examples'
6. 配置 `sidebar`, 更改以下sidebar 为对象形式, 配置不同菜单不同侧边栏 [文档](https://vitepress.dev/zh/reference/default-theme-sidebar#multiple-sidebars)

```ts 
import type { DefaultTheme } from "vitepress";

export const sidebar: () => DefaultTheme.Sidebar = () => {
  return {
    "/docs-examples": [
      {
        text: "Markdown Examples",
        link: "/docs-examples/markdown-examples",
      },
      {
        text: "Runtime API Examples",
        link: "/docs-examples/api-examples",
      },
    ],
    "vitepress/": [
      {
        text: "VitePress Init",
        link: "/vitepress/init",
      },
    ],
  };
};
```
