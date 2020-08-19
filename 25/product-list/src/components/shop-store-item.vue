<template>
   <li class="product-wrapper">
      <div class="product">
         <div class="product-labels">
            <top-sales
               :top_sale="product_data.topSale"
            >
            </top-sales>
            <discount
                :discount_data="product_data.discount"
            >
            </discount>
         </div>
         <img class="product-img" :src="require('../assets/images/' + product_data.image)" alt="">
         <div class="product-content">
            <div class="content-wrapper">
               <h3 class="product-name">{{product_data.name}}</h3>
               <span class="product-price">Price: {{product_data.price}}</span>
            </div>
            <button class="product-button">Add to cart</button>
         </div>
      </div>
   </li>
</template>

<script>
import TopSales from './labels/top-sales'
import Discount from './labels/discount'
   export default {
      name: "shop-store-item",
      props: {
         product_data: {
            type:Object,
            default() {
               return {}
            }
         }
      },
      components: {
         TopSales,
         Discount
      }
   }
</script>

<style lang="scss">
   .product-wrapper{
      width: 25%;
   }

   .product{
      display: block;
      height: 450px;
      position: relative;
      box-shadow: 0 0 8px 0 #B1B9CB;
      padding: $padding*2;
      margin: $margin;
      text-align: center;

      &-img{
         max-width: 85%;
         height: 320px;
         object-fit: contain;
         margin: 0 0 30px 0;
      }

      &-name{
         margin: 0 0 10px 0;
      }

      &-button{
         position: absolute;
         bottom: 15px;
         left: 0;
         right: 0;
         margin: auto;
      }

      &-labels {
         position: absolute;
         top: 10px;
         left: 5px;
      }
   }
</style>