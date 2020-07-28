Vue.component('global-task-area', {
   data() {
      return {
         taskArr: ['Task item one', 'Task item two', 'Task item three', 'Task item four'],
         taskArrSecond: ['Another task item one', 'Another Task item two', 'Another Task item three', 'Another Task item four']
      }
   },
   methods: {
      onSendTransfer1() {
         const tempArrOne = this.taskArr;
         const tempArrTwo = this.taskArrSecond;
         tempArrTwo.unshift(tempArrOne.pop());
      },
      onSendTransfer2() {
         const tempArrOne = this.taskArr;
         const tempArrTwo = this.taskArrSecond;
         tempArrOne.unshift(tempArrTwo.pop());
      }
   },
   template:`
      <div>
         <task-manager @send="onSendTransfer1" :taskArr="taskArr"></task-manager>
         <task-manager @send="onSendTransfer2" :taskArr="taskArrSecond"></task-manager>
      </div>
   `
})


Vue.component('task-manager', {
   props: ['taskArr'],
   data() {
      //модель для представления компонента
      return {

      }
   },
   methods: {
      //разделение состояния компонента от его поведения
      onSendTransfer() {
         this.$emit('send');
      }
   },
   //уникальный шаблон для визуализации компонента, использующий модель и поведение объекта
   template: `
      <div class="main-header-list">
         <ol-list :taskItems="taskArr"></ol-list>
         <send-button @send="onSendTransfer"></send-button>
      </div>
   `
});

Vue.component('ol-list', {
   props: ['taskItems'],
   data() {
      return {
         
      }
   },
   methods: {

   },
   template: `
      <ol class="header-list">
         <task-list-item :taskText="item" v-for="item in taskItems"></task-list-item>
      </ol>
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
});

Vue.component('send-button', {
   data() {
      return {
         buttonName: 'transfer'
      }
   },
   methods: {
      onClick(event) {
         this.$emit('send');
      }
   },
   template: `
      <button @click="onClick" class="send-btn">{{buttonName}}</button>
   `
});


const vue = new Vue({
   el: '#app'
});
