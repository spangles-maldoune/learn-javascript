import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
   state: {
      cart: []
   },
   mutations: {
      'SET_CART'(state, product) {
         if(state.cart.length) {
            let isProductExist = false;
            state.cart.map(item => {
               if(item.id === product.id) {
                  isProductExist = true;
                  item.quantity++;
               }
            })
            if(!isProductExist) {
               state.cart.push(product);
            }
         } else {
            state.cart.push(product);
         }

      },
      'REMOVE_FROM_CART'(state, index) {
         state.cart.splice(index, 1);
      },
      'INCREMENT'(state, index) {
         state.cart[index].quantity++;
      },
      'DECREMENT'(state, index) {
         if(state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
         }
      }
   },
   actions: {
      'ADD_TO_CART'({commit}, product) {
         commit('SET_CART', product);
      },
      'DELETE_FROM_CART'({commit}, index) {
         commit('REMOVE_FROM_CART', index);
      },
      'INCREMENT_CART_ITEM'({commit}, index) {
         commit('INCREMENT', index);
      },
      'DECREMENT_CART_ITEM'({commit}, index) {
         commit('DECREMENT', index);
      }
   },
   getters: {
      'GET_CART' ({cart}) {
         return cart;
      }
   },
   modules: {
   }
}
