import Vue from 'vue'
import Vuex from 'vuex'
import {$http, clearEmpty} from '@/helpers';

Vue.use(Vuex)

export default {
   state: {
      regInfo:{

      }
   },
   mutations: {
      'SET_REG_INFO'(state, payload) {
         state.regInfo = {
            ...state.regInfo,
            ...payload
         }
      }
   },
   getters: {
      'GET_REG_INFO'({regInfo}) { //{regInfo} - получение объекта из стейта с помощью деструктуризации
         return clearEmpty(regInfo);
      }
   },
   actions: {
      async asyncSubmitRegistration(context, payload) {
         try {
            return await $http.post('http://localhost:3005/new-registration', payload)
         } catch (e) {

         }
      }
   },
   modules: {

   }
};
