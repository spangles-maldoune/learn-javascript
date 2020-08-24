<template>
   <ul class="products">
      <shop-store-item
         v-for="product in GET_PRODUCTS"
         :key="product.id"
         :product_data="product"
         @addToCart="addToCart"
         @showModalAbout="showModalAbout"

      >
      </shop-store-item>
   </ul>
</template>

<script>
import ShopStoreItem from './shop-store-item'
import {mapActions, mapGetters} from 'vuex'

   export default {
      name: "shop-store",
      components: {
         ShopStoreItem
      },
      computed: {
         ...mapGetters(['GET_PRODUCTS'])
      },
      methods: {
         ...mapActions(['RESPONSE_FROM_SERVER', 'ADD_TO_CART']),
         addToCart(data) {
            this.ADD_TO_CART(data);
         },
         showModalAbout(product_data) {
            this.$emit('modalWindowAboutProduct', product_data);
         }
      },
      mounted() {
         this.RESPONSE_FROM_SERVER();
      }
   }
</script>

<style lang="scss">
   .products{
      display: flex;
      flex-wrap: wrap;
   }
</style>