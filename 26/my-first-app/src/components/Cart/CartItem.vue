<template>
   <li class="cart-item">
      <img class="cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" alt="">
      <div class="cart-item__content">
         <div class="cart-item__wrapper">
            <h3 class="cart-item__name">{{cart_item_data.name}}</h3>
            <span class="cart-item__price">Price: {{cart_item_data.price}}</span>
         </div>
      </div>
      <div class="cart-item__quantity">
         <span class="cart-item__quantity-label">Количество:</span>
         <button class="cart-item__quantity-btn" @click="decrementItem">-</button>
         {{cart_item_data.quantity}}
         <button class="cart-item__quantity-btn" @click="incrementItem">+</button>
      </div>
      <button class="cart-item__btn"
              @click="deleteFromCart"
      >
         Delete
      </button>
   </li>
</template>

<script>
   export default {
      name: "CartItem",
      props: {
         cart_item_data: {
            type: Object,
            default() {
               return {};
            }
         }
      },
      methods: {
         deleteFromCart() {
            this.$emit('deleteFromCart');
         },
         decrementItem() {
            this.$emit('decrement');
         },
         incrementItem() {
            this.$emit('increment');
         }
      },
      mounted() {
         this.$set(this.cart_item_data, 'quantity', 1)
      }
   }
</script>

<style lang="scss">
   .cart-item{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 8px 0 #B1B9CB;
      padding: 50px 20px 20px;
      margin: 0 10px 25px;
      border-radius: 15px;

      &__image{
         max-width: 100px;
      }

      &__content{
         max-width: 120px;
      }

      &__name{
         font-size: 16px;
      }

      &__quantity{
         font-size: 18px;

         &-label{
            margin: 0 10px 0 0;
            font-size: 16px;
         }

         &-btn{
            cursor: pointer;
            border: none;
            background: transparent;
            font-size: 20px;
         }
      }

      &__btn{
         border: 1px solid #000;
         border-radius: 5px;
         padding: 3px 8px;
      }
   }

</style>