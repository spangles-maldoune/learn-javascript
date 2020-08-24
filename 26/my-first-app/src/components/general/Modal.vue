<template>
   <div id="signUpModal" class="modal fade" tabindex="-1" role="dialog" ref="modal" aria-labelledby="signUpModal" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content">
            <div class="modal-header mx-auto">
               <slot name="header"></slot>
            </div>
            <div class="modal-body mx-auto">
               <slot name="body"></slot>
            </div>
            <div class="modal-footer">
               <slot name="footer"></slot>
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   },
   mounted() {

   }
   
}
</script>

<style lang="scss">
.modal-open .modal {
    overflow-y: hidden !important;
}

</style>