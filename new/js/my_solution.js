Vue.component('task-manager', {
   data() {
      //модель для представления компонента
      return {
         cssClassList: ['navigation', 'header-navigation'],
         taskItems: ['Task item 1', 'Task item 2', 'Task item 3', 'Task item 4']
      }
   },
   methods: {
      //разделение состояния компонента от его поведения
      sendTask() {
         console.log('sendTask')
      }
   },
   //уникальный шаблон для визуализации компонента, использующий модель  поведение объекта
   template: `
      <ol :class="cssClassList">
         <task-list-item :taskText="item" v-for="item in taskItems"></task-list-item>
         
      </ol>
      <send-button @hello="sendTask"></send-button>
   `
});

Vue.component('task-list-item', {
   props:['taskText'],
   data() {
      return {
         
      }
   },
   methods: {
     
   },
   template: `
      <li class="task-item">{{taskText}}</li>
   `
})

Vue.component('send-button', {
   data() {
      return {
         buttonName: 'transfer'
      }
   },
   methods: {
      onClick(event) {
         this.$emit('hello');
      }
   },
   template: `
      <button @click="onClick" class="send-btn">{{buttonName}}</button>
   `
})


const vue = new Vue({
   el: '#app'
});

