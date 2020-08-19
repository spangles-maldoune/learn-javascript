<template>
  <div class="app-shop" id="app">
     <shop-main-wrapper></shop-main-wrapper>
  </div>
</template>

<script>
   import ShopMainWrapper from './components/shop-main-wrapper'

   export default {
      name: 'app',
      components: {
         ShopMainWrapper
      }
   }
</script>

<style lang="scss">
   *{
      margin: 0;
      padding: 0;
      list-style-type: none;
   }
</style>
