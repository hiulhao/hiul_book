---
title: "为什么我选择 Astro 搭建博客"
description: "对比 Next.js、Hugo、Hexo 等方案后，我选择 Astro 的理由。"
date: 2026-07-05
tags: ["Astro", "前端", "工具"]
---

在做博客选型时，我认真对比了几个主流方案。最终选了 Astro，这里说说理由。

## 先说需求

我的需求很简单：

1. **写 Markdown**，不想要后台管理
2. **加载快**，最好是纯静态
3. **维护成本低**，不想要数据库和服务器
4. **可扩展**，以后想加功能不会被框架限制

## 候选方案对比

### Hugo

Go 写的，构建速度极快。但模板语法不太友好，定制样式比较痛苦。适合"拿来就用"的人，不适合想折腾的人。

### Hexo

Node.js 生态，插件多，主题多。但架构比较老，生成的代码不够干净。性能也不如新框架。

### Next.js (SSG)

功能最强，生态最大。但对于一个博客来说太重了。React 运行时会增加不必要的 JS 体积。

### Astro

Astro 的核心理念是 **"Islands Architecture"（岛屿架构）**：默认零 JS，只在需要交互的地方加载 JS。

## Astro 的优势

### 1. 默认零 JS

Astro 默认输出纯 HTML + CSS，不加载任何 JavaScript。这意味着：

- 页面加载极快
- SEO 友好
- 用户体验好

当你需要交互时，可以使用 "Islands" 组件，按需加载 JS。

### 2. Content Collections

Astro 内置了 Content Collections，提供了类型安全的 Markdown 内容管理：

```typescript
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

写 frontmatter 时有类型检查，不用担心字段写错。

### 3. 框架无关

Astro 支持 React、Vue、Svelte、Solid 等多种框架。你可以混用，也可以只用 Astro 组件。以后想加 React 交互组件，随时可以加。

### 4. 构建快

Astro 的构建速度很快，即使有上百篇文章，也能在几秒内完成构建。

## 什么时候不选 Astro

- 需要 SSR（服务端渲染）：Next.js / SvelteKit 更合适
- 需要后台管理面板：用全栈方案
- 不想写代码：用 WordPress / Ghost

## 总结

对于个人博客这种内容为主的站点，Astro 是当前最佳选择。简单、快速、可扩展，长期维护成本极低。

> 工具是手段，不是目的。选最简单的那个就好。
