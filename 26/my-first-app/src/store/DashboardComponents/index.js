import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
   state: {
      products: []
   },
   mutations: {
      'SET_PRODUCTS_TO_STATE'(state, payload) {
         state.products = payload;
      },
      'SORT_PRODUCTS_BY_DESCENDING'(state) {
         state.products.sort((a, b) => b.price - a.price)
      },
      'SORT_PRODUCTS_BY_ASCENDING'(state) {
         state.products.sort((a, b) => a.price - b.price)
      },
      'SORT_PRODUCT_BY_RANK'(state) {
         state.products.forEach((item, index) => {
            if(item.topSale) {
               state.products.unshift(...state.products.splice(index, 1));
            }
         })
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
      },
      'DESCENDING_SORT'({commit}) {
         commit('SORT_PRODUCTS_BY_DESCENDING');
      },
      'ASCENDING_SORT'({commit}) {
         commit('SORT_PRODUCTS_BY_ASCENDING');
      },
      'TOP_SALE'({commit}) {
         commit('SORT_PRODUCT_BY_RANK');
      }
   },
   getters: {
      'GET_PRODUCTS'({products}) {
         return products;
      }
   },
   modules: {
   }
}
