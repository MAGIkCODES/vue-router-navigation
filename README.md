# 🌐 Vue Router Navigation Guard

This project demonstrates the use of **Vue Router** in a Vue 3 app with **basic routing**, **dynamic routes**, **redirects**, and a **404 fallback route**.

---

## 📦 Features

- ✅ Home, About, and Jobs pages
- 🔍 Dynamic route with job ID
- 🔁 Redirects (e.g., `/all-jobs` redirects to `/jobs`)
- ❌ Catch-all 404 Not Found route
- 🧭 Basic Vue Router navigation setup

---

## 🗂 Route Definitions

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetailsView,
    props: true
  },
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
