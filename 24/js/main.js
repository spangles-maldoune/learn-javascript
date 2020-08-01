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
               heightValue: 100
            },
            {
               name: 'diagramYellow',
               color: 'yellow',
               heightValue: 100
            },
            {
               name: 'diagramPink',
               color: 'pink',
               heightValue: 100
            },
            {
               name: 'diagramOrange',
               color: 'orange',
               heightValue: 100
            },
            {
               name: 'diagramBlue',
               color: 'blue',
               heightValue: 100
            },
            {
               name: 'diagramBlack',
               color: 'black',
               heightValue: 100
            }
         ]
      }
   },
   methods: {
      getHeightValue(heightValue, name) {
         const itemsObj = this.diagItemObj;
         const item = itemsObj.find(item => item.name === name);
         item.heightValue = heightValue;
         this.setObjInStorage();
         this.setLocalDiagram(item.name, heightValue)
      },
      setLocalDiagram(key, heightValue) {
         localStorage[key] = heightValue;
      },
      sortByHeight() {
         this.diagItemObj.sort((a, b) => { return a.heightValue - b.heightValue });
         this.setObjInStorage();
      },
      setObjInStorage() {
         localStorage.sortByHeight = JSON.stringify(this.diagItemObj);
      }
   },
   mounted () {
      this.diagItemObj.forEach((value) => {
         if (localStorage[value.name]) {
            value.heightValue = localStorage[value.name];
         }
      });
      if (localStorage.sortByHeight) {
         this.diagItemObj = JSON.parse(localStorage.sortByHeight);
      }
   },
   template:`
      <div class="global-style">
         <block-range
            :itemObject="item" 
            v-for="(item, index) in diagItemObj"
            :key="item.name"
            @sendHeightValue="getHeightValue"
         >{{index}} {{item.name}}</block-range>
         <sort-btn @sendSort="sortByHeight"></sort-btn>
      </div>
   `
});


Vue.component('block-range', {
   props: ['itemObject'],
   methods: {
      getHeightValue(inputHeightValue, name) {
         this.$emit('sendHeightValue', inputHeightValue, name);
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
   computed: {
      bgColor: function () {
         return this.objData.color;
      },
      heightVal: function () {
         return this.objData.heightValue +'px';
      }
   },
   template: `
      <div class="item-style" :style="{backgroundColor: bgColor, height: heightVal}"></div>
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
         }
      }
   },
   methods: {
      changeValue(event) {
         const input = event.target;
         const name = this.name;
         const presentHeightValue = input.value;
         this.$emit('sendHeightValue', presentHeightValue, name);
      }
   },
   template: `
      <input 
         :type="type" 
         :name="name" 
         :min="value.min" 
         :max="value.max" 
         @change="changeValue">
   `
})

Vue.component ('sort-btn', {
   data () {
      return {
         btnName: 'sort ascending'

      }
   },
   methods: {
      sortOnClick () {
         this.$emit('sendSort');
      }
   },
   template: `
      <button @click="sortOnClick">{{btnName}}</button>
   `
})

const vue = new Vue({
   el: '#app'
});
