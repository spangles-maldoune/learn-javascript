<template>
   <div class="main-wrapper">
      <shop-store></shop-store>
   </div>
</template>

<script>
import ShopStore from './shop-store'
   export default {
      name: 'shop-main-wrapper',
      components: {
         ShopStore
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