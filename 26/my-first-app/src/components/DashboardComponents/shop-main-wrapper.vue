<template>
   <div class="main-wrapper">
      <shop-store
         @modalWindowAboutProduct="modalWindow"
      >

      </shop-store>
      <modal-about :item_data="product_data"></modal-about>
   </div>
</template>

<script>
   import ShopStore from './shop-store'
   import ModalAbout from './modal-about'

   export default {
      name: 'shop-main-wrapper',
      components: {
         ShopStore,
         ModalAbout
      },
      data() {
         return {
            product_data: ''
         }
      },
      methods: {
         modalWindow(product_data) {
            this.product_data = product_data;
            console.log(product_data, 'in wrapper')
         }
      }
   }
</script>

<style lang="scss">
   .main-wrapper{
      width: 1280px;
      margin: 0 auto;
      padding: 20px 0 0;
   }
</style>