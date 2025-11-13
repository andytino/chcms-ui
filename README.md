# 🧱 CHCMS Frontend (Nuxt 4)

Version: v1.0  
Author: Phan Viet Thang (andytino)  
Updated: 2025-11-11

---

## 🧭 Overview

This repository contains the **Nuxt 4 frontend** for the _Custom Headless CMS Ecosystem (CHCMS)_.  
It connects to the WordPress backend via REST API, using a modular SSR architecture optimized  
for landing pages, CMS dashboards, and reusable client projects.

---

## ⚙️ Tech Stack

- **Nuxt 4** with TypeScript
- **WordPress REST API**
- **Pinia** for state management
- **Axios / useFetch** for API data
- **TailwindCSS** (planned for UI)
- **GitHub Actions** for CI/CD
- **DigitalOcean / Vercel** for hosting

---

## 📁 Folder Structure (simplified)

```
frontend-nuxt/
├── pages/
├── components/
├── layouts/
├── server/
│ └── api/ (proxy to WordPress)
├── composables/
├── public/
└── nuxt.config.ts
```

---

## 🚀 Getting Started

```bash
# Clone and install dependencies
git clone git@github.com:andytino/chcms-ui.git
cd chcms-ui
npm install

# Run in dev mode
npm run dev

# Build for production
npm run build && npm run preview
```

---

## 🧩 Related Repositories

| Repository                                                             | Description                  |
| ---------------------------------------------------------------------- | ---------------------------- |
| [`chcms-wp-plugins`](https://github.com/andytino/chcms-wp-plugins.git) | WordPress REST & JWT plugins |
| [`chcms-docs`](https://github.com/andytino/chcms-docs.git)             | Documentation and workflow   |

---

> Licensed under a **Custom Proprietary License**.  
> © 2025 Phan Viet Thang (andytino). All rights reserved.
> _Maintained by Phan Viet Thang (andytino)_
