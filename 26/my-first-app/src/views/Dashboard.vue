<template>
   <div class="dashboard">

      <div class="dashboard__header">
         <app-header></app-header>
      </div>

      <app-catalog-settings></app-catalog-settings>

      <div class="dashboard__content" :class="{'dashboard__full-width': $store.getters.GET_IS_FULL}">
         <div class="dashboard__navigation"></div>
         <div class="dashboard__products-content">
            <shop-main-wrapper></shop-main-wrapper>
         </div>
      </div>

      <div class="dashboard__cart">
         <app-cart :cart_data="GET_CART"></app-cart>
      </div>

   </div>
</template>

<script>
   import Header from '@/components/static/Header'
   import CatalogSettings from '@/components/DashboardComponents/catalog-settings'
   import ShopMainWrapper from '@/components/DashboardComponents/shop-main-wrapper'
   import Cart from '@/components/Cart/Cart'
   import {mapGetters} from 'vuex'

   export default {
      name: 'Dashboard',
      components: {
         ShopMainWrapper,
         appHeader: Header,
         appCatalogSettings: CatalogSettings,
         appShopMainWrapper: ShopMainWrapper,
         appCart: Cart
      },
      computed: {
         ...mapGetters(['GET_CART'])
      }
   }
</script>

<style lang="scss">
   .dashboard{

      &__header{
         background: #A64B00;
         margin: 0 0 20px 0;
      }
      &__content{
         position: relative;
      }

      &__navigation{
         position: absolute;
         top: 10px;
         left: 0;
         border: 3px solid blue;
         height: 100%;
         width: 30%;
         transition: .5s;
      }

      &__products-content{
         height: 100%;
         transition: .5s;
      }

      &__full-width &__navigation{
         left: -30%;
      }

      &__full-width &__products-content{
         margin-left: 0;
      }
   }
</style>
