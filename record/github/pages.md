# github pages

github pages 是 github 推出的免费的静态网站托管平台, 个人可以在上面发布个人博客等等. 在此记录一下再这里的使用过程笔记.

## 手动发布

### 新建仓库并新建 gh-pages 分支

[文档-创建新仓库](https://docs.github.com/zh/repositories/creating-and-managing-repositories/creating-a-new-repository)

### 选择一个分支发布资源

[文档](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
贴一张官方文档的截图
![](/public/img/github/pages-start.png)

### 手动推动到 gh-pages 分支

## 自动发布(建立工作流)

自动发布是在某种条件时触发配置好的工作流, 比如把源代码打包构建, 发布到站点

### 新建 Actions 脚本

[文档-工作流程](https://docs.github.com/zh/actions/writing-workflows/quickstart)

1. 还是到 pages 的页面, 选择 actions
   ![](/public/img/github/pages-actions-1.png)
2. 选择一个模板
   ![](/public/img/github/pages-actions-2.png)
3. 进去后参照模板注释和右边的文档, 也可以搜索相应的 action(也就是预先定义好的工作流程),有示例可以复制
   ![](/public/img/github/pages-actions-3.png)
4. 写好后保存提交
   ![](/public/img/github/pages-actions-4.png)
5. 提交后会自动执行一次, 因为在 main 分支新建的且触发条件是推送(push), 参考一下代码块

```yaml
# 流程名字
name: Deploy dist to Pages
# on: 定义触发事件
on:
  # 推送时
  push:
    # 指定main分支
    branches: ["main"]
  # To manually run a workflow, you can configure your workflow to use the workflow_dispatch event. This enables a "Run workflow" button on the Actions tab.
  # 也就是说可以手动点执行
  workflow_dispatch:
# 以下定义工作内容
jobs:
  # name (key)
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    # 定义要运行作业的计算机类型。
    runs-on: ubuntu-latest
    # 定义步骤 应该是串行
    steps:
      # 不知道干啥, 还没查
      - name: Checkout
        uses: actions/checkout@v4
      # 安装node
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20.x"
      # 安装pnpm
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
      # 项目中安装依赖
      - name: Install dependencies
        run: pnpm i
      # 执行项目构建命令
      - name: Build website
        run: pnpm docs:build
        env:
          DOC_ENV: production
          NODE_OPTIONS: --max-old-space-size=4096
      # 定义提交代码到gh-pages分支, 可以按手动提交代码来简单的理解
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          # secrets.GITHUB_TOKEN 是GitHub临时创建的token用来推送代码的
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
          publish_branch: gh-pages
          commit_message: ${{ github.event.head_commit.message }}
```

### 遇到的坑

#### `peaceiris/actions-gh-pages@v4` 一直失败

使用 `peaceiris/actions-gh-pages@v4` 需要先手动推送一遍, 一开始没注意，就是关掉原来的发布后用 actions, 奈何粗心搞了好
久才发现
