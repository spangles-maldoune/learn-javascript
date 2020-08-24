<template>
   <div class="registration">
         <div class="content__inner">
            <form @submit.prevent>
               <div class="form-group" 
                    v-for="(field, key) in credentials" 
                    :key="key"
               >
                  <label :for="key">{{key}}</label>
                  <input type="text" 
                         class="form-control" 
                         :id="key"
                         aria-describedby="emailHelp"
                         @input="onInput(key)"
                         v-model="credentials[key]"
                  >
               </div>
            </form>
         </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            credentials: {
               login: '',
               password: '',
               email: '',
               address: ''
            }
         }
      },
      methods: {
         onInput(key) {
            this.$store.commit('SET_REG_INFO', {
               [key]: this.credentials[key]
            });
         }
      }
}
</script>