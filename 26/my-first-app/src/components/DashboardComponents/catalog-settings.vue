<template>
   <div class="dashboard-catalog__settings">
      <div class="dashboard-catalog__settings_sort">
         <app-catalog-settings-sort
             :options="categories"
         >

         </app-catalog-settings-sort>
      </div>
   </div>
</template>

<script>
   import CatalogSettingsSort from '@/components/DashboardComponents/catalog-settings/catalog-settings-sort'
   import {mapGetters, mapActions} from 'vuex'

   export default {
      name: "catalog-settings",
      components: {
         appCatalogSettingsSort: CatalogSettingsSort
      },
      data() {
         return {
            categories: [
               {
                  name: 'Топ продаж',
                  value: 'topSale'
               },
               {
                  name: 'По цене: от дорогих к дешевым',
                  value: 'down'
               },
               {
                  name: 'По цене: от дешевых к дорогим',
                  value: 'up'
               }
            ],
            sortedProducts: []
         }
      },
      computed:{
         ...mapGetters(['GET_PRODUCTS']),
         ...mapActions(['DESCENDING_SORT'])
      },
      methods: {

      }
   }
</script>

<style lang="scss">
   .dashboard-catalog{

      &__settings{
         display: flex;

         &_sort{
            margin: 0 20px 0 auto;
         }
      }
   }

</style>