// Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j. 
// Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". 
// Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.


window.onload = function () {
   const isNumChainingOut = new Promise((resolve, reject) => {
      console.log(0);
      reject();
   });

   isNumChainingOut
      .then(() => {
         console.log(1);
      },
         () => {
            console.log(2);
            return true;
         })

      .then((flag) => {
         console.log(3);
         return Promise.reject(flag);
      },
         () => {
            console.log(4);
         })

      .then(() => {
         console.log(5);
      },
         (flag) => {
            console.log(6);
            if (!flag) {
               return Promise.reject();
            }
         })

      .then(() => {
         console.log(7);
      },
         () => {
            console.log(8);
         })

      .then(() => {
         console.log(9);
         return Promise.reject();
      },
         () => {
            console.log(10);
         })

      .then(() => {
         console.log(11);
      },
         () => {
            console.log(12);
         })

}
