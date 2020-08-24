<template>
  <div class="login">
    <div class="login__inner">
      <form @submit.prevent>
        <div class="form-group">
          <label for="login">Login</label>
          <input type="text" 
                 class="form-control" 
                 id="login" 
                 aria-describedby="emailHelp"
                 v-model="credentials.login"
                 >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" 
                 class="form-control" 
                 id="password"
                 v-model="credentials.password"
                 >
        </div>
        <div class="login__buttons-group">
          <button type="submit" 
                  class="btn btn-primary" 
                  @click="onSignIn">Sign In
          </button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['asyncSignIn']), // добавление метода из store
    async onSignIn() { //действие при нажатии кнопки sign in (вызов из хранилища store экшена для отправки запроса на сервер)
      const {login, password} = this.credentials;
      try {
        const isAuthorized = await this.asyncSignIn(this.credentials);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgb(0 0 0 / 60%);
  &__inner{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__buttons-group{
    display: flex;
    justify-content: space-between;

  }

}
</style>
