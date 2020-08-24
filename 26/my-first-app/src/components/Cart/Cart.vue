<template>
   <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="cart-title modal-title">{{name}}</h2>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="cart-close" aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <p v-if="!cart_data.length" class="modal-body__title">Корзина пуста,
                  <span>Но это никогда не поздно исправить :)</span>
               </p>
               <ul class="cart-list">
                  <cart-item
                      v-for="(item, index) in cart_data"
                      :key="item.id"
                      :cart_item_data="item"
                      @deleteFromCart="deleteFromCart(index)"
                      @increment="increment(index)"
                      @decrement="decrement(index)"
                  >

                  </cart-item>
               </ul>
            </div>
            <div class="modal-footer">
               <div class="cart-total">
                  <span>Total:</span>
                  <span>{{cartTotalCost}}</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import CartItem from './CartItem'
import {mapActions} from 'vuex';

   export default {
      name: "Cart",
      props: {
         cart_data: {
            type: Array,
            default() {
               return [];
            }
         }
      },
      data() {
         return {
            name: 'Cart'
         }
      },
      components: {
         CartItem
      },
      computed: {
         cartTotalCost() {
            let result = [];

            if(this.cart_data.length) {
               this.cart_data.forEach(item => result.push(item.price * item.quantity));
               return result = result.reduce((sum, el) => sum + el);
            } else {
               return 0;
            }

         }
      },
      methods: {
         ...mapActions(['DELETE_FROM_CART','INCREMENT_CART_ITEM', 'DECREMENT_CART_ITEM']),
         deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
         },
         increment(index) {
            this.INCREMENT_CART_ITEM(index);
         },
         decrement(index) {
            this.DECREMENT_CART_ITEM(index);
         }
      }
   }
</script>

<style lang="scss">
   .cart{
      display: flex;
      flex-direction: column;
      align-items: center;

      &-title{
         color: #fff;
      }

      &-close{
         color: #fff;
      }
   }

   .close{
      opacity: .9 !important;
   }

   .modal{

      &-header{
         background: #A64B00;
      }

      &-content{
         max-width: 960px;
      }

      &-body{
         padding: 20px 70px !important;
      }
   }
</style>