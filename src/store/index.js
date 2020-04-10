import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

// import modules
import products from '@/store/modules/products';
import cart from '@/store/modules/cart';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state, // whole state will be stored in storage
  reducer: state => ({
    cart: state.cart
  }),
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  },
  plugins: [vuexLocalStorage.plugin]
})
