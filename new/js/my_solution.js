Vue.component('diagrams', {
   data() {
      return {
         diagItemObj: [
            {
               name: 'diagramRed',
               color: 'red',
               heightValue: 100
            },
            {
               name: 'diagramGreen',
               color: 'green',
               heightValue: 125
            },
            {
               name: 'diagramYellow',
               color: 'yellow',
               heightValue: 200
            },
            {
               name: 'diagramPink',
               color: 'pink',
               heightValue: 100
            },
            {
               name: 'diagramOrange',
               color: 'orange',
               heightValue: 200
            },
            {
               name: 'diagramBlue',
               color: 'blue',
               heightValue: 200
            },
            {
               name: 'diagramBlack',
               color: 'black',
               heightValue: 200
            }
         ]
      }
   },
   methods: {
      getHeightValue(heightValue, name) {
         const itemsObj = this.diagItemObj;
         const item = itemsObj.find(item => item.name === name);
         item.value = heightValue;
         console.log(item.name, 'heightValue');
      }
   },
   template:`
   <div class="global-style">
      <block-range
         :itemObject="item" 
         v-for="item in diagItemObj"
         @sendHeightValue="getHeightValue">
   
      </block-range>
   </div>
   `
});


Vue.component('block-range', {
   props:['itemObject'],
   data() {
      return {
         
      }

   },
   methods: {
      getHeightValue(heightValue, name) {
         this.$emit('sendHeightValue', heightValue, name);
      }

   },
   template: `
   <div>
      <diagram-item :objData="itemObject"></diagram-item>
      <input-item :objData="itemObject" @sendHeightValue="getHeightValue"></input-item>
   </div>
     
   `
})


Vue.component('diagram-item', {
   props: ['objData'],
   data() {
      return {
         customStyle: {
            'background-color': this.objData.color,
            'height': this.objData.heightValue + 'px',
         }

      }
   },
   methods: {

   },
   template: `
   <div class="item-style" :style="customStyle"></div>
   
   `
})


Vue.component('input-item', {
   props: ['objData'],
   data() {
      return {
         name: this.objData.name,
         type: 'range',
         value: {
            'min': 100,
            'max': 300
         },
      }
   },
   methods: {
      changeValue(event) {
         const input = event.target;
         const name = this.name;
         const presentHeightValue = this.objData.heightValue;
         this.objData.heightValue = input.value;
         // console.log(presentHeightValue, 'presentHeightValue');
         // console.log(this.objData.heightValue, 'this.objData.heightValue');
         this.$emit('sendHeightValue', presentHeightValue, name);
      }
   },
   template: `
   <input :type="type" :name="name" :min="value.min" :max="value.max" @change="changeValue">
   `
})


const vue = new Vue({
   el: '#app'
});
