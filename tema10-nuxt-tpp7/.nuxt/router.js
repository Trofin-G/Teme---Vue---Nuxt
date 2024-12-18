import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _690199a8 = () => interopDefault(import('..\\pages\\contracts\\index.vue' /* webpackChunkName: "pages/contracts/index" */))
const _7fd11e8a = () => interopDefault(import('..\\pages\\create-contract\\index.vue' /* webpackChunkName: "pages/create-contract/index" */))
const _0d099e51 = () => interopDefault(import('..\\pages\\create-message\\index.vue' /* webpackChunkName: "pages/create-message/index" */))
const _5483f9c7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _9fbf2f8c = () => interopDefault(import('..\\pages\\details\\_details.vue' /* webpackChunkName: "pages/details/_details" */))
const _6ba99e58 = () => interopDefault(import('..\\pages\\search\\_search.vue' /* webpackChunkName: "pages/search/_search" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contracts",
    component: _690199a8,
    name: "contracts"
  }, {
    path: "/create-contract",
    component: _7fd11e8a,
    name: "create-contract"
  }, {
    path: "/create-message",
    component: _0d099e51,
    name: "create-message"
  }, {
    path: "/",
    component: _5483f9c7,
    name: "index"
  }, {
    path: "/details/:details?",
    component: _9fbf2f8c,
    name: "details-details"
  }, {
    path: "/search/:search?",
    component: _6ba99e58,
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
