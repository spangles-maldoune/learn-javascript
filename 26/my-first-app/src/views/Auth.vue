<template>
   <div class="auth">
      <div id="auth__login">
         <app-login></app-login>
      </div>
      <div class="auth__registration-modal">
         <app-registration-modal></app-registration-modal>
      </div>
   </div>
</template>

<script>
import Login from '@/components/Login.vue';
import RegistrationModal from '../components/Registration/RegistrationModal'

   export default {
      name: 'Auth',
      components: {
         appLogin: Login,
         appRegistrationModal: RegistrationModal
      }
   }
</script>

<style lang="scss">
   .auth{
      display: flex;
      justify-content: center;
   }
</style>
