<template>
   <header class="header">
      <div class="header__title">{{headTitle}}</div>
      <div class="header-menu__area"
           @click="toggleNav">
         <span class="burger-menu"></span>
      </div>
      <button type="button" data-toggle="modal" data-target="#signUpModal" class="header__button-cart" @click="toggleCart">Cart: {{GET_CART.length}}</button>
   </header>
</template>

<script>
   import {mapGetters} from 'vuex';

   export default {
      data() {
         return {
            headTitle: 'Online Store'
         }
      },
      methods: {
         toggleNav() {
            this.$store.commit('SET_IS_FULL', !this.GET_IS_FULL);
         },
         toggleCart() {

         }
      },
      computed: {
         ...mapGetters(['GET_IS_FULL', 'GET_CART'])
      }
   }
</script>

<style lang="scss">
   .header{
      height: 120px;
      line-height: 120px;

      &__title{
         font-size: 50px;
         color: #fff;
         text-align: center;
      }

      &__button-cart{
         position: absolute;
         top: 60px;
         right: 20px;
         width: 70px;
         height: 40px;
         line-height: 0;
         font-size: 18px;
         border: 1px solid #000;
         border-radius: 5px;
      }

      &-menu__area{
         position: relative;
         display: inline-block;
         width: 36px;
         height: 28px;
         top: -88px;
         left: 20px;
         cursor: pointer;
      }
   }

   .burger-menu{
      width: 36px;
      height: 4px;
      background: #fff;
      display: block;
      position: absolute;
      top: 12px;

      &:before{
         content: '';
         position: absolute;
         width: 36px;
         height: 4px;
         background: #fff;
         top: -11px;
      }

      &:after{
         content: '';
         position: absolute;
         width: 36px;
         height: 4px;
         background: #fff;
         bottom: -11px;
      }
   }

</style>