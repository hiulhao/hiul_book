# 项目记忆 - 个人博客 (DevLog)

## 项目概述
个人技术博客，使用 Astro SSG 方案搭建，长期维护。

## 技术栈
- Astro v4 + Tailwind CSS + TypeScript
- Markdown 内容管理（Content Collections）
- 部署目标：Vercel

## 关键设计决策
- 选择 SSG 而非全栈方案：维护成本最低，适合长期个人博客
- 内容以 Markdown 文件存储在 Git 中：可移植、可追溯
- 暗黑模式使用 CSS 变量 + class 切换，localStorage 持久化
- 收藏功能使用 localStorage：无需后端，纯客户端
- 搜索使用客户端方案：/search-index.json 接口 + 前端本地搜索（弃用 Pagefind，dev/build 均可用）
- 评论使用 Giscus：基于 GitHub Discussions，零数据库
- 分页使用 Astro paginate()，每页 5 篇，[...page].astro 动态路由
- 移动端自适应：sm 断点汉堡菜单，flex-wrap 标签，grid 响应式布局

## 用户偏好
- 视觉风格：简洁文字为主，科技感，颜色简洁
- 功能需求：标签、搜索、评论、暗黑模式、收藏、置顶
