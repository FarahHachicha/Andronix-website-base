import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5694844a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _06016e1d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6ae01414 = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _642e7dba = () => interopDefault(import('../pages/policies.vue' /* webpackChunkName: "pages/policies" */))
const _6070a6c3 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _10795855 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _51413732 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _10693200 = () => interopDefault(import('../pages/legal/privacy-policy.vue' /* webpackChunkName: "pages/legal/privacy-policy" */))
const _3e91e24e = () => interopDefault(import('../pages/legal/refund-policy.vue' /* webpackChunkName: "pages/legal/refund-policy" */))
const _a09e3c32 = () => interopDefault(import('../pages/legal/terms-conditions.vue' /* webpackChunkName: "pages/legal/terms-conditions" */))
const _758d6910 = () => interopDefault(import('../pages/products/commands.vue' /* webpackChunkName: "pages/products/commands" */))
const _c77393d0 = () => interopDefault(import('../pages/products/modded-os.vue' /* webpackChunkName: "pages/products/modded-os" */))
const _6810e102 = () => interopDefault(import('../pages/products/premium.vue' /* webpackChunkName: "pages/products/premium" */))
const _5052fedc = () => interopDefault(import('../pages/tutorials/termux.vue' /* webpackChunkName: "pages/tutorials/termux" */))
const _59014190 = () => interopDefault(import('../pages/user/profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _0a90e50b = () => interopDefault(import('../pages/checkout/buy/_product_id.vue' /* webpackChunkName: "pages/checkout/buy/_product_id" */))
const _45d82d89 = () => interopDefault(import('../pages/checkout/success/_order_id.vue' /* webpackChunkName: "pages/checkout/success/_order_id" */))
const _34bad424 = () => interopDefault(import('../pages/checkout/failure/_reason/_order_id.vue' /* webpackChunkName: "pages/checkout/failure/_reason/_order_id" */))
const _764c5f0f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5694844a,
    name: "about"
  }, {
    path: "/contact",
    component: _06016e1d,
    name: "contact"
  }, {
    path: "/help",
    component: _6ae01414,
    name: "help"
  }, {
    path: "/policies",
    component: _642e7dba,
    name: "policies"
  }, {
    path: "/pricing",
    component: _6070a6c3,
    name: "pricing"
  }, {
    path: "/auth/login",
    component: _10795855,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _51413732,
    name: "auth-register"
  }, {
    path: "/legal/privacy-policy",
    component: _10693200,
    name: "legal-privacy-policy"
  }, {
    path: "/legal/refund-policy",
    component: _3e91e24e,
    name: "legal-refund-policy"
  }, {
    path: "/legal/terms-conditions",
    component: _a09e3c32,
    name: "legal-terms-conditions"
  }, {
    path: "/products/commands",
    component: _758d6910,
    name: "products-commands"
  }, {
    path: "/products/modded-os",
    component: _c77393d0,
    name: "products-modded-os"
  }, {
    path: "/products/premium",
    component: _6810e102,
    name: "products-premium"
  }, {
    path: "/tutorials/termux",
    component: _5052fedc,
    name: "tutorials-termux"
  }, {
    path: "/user/profile",
    component: _59014190,
    name: "user-profile"
  }, {
    path: "/checkout/buy/:product_id?",
    component: _0a90e50b,
    name: "checkout-buy-product_id"
  }, {
    path: "/checkout/success/:order_id?",
    component: _45d82d89,
    name: "checkout-success-order_id"
  }, {
    path: "/checkout/failure/:reason?/:order_id?",
    component: _34bad424,
    name: "checkout-failure-reason-order_id"
  }, {
    path: "/",
    component: _764c5f0f,
    name: "index"
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
