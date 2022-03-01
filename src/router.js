import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import Blog from "@/views/Blog"
import Certificaciones from "@/views/Certificaciones"

Vue.use(Router)

import BlogEntries from './statics/data/blogs.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import('./views/Entradas.vue'),
    children
  }
})

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/certificaciones",
      name: "Certificaciones",
      component:  Certificaciones
    },
    ...blogRoutes
  ]
})