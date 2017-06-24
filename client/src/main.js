import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.config.debug = process.env.NODE_ENV !== 'production'

// Socket.io
import io from 'socket.io-client'

const socket = io(process.env.SOCKET_ENDPOINT)

Object.defineProperty(Vue.prototype, '$socket', {
  get () {
    return socket
  }
})

Vue.socket = socket

// Vuex
import VuexRouterSync from 'vuex-router-sync'
import store from './store'

// VueRouter
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.joined) && !store.state.hasJoined) {
    next({
      name: 'join.index'
    })
  } else if (to.matched.some(m => m.meta.guest) && store.state.hasJoined) {
    next({
      name: 'room.index'
    })
  } else {
    next()
  }
})

VuexRouterSync.sync(store, router)

// Styles
import './assets/sass/app.scss'

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
})
