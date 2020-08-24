<template>
   <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
         <div class="modal-content">
            <div class="modal-header">
               <h2 class="cart-title modal-title">{{item_data.name}}</h2>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="cart-close" aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="about-description">
                  <p class="about-description__text">{{item_data.description}}</p>
               </div>
               <div class="about-pic">
                  <img class="about-pic__image" :src="require('../../assets/images/' + item_data.image)" alt="">
               </div>

            </div>
            <div class="modal-footer">

            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "modal-about",
      props: {
         item_data: {
            type: Object,
            default() {
               return {};
            }
         }
      }
   }
</script>

<style lang="scss">
   .about-pic{

      &__image{
         max-width: 450px;
         display: block;
         margin: 0 auto;
      }
   }

</style>