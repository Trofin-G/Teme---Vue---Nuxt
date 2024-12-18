import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2021c6e6 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _010770b8 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _c5e903cc = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _c98d8dcc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _17e0e405 = () => interopDefault(import('..\\pages\\blog\\category\\_category.vue' /* webpackChunkName: "pages/blog/category/_category" */))
const _f6c122f6 = () => interopDefault(import('..\\pages\\blog\\search\\_search.vue' /* webpackChunkName: "pages/blog/search/_search" */))
const _0154d3b6 = () => interopDefault(import('..\\pages\\blog\\tags\\_tags.vue' /* webpackChunkName: "pages/blog/tags/_tags" */))
const _226a430d = () => interopDefault(import('..\\pages\\details\\_details.vue' /* webpackChunkName: "pages/details/_details" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2021c6e6,
    name: "about"
  }, {
    path: "/blog",
    component: _010770b8,
    name: "blog"
  }, {
    path: "/contact",
    component: _c5e903cc,
    name: "contact"
  }, {
    path: "/",
    component: _c98d8dcc,
    name: "index"
  }, {
    path: "/blog/category/:category?",
    component: _17e0e405,
    name: "blog-category-category"
  }, {
    path: "/blog/search/:search?",
    component: _f6c122f6,
    name: "blog-search-search"
  }, {
    path: "/blog/tags/:tags?",
    component: _0154d3b6,
    name: "blog-tags-tags"
  }, {
    path: "/details/:details?",
    component: _226a430d,
    name: "details-details"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
