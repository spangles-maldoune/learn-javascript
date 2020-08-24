import Vue from 'vue'
import Vuex from 'vuex'
import {$http} from '@/helpers';
import Registration from './Registration/index'
import DashboardComponents from './DashboardComponents/index'
import Cart from './Cart/index'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      isAuthorized: false,
      userInfo: null,
      isFull: true
   },
   mutations: {
      'SET_IS_AUTH'(state, payload) {
         state.isAuthorized = payload;
      },
      'SET_USER_INFO'(state, payload) {
         state.userInfo = payload;
      },
      'SET_IS_FULL'(state, payload) {
         state.isFull = payload;
      }
   },
   getters: {
      'GET_IS_AUTH'({ isAuthorized }) {
         return isAuthorized;
      },
      'GET_USER_INFO'({ userInfo }) {
         return userInfo;
      },
      'GET_IS_FULL'({isFull}) {
         return isFull;
      }
   },
   actions: {
      async asyncSignIn({ commit }, payload) { //запрос на сервер об авторизации после нажатия кнопки sign in
         try {
            const {data = {}} = await $http.get("http://localhost:3005/sign-in", payload); //деструктуризация объекта дата
            const isAuthorized = data.isAuthorized || false;

            commit('SET_IS_AUTH', isAuthorized);
            commit('SET_USER_INFO', data['user_info'] || null);

            return isAuthorized;
         } catch (error) {
            throw error;
         }
      }
   },
   modules: {
      Registration,
      DashboardComponents,
      Cart
   }
});
