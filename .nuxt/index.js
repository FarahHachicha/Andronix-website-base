import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_542183ce from 'nuxt_plugin_plugin_542183ce' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_61f2b11a from 'nuxt_plugin_sentryserver_61f2b11a' // Source: ./sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_694d35eb from 'nuxt_plugin_sentryclient_694d35eb' // Source: ./sentry.client.js (mode: 'client')
import nuxt_plugin_recaptcha_aba2b4c4 from 'nuxt_plugin_recaptcha_aba2b4c4' // Source: ./recaptcha.js (mode: 'all')
import nuxt_plugin_axios_6b99f2a2 from 'nuxt_plugin_axios_6b99f2a2' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_vuescrollto_4c6a270c from 'nuxt_plugin_vuescrollto_4c6a270c' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_formulate_635682b6 from 'nuxt_plugin_formulate_635682b6' // Source: ../plugins/formulate.js (mode: 'all')
import nuxt_plugin_tippyjs_777736a0 from 'nuxt_plugin_tippyjs_777736a0' // Source: ../plugins/tippyjs.js (mode: 'all')
import nuxt_plugin_toasts_7f879495 from 'nuxt_plugin_toasts_7f879495' // Source: ../plugins/toasts.js (mode: 'all')
import nuxt_plugin_animxyz_76be71f6 from 'nuxt_plugin_animxyz_76be71f6' // Source: ../plugins/animxyz.js (mode: 'client')
import nuxt_plugin_viewer_1261dfef from 'nuxt_plugin_viewer_1261dfef' // Source: ../plugins/viewer.js (mode: 'all')
import nuxt_plugin_firebase_34d6f55a from 'nuxt_plugin_firebase_34d6f55a' // Source: ../plugins/firebase.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"script":[{"scr":"https:\u002F\u002Fcheckout.razorpay.com\u002Fv1\u002Fcheckout.js"}],"title":"Andronix App","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"hid":"author","name":"author","content":"https:\u002F\u002Fnext.andronix.app"},{"hid":"publisher","name":"publisher","content":"https:\u002F\u002Fnext.andronix.app"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Andronix App"},{"hid":"theme-color","name":"theme-color","content":"#FF8B25"},{"hid":"og:title","name":"og:title","content":"Andronix App"},{"hid":"og:description","name":"og:description","content":"Install Linux distributions like Ubuntu, Debian, Manjaro and more on your un-rooted Android device."},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Fnext.andronix.app"},{"hid":"og:image","name":"og:image","content":"Link to image in static folder"},{"hid":"og:locale","name":"og:locale","content":"en_US"},{"hid":"og:site_name","name":"og:site_name","content":"Andronix App"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"@AndronixApp"},{"hid":"twitter:creator","name":"twitter:creator","content":"@AndronixApp"},{"hid":"twitter:title","name":"twitter:title","content":"Andronix App"},{"hid":"twitter:description","name":"twitter:description","content":"Install Linux distributions like Ubuntu, Debian, Manjaro and more on your un-rooted Android device."},{"hid":"twitter:image","name":"twitter:image","content":"Link to image in static folder"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_542183ce === 'function') {
    await nuxt_plugin_plugin_542183ce(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_61f2b11a === 'function') {
    await nuxt_plugin_sentryserver_61f2b11a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_694d35eb === 'function') {
    await nuxt_plugin_sentryclient_694d35eb(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_aba2b4c4 === 'function') {
    await nuxt_plugin_recaptcha_aba2b4c4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_6b99f2a2 === 'function') {
    await nuxt_plugin_axios_6b99f2a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_4c6a270c === 'function') {
    await nuxt_plugin_vuescrollto_4c6a270c(app.context, inject)
  }

  if (typeof nuxt_plugin_formulate_635682b6 === 'function') {
    await nuxt_plugin_formulate_635682b6(app.context, inject)
  }

  if (typeof nuxt_plugin_tippyjs_777736a0 === 'function') {
    await nuxt_plugin_tippyjs_777736a0(app.context, inject)
  }

  if (typeof nuxt_plugin_toasts_7f879495 === 'function') {
    await nuxt_plugin_toasts_7f879495(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_animxyz_76be71f6 === 'function') {
    await nuxt_plugin_animxyz_76be71f6(app.context, inject)
  }

  if (typeof nuxt_plugin_viewer_1261dfef === 'function') {
    await nuxt_plugin_viewer_1261dfef(app.context, inject)
  }

  if (typeof nuxt_plugin_firebase_34d6f55a === 'function') {
    await nuxt_plugin_firebase_34d6f55a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
