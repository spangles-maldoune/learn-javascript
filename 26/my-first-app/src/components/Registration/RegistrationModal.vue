<template>
   <app-modal>
      <template v-slot:header>
         <h2>Registration</h2>
      </template>

      <template v-slot:body>
         <app-registration-content></app-registration-content>
      </template>

      <template v-slot:footer>
         <button
             type="button"
             class="btn btn-secondary"
             :data-dismiss="isClose"
             @click="onSave"
         >Save</button>
      </template>
   </app-modal>
</template>

<script>
import Modal from '@/components/general/Modal';
import RegistrationContent from './RegistrationContent';
import {mapGetters} from 'vuex';
import {clearEmpty} from '@/helpers';

export default {
      components: {
         appModal: Modal,
         appRegistrationContent: RegistrationContent
      },
      data() {
         return {
            isClose: ''
         }
      },
      computed: {
         ...mapGetters(['GET_REG_INFO']),
         isValid() {
            return (Object.keys(this.GET_REG_INFO)).length === 4;
         }
      },
      methods: {
         async onSave() {
            if(this.isValid) {
               const isSuccess = this.$store.dispatch('asyncSubmitRegistration', this.GET_REG_INFO);
               if (isSuccess) this.isClose = 'modal';
            }
         }
      }
   }
</script>

<style lang="scss">

</style>