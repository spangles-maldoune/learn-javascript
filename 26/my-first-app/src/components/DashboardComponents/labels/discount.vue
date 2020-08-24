<template>
   <span class="discount" :class="{'discount__active': discount_data.status}">{{discount_data.value}}</span>
</template>

<script>
export default {
   name: 'discount',
   props:['discount_data'],
   data() {
      return {

      }
   }
}

</script>

<style lang="scss">
   .discount{
      background: #BA0101;
      padding: 3px 5px;
      border: 1px solid #BA0101;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
      display: none;

      &__active{
         display: inline-block;
      }
   }

</style>