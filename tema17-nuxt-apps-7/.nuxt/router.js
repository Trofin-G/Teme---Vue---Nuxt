import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14a9a3b2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4587e6cc = () => interopDefault(import('..\\pages\\details\\_details.vue' /* webpackChunkName: "pages/details/_details" */))
const _c9b46a70 = () => interopDefault(import('..\\pages\\legal\\_legal.vue' /* webpackChunkName: "pages/legal/_legal" */))
const _9eb72598 = () => interopDefault(import('..\\pages\\search\\_search.vue' /* webpackChunkName: "pages/search/_search" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _14a9a3b2,
    name: "index"
  }, {
    path: "/details/:details?",
    component: _4587e6cc,
    name: "details-details"
  }, {
    path: "/legal/:legal?",
    component: _c9b46a70,
    name: "legal-legal"
  }, {
    path: "/search/:search?",
    component: _9eb72598,
    name: "search-search"
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
