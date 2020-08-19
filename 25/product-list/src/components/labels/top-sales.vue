<template>
   <span class="top-sales" :class="{'top-sales__active': top_sale}">{{labelText}}</span>
</template>

<script>
   export default {
      name: 'top-sales',
      props:['top_sale'],
      data() {
         return {
            labelText: 'Топ продаж'
         }
      }
   }
</script>

<style lang="scss">
   .top-sales{
      background: #f68741;
      border: 1px solid #f68741;
      color: #fff;
      border-radius: 15px;
      padding: 4px 13px;
      font-size: 16px;
      margin: 0 10px 0 0;
      display: none;

      &__active{
         display: inline-block;
      }
   }
</style>