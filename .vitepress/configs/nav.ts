import { DefaultTheme } from "vitepress";
import { getRecordSider } from "./sidebar";

export const nav: () => DefaultTheme.NavItem[] = () => {
  return [
    { text: "Home", link: "/" },
    { text: "Examples", link: "/docs-examples/markdown-examples" },
    {
      text: "笔记",
      // link: "/record/vitepress/init",
      items: getRecordSider(),
    },
  ];
};
