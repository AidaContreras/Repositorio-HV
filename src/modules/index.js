import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import localForage from "localforage";

import products from './modules/auth'

const vuexLocal = new VuexPersistence({
  storage: localForage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products
  },
  plugins: [vuexLocal.plugin]
})