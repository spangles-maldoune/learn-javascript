<template>
   <li class="product-wrapper">
      <div class="product" @click="showProduct()" data-toggle="modal" data-target="#aboutModal">
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
         <img class="product-img" :src="require('../../assets/images/' + product_data.image)" alt="">
         <div class="product-content">
            <div class="content-wrapper">
               <h3 class="product-name">{{product_data.name}}</h3>
               <span class="product-price">{{product_data.price}} ₴</span>
            </div>
            <button class="product-button"
                    @click="addToCart"
            >Add to cart</button>
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
      },
      methods: {
         addToCart() {
            this.$emit('addToCart', this.product_data);
         },
         showProduct() {
            this.$emit('showModalAbout', this.product_data);
         }
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
      padding: 50px 20px 20px;
      margin: 10px;
      text-align: center;
      border-radius: 15px;

      &-img{
         max-width: 85%;
         height: 50%;
         object-fit: contain;
         margin: 0 0 30px 0;
      }

      &-name{
         margin: 0 0 10px 0;
         font-size: 16px;
      }

      &-button{
         position: absolute;
         bottom: 15px;
         left: 0;
         right: 0;
         margin: auto;
         padding: 3px 15px;
         border: 1px solid #000;
         border-radius: 16px;
      }

      &-price{
         position: absolute;
         bottom: 75px;
         left: 25px;
         font-size: 24px;
         color: #333;
      }

      &-labels {
         position: absolute;
         top: 10px;
         left: 5px;
      }

      &:hover{
         transform: scale(1.05);
         cursor: pointer;
      }
   }
</style>