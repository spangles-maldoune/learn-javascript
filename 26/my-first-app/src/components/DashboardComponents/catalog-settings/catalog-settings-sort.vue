<template>
   <select class="custom-select" @change="selectOption" v-model="value">
      <option value="" disabled hidden>Сортировать по:</option>
      <option class="sort-option" v-for="option in options" :value="option.value">
         {{option.name}}
      </option>
   </select>
</template>

<script>
   import {mapActions} from 'vuex'

   export default {
      name: "catalog-settings-sort",
      props: {
         options: {
            type: Array,
            default() {
               return []
            }
         },
         selected: {
            type: String,
            default: ''
         }
      },
      data() {
         return {
            value: ''
         }
      },
      methods: {
         ...mapActions(['DESCENDING_SORT', 'ASCENDING_SORT', 'TOP_SALE']),
         selectOption(event) {
            if(this.value === 'down') {
               this.DESCENDING_SORT();
            } else if(this.value === 'up') {
               this.ASCENDING_SORT();
            } else if(this.value === 'topSale') {
               this.TOP_SALE();
            }
         }
      }
   }
</script>

<style lang="scss">
   .custom-select{
      font-size: 14px !important;
   }

</style>