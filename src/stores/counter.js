import axios from 'axios'
import { defineStore } from 'pinia'

export const useCountStore = defineStore("state", {
  state: () => {
    return {
      data: []
    };
  },
  actions: {
    async saveState() {
      try {
        await axios
          .get(`https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/`)
          .then((res) => {
            console.log(res);
            this.data = res
            return res;
          });
      } catch (error) {
        this.alertErro = true;
      }
    },
  },
});
