Vue.component('task-manager', {
   data() {
      //модель для представления компонента
      return {
         cssClassList: ['main-header-list'],
         taskArr: ['Task item one', 'Task item two', 'Task item three', 'Task item four']
      }
   },
   methods: {
      //разделение состояния компонента от его поведения
      onSendTransfer() {
         console.log(this.taskArr);
      }

   },
   //уникальный шаблон для визуализации компонента, использующий модель и поведение объекта
   template: `
      <div :class="cssClassList">
         <ol-list :taskItems="taskArr"></ol-list>
         <send-button @send="onSendTransfer"></send-button>

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

