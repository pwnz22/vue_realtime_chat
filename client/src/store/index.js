// Vuex Store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import createLogger from 'vuex/dist/logger'

const strict = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict,
  plugins: strict ? [createLogger()] : [],

})
