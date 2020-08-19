import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      products: []
   },
   mutations: {
      'SET_PRODUCTS_TO_STATE'(state, payload) {
         state.products = payload;
      }
   },
   actions: {
      'RESPONSE_FROM_SERVER'({commit}) {
         return axios('http://localhost:3005/data-server', {
            method: "GET"
         })
             .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data.products);
                return products;
             })
             .catch((error) => {
                throw error;
             })
      }
   },
   getters: {
      'GET_PRODUCTS'({products}) {
         return products;
      }
   },
   modules: {
   }
})
