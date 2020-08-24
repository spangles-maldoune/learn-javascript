import axios from 'axios';

export const $http = {
   get: async function (url, payload) {
      const response = await axios.get(url, {
         ...payload
      });
      return response;
   },
   post: async function (url, payload) {
      const response = await axios.post(url, {
         ...payload
      });
      return response;
   }
}

export const clearEmpty = function (obj) {
   const newObj = {};
   Object.keys(obj).forEach(key => obj[key]? (newObj[key] = obj[key]) : null);
   return newObj;
}