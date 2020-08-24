import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import Cart from '../components/Cart/Cart'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
   {
      path: '/auth',
      name: 'Auth',
      component: Auth
   },
   {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
   },
   {
      path: '*',
      name: 'NotFound',
      component: NotFound
   },
   {
      path: '/cart',
      name: 'Cart',
      component: Cart
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

router.beforeEach( async (to, from, next) => {
   const isAuthRout = to.name && to.name.toLowerCase() === 'auth';

   if (isAuthRout) {
      next();
      return;
   }

   const isExistUserInfo = store.getters['GET_USER_INFO'];

   if (!isExistUserInfo) {
      try {
         await store.dispatch('asyncSignIn');
         next();
      } catch (error) {
         next('/auth');
      }
   }
   next();
})

export default router
