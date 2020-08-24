<template>
<div id="app">
  <keep-alive>
    <router-view/>
  </keep-alive>
</div>

  
</template>

<script>

export default {

}

</script>

<style lang="scss">
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style-type: none;
   }
   button{
      outline: none !important;
   }
   body{
      padding-right: 0 !important;
   }
</style>
